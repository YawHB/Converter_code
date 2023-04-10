"use strict";

window.addEventListener("load", initApp);

function initApp() {
  /************************* Weights btns *************************************/

  //Make pounds button clickable
  const btnConvertPounds = document.querySelector("#convert-from-pounds-btn");
  btnConvertPounds.addEventListener("click", poundsToKilos);
  btnConvertPounds.addEventListener("click", poundsToStones);

  //Make kg button clickable
  const btnConvertKilos = document.querySelector("#convert-from-kilos-btn");
  btnConvertKilos.addEventListener("click", kilosToPounds);
  btnConvertKilos.addEventListener("click", kilosToStones);

  //Make stones button clickable
  const btnConvertStones = document.querySelector("#convert-from-stones-btn");
  btnConvertStones.addEventListener("click", stonesToPounds);
  btnConvertStones.addEventListener("click", stonesToKilos);

  /************************* Lengths btns *************************************/

  //Make feet to meters clickable
  const btnConvertFeet = document.querySelector("#convert-from-feet-btn");
  btnConvertFeet.addEventListener("click", feetToMeters);
  //Make feet to yards clickable
  btnConvertFeet.addEventListener("click", feetToYards);

  //Make meters to feet clickable
  const btnConverMeters = document.querySelector("#convert-from-meters-btn");
  btnConverMeters.addEventListener("click", metersToFeet);
  //Make meters to yards clickable
  btnConverMeters.addEventListener("click", metersToYards);

  //Make yards to meters clickable
  const btnConvertYards = document.querySelector("#convert-from-yards-btn");
  btnConvertYards.addEventListener("click", yardsToMeters);
  //Make yards to feet clickable
  btnConvertYards.addEventListener("click", yardsToFeet);

  /************************* Temperature btns *************************************/
  //Make celcius to fahrenheit clickable
  const btnConvertCelcius = document.querySelector("#convert-from-celcius-btn");
  btnConvertCelcius.addEventListener("click", celciusToFahrenheit);
  //Make celcius to Kelvin clickable
  btnConvertCelcius.addEventListener("click", celciusToKelvin);

  //Make fahrenheit to celcius clickable
  const btnConvertFahrenheit = document.querySelector(
    "#convert-from-fahrenheit-btn"
  );
  btnConvertFahrenheit.addEventListener("click", fahrenheitToCelcius);
  //Make fahrenheit to Kelvin clickable
  btnConvertFahrenheit.addEventListener("click", fahrenheitToKelvin);

  //Make Kelvin to Celcius clickable
  const btnConvertKelvin = document.querySelector("#convert-from-kelvin-btn");
  btnConvertKelvin.addEventListener("click", kelvinToCelcius);
  //Make Kelvin to fahrenheit clickable
  btnConvertKelvin.addEventListener("click", kelvinToFahrenheit);
}
