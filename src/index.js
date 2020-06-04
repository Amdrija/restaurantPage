import { showAllStarters } from "./starters.js";
import { showAllMains } from "./mains.js";
import { showAllDrinks } from "./drinks.js";
import { showAllDesserts } from "./desserts.js";

let menu_container;
let starters_button;
let mains_button;
let drinks_button;
let desserts_button;
let last_clicked_button;

function clearMenuContainer() {
  menu_container.innerText = "";
}

/* * buttton_on is a button that we want to toggle the class active on
     button_off is a button that we want to toggle the calss active off
*/
function toggleButtonActive(button_on, button_off) {
  button_on.classList.add("active");
  button_off.classList.remove("active");
}

function onload() {
  menu_container = document.getElementsByClassName("menu")[0];
  starters_button = document.getElementById("starters");
  mains_button = document.getElementById("mains");
  desserts_button = document.getElementById("desserts");
  drinks_button = document.getElementById("drinks");

  showAllMains(menu_container);

  mains_button.classList.add("active");
  //because onload, we are at mains tab
  //if we switch tabs, the last_clicked_button should be mains
  //so that we can toggle the active class on it
  last_clicked_button = mains_button;

  starters_button.addEventListener("click", function () {
    clearMenuContainer();
    showAllStarters(menu_container);
    toggleButtonActive(starters_button, last_clicked_button);
    last_clicked_button = starters_button;
  });

  mains_button.addEventListener("click", function () {
    clearMenuContainer();
    showAllMains(menu_container);
    toggleButtonActive(mains_button, last_clicked_button);
    last_clicked_button = mains_button;
  });

  desserts_button.addEventListener("click", function () {
    clearMenuContainer();
    showAllDesserts(menu_container);
    toggleButtonActive(desserts_button, last_clicked_button);
    last_clicked_button = desserts_button;
  });

  drinks_button.addEventListener("click", function () {
    clearMenuContainer();
    showAllDrinks(menu_container);
    toggleButtonActive(drinks_button, last_clicked_button);
    last_clicked_button = drinks_button;
  });
}

document.addEventListener("DOMContentLoaded", onload);
