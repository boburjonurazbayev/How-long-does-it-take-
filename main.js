var elSurveyForm = document.querySelector(".survey__form");
var elSurveyInput = document.querySelector(".survey__input");
var elResultText = document.querySelector(".text");
var elResultMan = document.querySelector(".item:nth-child(1) .item__result");
var elResultBike = document.querySelector(".item:nth-child(2) .item__result");
var elResultCar = document.querySelector(".item:nth-child(3) .item__result");
var elResultPlane = document.querySelector(".item:nth-child(4) .item__result");

// Speeds

var speedMan = 3.6;
var speedBike = 20.1;
var speedCar = 70;
var speedPlane = 800;

elSurveyForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  var howFar = Number(elSurveyInput.value.trim());

  if (isNaN(howFar) || howFar <= 0) {
    elResultText.textContent = "To`g`ri ma`lumot kiriting!";
    return;
  }
  //  Results

  var resultMan = howFar / speedMan;
  var resultBike = howFar / speedBike;
  var resultCar = howFar / speedCar;
  var resultPlane = howFar / speedPlane;

  elResultMan.textContent =
    Math.floor(resultMan) +
    " soat " +
    Math.floor((resultMan - Math.floor(resultMan)) * 60) +
    " daqiqa " +
    Math.floor(
      ((resultMan - Math.floor(resultMan)) * 60 -
        Math.floor((resultMan - Math.floor(resultMan)) * 60)) *
        60
    ) +
    " soniya " +
    Math.round(
      (((resultMan - Math.floor(resultMan)) * 60 -
        Math.floor((resultMan - Math.floor(resultMan)) * 60)) *
        60 -
        Math.floor(
          ((resultMan - Math.floor(resultMan)) * 60 -
            Math.floor((resultMan - Math.floor(resultMan)) * 60)) *
            60
        )) *
        60
    ) +
    " millisoniya";

	elResultBike.textContent =
    Math.floor(resultBike) +
    " soat " +
    Math.floor((resultBike - Math.floor(resultBike)) * 60) +
    " daqiqa " +
    Math.floor(
      ((resultBike - Math.floor(resultBike)) * 60 -
        Math.floor((resultBike - Math.floor(resultBike)) * 60)) *
        60
    ) +
    " soniya " +
    Math.round(
      (((resultBike - Math.floor(resultBike)) * 60 -
        Math.floor((resultBike - Math.floor(resultBike)) * 60)) *
        60 -
        Math.floor(
          ((resultBike - Math.floor(resultBike)) * 60 -
            Math.floor((resultBike - Math.floor(resultBike)) * 60)) *
            60
        )) *
        60
    ) +
    " millisoniya";

	elResultCar.textContent =
    Math.floor(resultCar) +
    " soat " +
    Math.floor((resultCar - Math.floor(resultCar)) * 60) +
    " daqiqa " +
    Math.floor(
      ((resultCar - Math.floor(resultCar)) * 60 -
        Math.floor((resultCar - Math.floor(resultCar)) * 60)) *
        60
    ) +
    " soniya " +
    Math.round(
      (((resultCar - Math.floor(resultCar)) * 60 -
        Math.floor((resultCar - Math.floor(resultCar)) * 60)) *
        60 -
        Math.floor(
          ((resultCar - Math.floor(resultCar)) * 60 -
            Math.floor((resultCar - Math.floor(resultCar)) * 60)) *
            60
        )) *
        60
    ) +
    " millisoniya";

	elResultPlane.textContent =
    Math.floor(resultPlane) +
    " soat " +
    Math.floor((resultPlane - Math.floor(resultPlane)) * 60) +
    " daqiqa " +
    Math.floor(
      ((resultPlane - Math.floor(resultPlane)) * 60 -
        Math.floor((resultPlane - Math.floor(resultPlane)) * 60)) *
        60
    ) +
    " soniya " +
    Math.round(
      (((resultPlane - Math.floor(resultPlane)) * 60 -
        Math.floor((resultPlane - Math.floor(resultPlane)) * 60)) *
        60 -
        Math.floor(
          ((resultPlane - Math.floor(resultPlane)) * 60 -
            Math.floor((resultPlane - Math.floor(resultPlane)) * 60)) *
            60
        )) *
        60
    ) +
    " millisoniya";
});
