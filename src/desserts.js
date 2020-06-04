import { makeMenuItem } from "./menu-item.js";

function showAllDesserts(parent) {
  makeMenuItem(
    parent,
    "/dist/assets/pictures/ice-cream.jpg",
    "Ice Cream",
    "",
    "1.59$"
  );
  makeMenuItem(
    parent,
    "/dist/assets/pictures/princess-cake.jpg",
    "Princess Cake",
    "",
    "2.59$"
  );
  makeMenuItem(
    parent,
    "/dist/assets/pictures/rainbow-cake.jpg",
    "Rainbow Cake",
    "",
    "3.59$"
  );
  makeMenuItem(
    parent,
    "/dist/assets/pictures/souffle.jpg",
    "Souffle",
    "",
    "2.89$"
  );
  makeMenuItem(
    parent,
    "/dist/assets/pictures/tiramisu.jpg",
    "Tiramisu",
    "",
    "2.59$"
  );
}

export { showAllDesserts };
