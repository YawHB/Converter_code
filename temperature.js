"use strict";

/******************************* Converting Celcius *****************************************/

function celciusToFahrenheit() {
  const celciusInput = document.querySelector("#input-celcius");
  const celcius = parseInput(celciusInput);
  const displayFahrenheit = document.querySelector("#input-fahrenheit");
  displayFahrenheit.value = celcius.toFixed(2) * 1.8 + 32;
}

/******************************* Converting Kelvin *****************************************/

function celciusToKelvin() {
  const celciusInput = document.querySelector("#input-celcius");
  const celcius = parseInput(celciusInput);
  const displayKelvin = document.querySelector("#input-kelvin");
  displayKelvin.value = celcius.toFixed(2) * 1 + 273.15;
}

/******************************* Converting Fahrenheit *****************************************/

function fahrenheitToCelcius() {
  const fahrenheitInput = document.querySelector("#input-fahrenheit");
  const fahrenheit = parseInput(fahrenheitInput);
  const displayCelcius = document.querySelector("#input-celcius");
  displayCelcius.value = (fahrenheit.toFixed(2) - 32) / 1.8;
}
function fahrenheitToKelvin() {
  const fahrenheitInput = document.querySelector("#input-fahrenheit");
  const fahrenheit = parseInput(fahrenheitInput);
  const displayKelvin = document.querySelector("#input-kelvin");
  displayKelvin.value = (fahrenheit.toFixed(2) - 32) / 1.8 + 273.15;
}

/******************************* Converting Kelvin *****************************************/
function kelvinToCelcius() {
  const kelvinInput = document.querySelector("#input-kelvin");
  const kelvin = parseInput(kelvinInput);
  const displayCelcius = document.querySelector("#input-celcius");
  displayCelcius.value = kelvin.toFixed(2) - 273.15;
}
function kelvinToFahrenheit() {
  const kelvinInput = document.querySelector("#input-kelvin");
  const kelvin = parseInput(kelvinInput);
  const displayFahenreit = document.querySelector("#input-fahrenheit");
  displayFahenreit.value = (kelvin.toFixed(2) - 273.15) * 1.8 + 32;
}
