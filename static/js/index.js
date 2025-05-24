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
// Each element: { skill: string, success: boolean }
var interp_labels = [];
// Mapping from frame index to index into info.skill_instructions
var skillMapping = [];
var info = null; // Will hold info.json data

// Preload info.json.
function preloadInfo() {
  $.getJSON(INTERP_BASE + "/info.json", function(json) {
    info = json;
    console.log("Loaded info:", info);
  }).fail(function(jqxhr, textStatus, error) {
    console.error("Failed to load info.json:", textStatus, error);
  });
}

// Preload all frame images, flagging any that fail.
function preloadInterpolationImages() {
  interp_images = [];
  for (var i = 0; i < NUM_INTERP_FRAMES; i++) {
    (function(i) {
      var path = INTERP_BASE + '/frame_' + String(i).padStart(4, '0') + '.png';
      var img = new Image();
      img.onerror = function() {
        console.warn('Image not found: ' + path);
        img.failed = true;
      };
      img.src = path;
      interp_images[i] = img;
    })(i);
  }
}

// Preload per-frame labels and build the skill‐to‐instruction mapping.
function preloadInterpolationLabels() {
  interp_labels = [];
  $.getJSON(INTERP_BASE + "/states.json", function(json) {
    for (var i = 0; i < NUM_INTERP_FRAMES; i++) {
      interp_labels[i] = {
        skill: json[i]["Current Skill"],
        success: json[i]["Current Skill Success"]
      };
    }
    // Build skillMapping: increment when success flips false → true
    skillMapping = [];
    if (NUM_INTERP_FRAMES > 0) {
      skillMapping[0] = 0;
      for (var i = 1; i < NUM_INTERP_FRAMES; i++) {
        if (interp_labels[i - 1].success === false && interp_labels[i].success === true) {
          skillMapping[i] = skillMapping[i - 1] + 1;
        } else {
          skillMapping[i] = skillMapping[i - 1];
        }
      }
    }
    console.log("Skill mapping:", skillMapping);
    setInterpolationImage($('#interpolation-slider').val());
  }).fail(function(jqxhr, textStatus, error) {
    console.error("Failed to load states.json:", textStatus, error);
  });
}

// Display a given frame index, with task instruction at the top band
// and skill instruction in a bottom band.
function setInterpolationImage(i) {
  var intendedIndex = parseInt(i, 10);
  var displayIndex = intendedIndex;

  // Find the nearest non-failed image forward...
  while (displayIndex < NUM_INTERP_FRAMES &&
         (!interp_images[displayIndex] || interp_images[displayIndex].failed)) {
    displayIndex++;
  }
  // ...or backward if none ahead.
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
  $(image).css({
    'max-width': '600px',
    'width': '100%',
    'height': 'auto'
  });

  // Lookup the raw state from the intended index
  var state = interp_labels[intendedIndex] || {};
  var rawSkill = state.skill || ("Frame " + intendedIndex);
  var instrIndex = skillMapping[intendedIndex] || 0;

  // Clamp to valid range
  if (info && info.skill_instructions && instrIndex >= info.skill_instructions.length) {
    instrIndex = info.skill_instructions.length - 1;
  }

  var skillName = rawSkill;
  var skillInstr = "";
  if (info && info.chain_params && info.skill_instructions) {
    skillName = info.chain_params[instrIndex].skill_name;
    skillInstr = info.skill_instructions[instrIndex];
  }

  // Gather texts
  var taskInstr = (info && info.task_instruction) ? info.task_instruction : "";
  var skillText = skillName.toUpperCase() +
                  (skillInstr ? ": " + skillInstr : "");

  // Build the container
  var wrapper = $('<div class="image-wrapper"></div>').css({
    'max-width': '600px',
    'margin': '0 auto',
    'text-align': 'center',
    'padding': '30px 10px 10px',
    'position': 'relative'
  });

  var imageContainer = $('<div class="image-container"></div>').css({
    'position': 'relative',
    'display': 'inline-block',
    'width': '100%'
  });
  imageContainer.append(image);

  // Top band: Task instruction
  if (taskInstr) {
    var topBand = $('<div class="task-instruction-band"></div>').text(taskInstr);
    topBand.css({
      'position': 'absolute',
      'top': '0',
      'left': '0',
      'width': '100%',
      'background-color': 'rgba(255,255,255,0.8)',
      'color': '#333',
      'padding': '10px',
      'font-size': '20px',
      'font-family': 'Georgia, serif',
      'box-sizing': 'border-box'
    });
    imageContainer.append(topBand);
  }

  // Bottom band: Skill + instruction
  if (skillText) {
    var bottomBand = $('<div class="skill-instruction-band"></div>').text(skillText);
    bottomBand.css({
      'position': 'absolute',
      'bottom': '0',
      'left': '0',
      'width': '100%',
      'background-color': 'rgba(255,255,255,0.8)',
      'color': '#000',
      'padding': '10px',
      'font-size': '16px',
      'font-family': 'Arial, sans-serif',
      'box-sizing': 'border-box'
    });
    imageContainer.append(bottomBand);
  }

  wrapper.append(imageContainer);
  $('#interpolation-image-wrapper').empty().append(wrapper);
}

// Switch demos: reset globals, reload JSON, images, labels.
function loadDemo(demoKey) {
  currentDemoKey = demoKey;
  INTERP_BASE = demos[demoKey].base;
  NUM_INTERP_FRAMES = demos[demoKey].frames;

  $('#interpolation-slider').val(0).prop('max', NUM_INTERP_FRAMES - 1);

  info = null;
  interp_images = [];
  interp_labels = [];
  skillMapping = [];

  preloadInfo();
  preloadInterpolationImages();
  preloadInterpolationLabels();
  setInterpolationImage(0);
}

$(document).ready(function() {
  // Demo selector
  $('#demo-selector').on('change', function() {
    loadDemo($(this).val());
  });

  // Mobile navbar toggle (Bulma)
  $(".navbar-burger").click(function() {
    $(".navbar-burger, .navbar-menu").toggleClass("is-active");
  });

  // Bulma carousel init (if present)
  var options = {
    slidesToScroll: 1,
    slidesToShow: 3,
    loop: true,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 3000
  };
  var carousels = bulmaCarousel.attach('.carousel', options);
  carousels.forEach(c => c.on('before:show', state => console.log(state)));

  // Preload default demo
  preloadInfo();
  preloadInterpolationImages();
  preloadInterpolationLabels();
  setInterpolationImage(0);

  // Slider input handler
  $('#interpolation-slider').on('input', function() {
    setInterpolationImage(this.value);
  });
});
