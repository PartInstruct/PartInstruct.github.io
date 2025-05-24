window.HELP_IMPROVE_VIDEOJS = false;

// Define your demos. Adjust the paths and frame counts as needed.
var demos = {
  "demo1": {
    base: "./static/interpolation/stacked",
    frames: 119
  },
  "demo2": {
    base: "./static/interpolation/180926",
    frames: 137
  },
  "demo3": {
    base: "./static/interpolation/300036",
    frames: 114
  },
  "demo4": {
    base: "./static/interpolation/300183",
    frames: 62
  }
};

// Current demo key (default to "demo1")
var currentDemoKey = "demo1";

// Set global variables from the current demo.
var INTERP_BASE = demos[currentDemoKey].base;
var NUM_INTERP_FRAMES = demos[currentDemoKey].frames;

var interp_images = [];
// Instead of storing just a skill string, we store an object for each frame:
var interp_labels = []; // each element will be: { skill: string, success: boolean }
var skillMapping = [];  // Mapping from frame index to the index into info.skill_instructions.
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

// Preload states from states.json, storing both "Current Skill" and "Current Skill Success".
function preloadInterpolationLabels() {
  interp_labels = []; // clear the labels array
  $.getJSON(INTERP_BASE + "/states.json", function(json) {
    for (var i = 0; i < NUM_INTERP_FRAMES; i++) {
      interp_labels[i] = {
        skill: json[i]["Current Skill"],
        success: json[i]["Current Skill Success"]
      };
    }
    // Compute the mapping array.
    // The mapping will store for each frame an index into info.skill_instructions.
    skillMapping = [];
    if (NUM_INTERP_FRAMES > 0) {
      skillMapping[0] = 0;
      for (var i = 1; i < NUM_INTERP_FRAMES; i++) {
        // If the previous state's success is false and the current state's success becomes true,
        // then we move to the next instruction.
        if (interp_labels[i - 1].success === false && interp_labels[i].success === true) {
          skillMapping[i] = skillMapping[i - 1] + 1;
        } else {
          skillMapping[i] = skillMapping[i - 1];
        }
      }
    }
    console.log("Skill mapping:", skillMapping);
    // Once JSON is loaded, update the displayed frame.
    setInterpolationImage($('#interpolation-slider').val());
  });
}

// Display the image (and its label) for the intended frame index.
// If the image at the intended index is missing, loop forward until a valid image is found,
// but always use the intended index for JSON lookups.
function setInterpolationImage(i) {
  var intendedIndex = parseInt(i, 10); // the slider's intended frame index
  var displayIndex = intendedIndex;
  
  // Loop forward until a valid image is found.
  while (displayIndex < NUM_INTERP_FRAMES &&
         (!interp_images[displayIndex] || interp_images[displayIndex].failed)) {
    displayIndex++;
  }
  // If no valid image is found forward, search backward.
  if (displayIndex >= NUM_INTERP_FRAMES) {
    displayIndex = intendedIndex;
    while (displayIndex >= 0 &&
           (!interp_images[displayIndex] || interp_images[displayIndex].failed)) {
      displayIndex--;
    }
    if (displayIndex < 0) {
      $('#interpolation-image-wrapper')
        .empty()
        .append('<div class="error">No valid frame available.</div>');
      return;
    }
  }
  
  var image = interp_images[displayIndex];
  // Apply scaling to the image.
  $(image).css({
    'max-width': '600px',
    'width': '100%',
    'height': 'auto'
  });
  
  // Use the intended index to look up the state from interp_labels.
  var state = interp_labels[intendedIndex];
  var rawSkill = (state && state.skill) ? state.skill : ("Frame " + intendedIndex);
  
  // Use our precomputed mapping to get the instruction index.
  var instrIndex = (skillMapping[intendedIndex] !== undefined) ? skillMapping[intendedIndex] : 0;
  // Clamp the instruction index to the available instructions.
  if (info && info.skill_instructions && instrIndex >= info.skill_instructions.length) {
    instrIndex = info.skill_instructions.length - 1;
  }
  
  // If info.json is loaded, use its chain_params and skill_instructions.
  var skill = rawSkill;
  var instruction = "";
  if (info && info.chain_params && info.skill_instructions) {
    skill = info.chain_params[instrIndex].skill_name;
    instruction = info.skill_instructions[instrIndex];
  }
  
  // Compose the label text: skill in uppercase and instruction appended.
  var labelText = (instruction !== "")
                    ? skill.toUpperCase() + ": " + instruction
                    : skill.toUpperCase();
  
  var label = $('<div class="image-label"></div>').text(labelText);
  label.css({
    'font-size': '16px',
    'color': '#000',
    'margin-bottom': '10px',
    'font-family': 'Arial, sans-serif'
  });
  
  // Build the overall wrapper.
  var wrapper = $('<div class="image-wrapper"></div>');
  wrapper.css({
    'max-width': '600px',
    'margin': '0 auto',
    'text-align': 'center',
    'padding-top': '30px',
    'padding-left': '10px',
    'padding-right': '10px',
    'position': 'relative'
  });
  
  // Create a container for the image and the overlapping band.
  var imageContainer = $('<div class="image-container"></div>');
  imageContainer.css({
    'position': 'relative',
    'display': 'inline-block',
    'width': '100%'
  });
  
  imageContainer.append(image);
  
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
    imageContainer.append(band);
  }
  
  wrapper.append(label);
  wrapper.append(imageContainer);
  
  $('#interpolation-image-wrapper').empty().append(wrapper);
}

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
  skillMapping = [];
  
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
    autoplaySpeed: 3000
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
