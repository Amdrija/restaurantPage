import { makeMenuItem } from "./menu-item.js";

function showAllMains(parent) {
  makeMenuItem(
    parent,
    "/dist/assets/pictures/angry-wife.jpg",
    "Angry Wife",
    "Double hamburger with chilli sauce, peppers, pickles and chedar",
    "13.59$"
  );
  makeMenuItem(
    parent,
    "/dist/assets/pictures/double-trouble.jpg",
    "Double Trouble",
    "Double hambruger with double chedar, bacon and barbeque sauce",
    "12.59$"
  );
  makeMenuItem(
    parent,
    "/dist/assets/pictures/egg-splash.jpg",
    "Egg Splash",
    "Tortilla hamburger with eggs, chedar, mozzarella and bacon",
    "9.59$"
  );
  makeMenuItem(
    parent,
    "/dist/assets/pictures/green-pasture.jpg",
    "Green Pasture",
    "Hamburger with parsley, mozzarella, tomato sauce and pickles",
    "10.59$"
  );
  makeMenuItem(
    parent,
    "/dist/assets/pictures/homemade.jpg",
    "Homemade",
    "Double Hamburger with homemade sauce, pickels, tomatos and onions",
    "14.59$"
  );
  makeMenuItem(
    parent,
    "/dist/assets/pictures/melting-potato.jpg",
    "Melting Potato",
    "Potato burger with chedar, mozarella, onions and mayo",
    "12.59$"
  );
  makeMenuItem(
    parent,
    "/dist/assets/pictures/original.jpg",
    "Original",
    "Hamburger with chedar, salad, tomato, onions and homemade sauce",
    "10.59$"
  );
  makeMenuItem(
    parent,
    "/dist/assets/pictures/tripple-dipple.jpg",
    "Tripple Dipple",
    "Triple everything, including pickles, cheese, tomatos, onions",
    "17.59$"
  );
}

export { showAllMains };
