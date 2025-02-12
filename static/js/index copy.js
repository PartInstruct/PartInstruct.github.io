window.HELP_IMPROVE_VIDEOJS = false;

// Define your demos. Adjust the paths and frame counts as needed.
var demos = {
  "demo1": {
    base: "./static/interpolation/stacked",
    frames: 119
  },
  "demo2": {
    base: "./static/interpolation/180926",
    frames: 147
  },
  "demo3": {
    base: "./static/interpolation/300036",
    frames: 118
  },
  "demo4": {
    base: "./static/interpolation/300183",
    frames: 109
  }
};

// Current demo key (default to "demo1")
var currentDemoKey = "demo1";

// Set global variables from the current demo.
var INTERP_BASE = demos[currentDemoKey].base;
var NUM_INTERP_FRAMES = demos[currentDemoKey].frames;

var interp_images = [];
var interp_labels = [];
var info = null; // Global variable to store info.json data

// Preload info.json.
function preloadInfo() {
  $.getJSON(INTERP_BASE + "/info.json", function(json) {
    info = json;
    console.log("Loaded info:", info);
  }).fail(function(jqxhr, textStatus, error) {
    console.error("Failed to load info.json:", textStatus, error);
  });
}

// Preload images and mark any that fail to load.
function preloadInterpolationImages() {
  interp_images = []; // clear the images array
  for (var i = 0; i < NUM_INTERP_FRAMES; i++) {
    (function(i) {
      var path = INTERP_BASE + '/frame_' + String(i).padStart(4, '0') + '.png';
      var img = new Image();
      img.onerror = function() {
        console.warn('Image not found: ' + path);
        img.failed = true;  // Flag this image as missing.
      };
      img.src = path;
      interp_images[i] = img;
    })(i);
  }
}

// Preload labels from states.json.
function preloadInterpolationLabels() {
  interp_labels = []; // clear the labels array
  $.getJSON(INTERP_BASE + "/states.json", function(json) {
    for (var i = 0; i < NUM_INTERP_FRAMES; i++) {
      interp_labels[i] = json[i]["Current Skill"];
    }
    // Once JSON is loaded, update the displayed frame.
    setInterpolationImage($('#interpolation-slider').val());
  });
}

// Display the image (and its label) for the intended frame index.
// If the image at the intended index is missing, loop forward until a valid image is found,
// but always use the original (intended) index to look up the JSON information.
function setInterpolationImage(i) {
  var image = interp_images[i];

  // If the image is missing or flagged as failed, search for a valid frame.
  if (!image || image.failed) {
    var found = false;
    // Search forward.
    for (var j = i + 1; j < NUM_INTERP_FRAMES; j++) {
      if (interp_images[j] && !interp_images[j].failed) {
        i = j;
        image = interp_images[j];
        found = true;
        break;
      }
    }
    // If not found, search backward.
    if (!found) {
      for (var j = i - 1; j >= 0; j--) {
        if (interp_images[j] && !interp_images[j].failed) {
          i = j;
          image = interp_images[j];
          found = true;
          break;
        }
      }
    }
    // If still not found, show an error message.
    if (!found) {
      $('#interpolation-image-wrapper')
        .empty()
        .append('<div class="error">No valid frame available.</div>');
      return;
    }
  }

  // Prevent dragging and context menu actions on the image.
  image.ondragstart = function() { return false; };
  image.oncontextmenu = function() { return false; };

  // Scale the image down.
  $(image).css({
    'max-width': '600px',  // Adjust to control image size.
    'width': '100%',
    'height': 'auto'
  });

  // Get the skill from states.json (or fall back).
  var skill = (interp_labels[i] !== undefined && interp_labels[i] !== null)
              ? interp_labels[i]
              : "Frame " + i;
  var instruction = "";
  
  // If info.json is loaded and contains chain_params and skill_instructions,
  // search for the instruction corresponding to the current skill.
  if (info && info.chain_params && info.skill_instructions) {
    for (var j = 0; j < info.chain_params.length; j++) {
      if (info.chain_params[j].skill_name === skill) {
        instruction = info.skill_instructions[j];
        break;
      }
    }
  }
  
  // Compose the label text.
  // Convert the skill name to uppercase while leaving the instruction unchanged.
  var labelText;
  if (instruction !== "") {
      labelText = skill.toUpperCase() + ": " + instruction;
  } else {
      labelText = skill.toUpperCase();
  }

  // Create the label element.
  var label = $('<div class="image-label"></div>').text(labelText);
  // Style the label.
  label.css({
    'font-size': '16px',
    'color': '#000',
    'margin-bottom': '10px',
    'font-family': 'Arial, sans-serif'
  });

  // Create the overall wrapper.
  var wrapper = $('<div class="image-wrapper"></div>');
  wrapper.css({
    'max-width': '600px',
    'margin': '0 auto',
    'text-align': 'center',
    'padding-top': '30px',
    'padding-left': '10px',
    'padding-right': '10px',
    'position': 'relative' // Enable absolute positioning within this wrapper.
  });

  // Create a container for the image and the overlapping band.
  var imageContainer = $('<div class="image-container"></div>');
  imageContainer.css({
    'position': 'relative',
    'display': 'inline-block',
    'width': '100%'
  });

  // Append the image into the image container.
  imageContainer.append(image);

  // Create the band that overlaps the bottom part of the image.
  if (info && info.task_instruction) {
    var band = $('<div class="task-instruction-band"></div>').text(info.task_instruction);
    band.css({
      'position': 'absolute',
      'bottom': '0',
      'left': '0',
      'width': '100%',
      'background-color': 'rgba(238,238,238,0.7)', // Semi-transparent background.
      'color': '#333',
      'padding': '10px',
      'font-size': '20px',                // Increased font size.
      'font-family': 'Georgia, serif',    // Fancy font.
      'box-sizing': 'border-box'
    });
    // Append the band so that it overlaps the image.
    imageContainer.append(band);
  }

  // Append the label and the image container into the overall wrapper.
  wrapper.append(label);
  wrapper.append(imageContainer);

  // Update the display.
  $('#interpolation-image-wrapper').empty().append(wrapper);
}

