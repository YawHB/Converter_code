"use strict";

/******************************* Converting Feet *****************************************/

function feetToMeters() {
  const inputFeet = document.querySelector("#input-feet");
  const feet = parseInput(inputFeet);
  convertUnit(feet, 1 / 3.2808, "meters");
}

function feetToYards() {
  const feetinput = document.querySelector("#input-feet");
  const feet = parseInput(feetinput);
  convertUnit(feet, 1 * 0.33333, "yards");
}

/******************************* Converting Meters *****************************************/
function metersToFeet() {
  const metersInput = document.querySelector("#input-meters");
  const meters = parseInput(metersInput);
  convertUnit(meters, 1 * 3.2808, "feet");
}

function metersToYards() {
  const metersInput = document.querySelector("#input-meters");
  const meters = parseInput(metersInput);
  convertUnit(meters, 1 * 1.0936, "yards");
}

/******************************* Converting Yards *****************************************/

function yardsToMeters() {
  const yardsInput = document.querySelector("#input-yards");
  const yards = parseInput(yardsInput);
  convertUnit(yards, 1 / 1.0936, "meters");
}

function yardsToFeet() {
  const yardsInput = document.querySelector("#input-yards");
  const yards = parseInput(yardsInput);
  console.log(yards);
  convertUnit(yards, 1 * 3, "feet");
}
