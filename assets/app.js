$(document).ready(function() {
  let nextBtn = document.querySelectorAll(".next");
  let previousBtn = document.querySelectorAll(".previous");
  let steps = document.querySelectorAll(".step");
  let stepArr = Array.from(steps);

  let finish = document.querySelector(".finish");

  nextBtn.forEach(btn => {
    btn.addEventListener("click", function(e) {
      e.preventDefault();
      let curStep = document.querySelector(".step.active");
      curStepIndex = stepArr.indexOf(curStep);
      nextStep = stepArr[curStepIndex + 1];

      curStep.classList.remove("active");
      curStep.classList.add("hidden");

      nextStep.classList.remove("hidden");
      nextStep.classList.add("active");
    });
  });

  previousBtn.forEach(btn => {
    btn.addEventListener("click", function(e) {
      e.preventDefault();
      let curStep = document.querySelector(".step.active");
      curStepIndex = stepArr.indexOf(curStep);
      previousStep = stepArr[curStepIndex - 1];

      curStep.classList.remove("active");
      curStep.classList.add("hidden");

      previousStep.classList.remove("hidden");
      previousStep.classList.add("active");
    });
  });

  $(".save-sondage").submit(function(e) {
    e.preventDefault();
    let link = $(".save-sondage").attr("action");
    data = $(this).serialize();
    $.post(link, data, function(response) {
      console.log(response);
    });
  });
});