$(document).ready(function() {
  // Toggle the navbar burger for mobile view.
  $(".navbar-burger").click(function() {
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");
  });

  // Initialize Bulma carousel (if any) with options.
  var options = {
    slidesToScroll: 1,
    slidesToShow: 3,
    loop: true,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 3000,
  };

  var carousels = bulmaCarousel.attach('.carousel', options);
  for (var i = 0; i < carousels.length; i++) {
    carousels[i].on('before:show', state => {
      console.log(state);
    });
  }

  // Access BulmaCarousel instance on an element (if available).
  var element = document.querySelector('#my-element');
  if (element && element.bulmaCarousel) {
    element.bulmaCarousel.on('before-show', function(state) {
      console.log(state);
    });
  }

  // Preload info.json, images, and labels.
  preloadInfo();
  preloadInterpolationImages();
  preloadInterpolationLabels();

  // Display the initial frame.
  setInterpolationImage(0);

  // Update the displayed frame whenever the slider moves.
  $('#interpolation-slider').on('input', function(event) {
    setInterpolationImage(this.value);
  });
  
  // Adjust the slider's maximum to match the number of frames.
  $('#interpolation-slider').prop('max', NUM_INTERP_FRAMES - 1);
});

// Function to load a demo based on the selected key.
function loadDemo(demoKey) {
  currentDemoKey = demoKey;
  INTERP_BASE = demos[demoKey].base;
  NUM_INTERP_FRAMES = demos[demoKey].frames;

  $('#interpolation-slider').val(0);
  $('#interpolation-slider').prop('max', NUM_INTERP_FRAMES - 1);

  // Clear previous data.
  info = null;
  interp_images = [];
  interp_labels = [];

  // Preload new data.
  preloadInfo();
  preloadInterpolationImages();
  preloadInterpolationLabels();

  setInterpolationImage(0);
}

$(document).ready(function() {
  // Attach event listener to the demo selector drop down.
  $('#demo-selector').on('change', function() {
    var selectedDemo = $(this).val();
    loadDemo(selectedDemo);
  });

  // Toggle the navbar burger for mobile view.
  $(".navbar-burger").click(function() {
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");
  });

  // Initialize Bulma carousel (if any) with options.
  var options = {
    slidesToScroll: 1,
    slidesToShow: 3,
    loop: true,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 3000,
  };

  var carousels = bulmaCarousel.attach('.carousel', options);
  for (var i = 0; i < carousels.length; i++) {
    carousels[i].on('before:show', state => {
      console.log(state);
    });
  }

  var element = document.querySelector('#my-element');
  if (element && element.bulmaCarousel) {
    element.bulmaCarousel.on('before-show', function(state) {
      console.log(state);
    });
  }

  // Preload data for the default demo.
  preloadInfo();
  preloadInterpolationImages();
  preloadInterpolationLabels();

  setInterpolationImage(0);

  // Update the displayed frame whenever the slider moves.
  $('#interpolation-slider').on('input', function(event) {
    setInterpolationImage(this.value);
  });
});
