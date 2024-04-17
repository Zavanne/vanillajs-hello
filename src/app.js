/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let who = [
    "The dog",
    "A bear",
    "The mailman",
    "My bird",
    "A raver",
    "An alien",
    "A ninja",
    "The invisible man",
    "A time traveler",
    "A talking tree"
  ];
  let action = [
    "ate",
    "peed",
    "crushed",
    "broke",
    "stole",
    "teleported",
    "hypnotized"
  ];
  let what = [
    "my homework",
    "my phone",
    "the car",
    "my sandwich",
    "my shoes",
    "the remote control",
    "my dreams",
    "the internet",
    "my plans"
  ];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying",
    "at the disco",
    "in a parallel universe",
    "in the future",
    "during a solar eclipse",
    "at midnight"
  ];

  // selects a random value of an array
  function arraySelector(array) {
    let randomElement = array[Math.floor(Math.random() * array.length)];
    return randomElement;
  }

  function excuseGenerator() {
    let excuse =
      arraySelector(who) +
      " " +
      arraySelector(action) +
      " " +
      arraySelector(what) +
      " " +
      arraySelector(when);
    return excuse;
  }

  // Generates a random excuse when the page is loaded
  document.getElementById("excuse").textContent = excuseGenerator();

  // Generates a new excuse when the button is clicked
  document
    .getElementById("generateButton")
    .addEventListener("click", function() {
      document.getElementById("excuse").textContent = excuseGenerator();
    });
};
