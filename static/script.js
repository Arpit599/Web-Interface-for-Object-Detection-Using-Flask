// Functions to deal with button events
function myPreviewFun() {
  // console.log("Inside function", previewButton);
    let previewButton = document.getElementById("previewBtn");
    previewButton.classList.toggle("btn-inactive");

    if(previewButton.textContent === "On"){
      previewButton.textContent = "Off";
    } else{
      previewButton.textContent = "On";
    }
}

function myFlipFun() {
    let flipButton = document.getElementById("flipBtn");
    flipButton.classList.toggle("btn-inactive");

    if(flipButton.textContent === "On"){
      flipButton.textContent = "Off";
    } else{
      flipButton.textContent = "On";
    }
}

function myRunModelFun() {
    let modelButton = document.getElementById("modelBtn");
    modelButton.classList.toggle("btn-inactive");

    if(modelButton.textContent === "On"){
      modelButton.textContent = "Off";
    } else{
      modelButton.textContent = "On";
    }
}

$(function () {
  // Preview switch
  $("a#cam-preview").bind("click", function () {
    $.getJSON("/request_preview_switch", function (data) {
      // do nothing
    });
    return false;
  });
});

$(function () {
  // Flip horizontal switch
  $("a#flip-horizontal").bind("click", function () {
    $.getJSON("/request_flipH_switch", function (data) {
      // do nothing
    });
    return false;
  });
});

$(function () {
  // Model switch
  $("a#use-model").bind("click", function () {
    $.getJSON("/request_model_switch", function (data) {
      // do nothing
    });
    return false;
  });
});

$(function () {
  // exposure down
  $("a#exposure-down").bind("click", function () {
    $.getJSON("/request_exposure_down", function (data) {
      // do nothing
    });
    return false;
  });
});

$(function () {
  // exposure up
  $("a#exposure-up").bind("click", function () {
    $.getJSON("/request_exposure_up", function (data) {
      // do nothing
    });
    return false;
  });
});

$(function () {
  // contrast down
  $("a#contrast-down").bind("click", function () {
    $.getJSON("/request_contrast_down", function (data) {
      // do nothing
    });
    return false;
  });
});

$(function () {
  // contrast up
  $("a#contrast-up").bind("click", function () {
    $.getJSON("/request_contrast_up", function (data) {
      // do nothing
    });
    return false;
  });
});

$(function () {
  // reset camera
  $("a#reset-cam").bind("click", function () {
    $.getJSON("/reset_camera", function (data) {
      // do nothing
    });
    return false;
  });
});
