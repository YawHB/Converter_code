"use strict";

/******************************* Converting Pounds *****************************************/
function poundsToKilos() {
  const inputPounds = document.querySelector("#input-pounds");
  const pounds = parseInput(inputPounds);
  convertUnit(pounds, 1 / 2.2046, "kilos");
}

function poundsToStones() {
  const inputPounds = document.querySelector("#input-pounds");
  const pounds = parseInput(inputPounds);
  convertUnit(pounds, 1 * 0.071429, "stones");
}

/******************************* Converting kilo *****************************************/
function kilosToPounds() {
  const inputKilos = document.querySelector("#input-kilos");
  const kilos = parseInput(inputKilos);
  convertUnit(kilos, 1 * 2.2046, "pounds");
}

function kilosToStones() {
  const inputKilos = document.querySelector("#input-kilos");
  const kilos = parseInput(inputKilos);
  convertUnit(kilos, 1 * 0.1574, "stones");
}

/******************************* Converting Stones *****************************************/

function stonesToPounds() {
  const stonesInput = document.querySelector("#input-stones");
  console.log(stonesInput);
  const stones = parseInput(stonesInput);
  convertUnit(stones, 1 * 14, "pounds");
}

function stonesToKilos() {
  const stonesInput = document.querySelector("#input-stones");
  console.log(stonesInput);
  const stones = parseInput(stonesInput);
  convertUnit(stones, 1 / 0.15747, "kilos");
}

/******************************* Generic Functions *****************************************/

//Converter function
function convertUnit(inputValue, conversionRate, outputUnit) {
  const outputValue = inputValue * conversionRate;
  const display = document.querySelector(`#input-${outputUnit}`);
  display.value = outputValue.toFixed(2);
}

// Converts the input from a string to a number
function parseInput(inputValue) {
  console.log("test");
  return parseFloat(inputValue.value);
}
