import { makeMenuItem } from "./menu-item.js";

function showAllDrinks(parent) {
  makeMenuItem(
    parent,
    "/dist/assets/pictures/soft-drinks.jpg",
    "Soft Drinks",
    "Coca Cola, Fanta, Sprite, Schweppes",
    "2.59$"
  );
  makeMenuItem(
    parent,
    "/dist/assets/pictures/beer.jpg",
    "Draft beer",
    "Carlsberg, Blue Moon, Kruger Red",
    "3.59$"
  );
  makeMenuItem(
    parent,
    "/dist/assets/pictures/wine.jpg",
    "Wine",
    "Your choice of red wine, rose, chardonne or riesling",
    "3.59$"
  );
}

export { showAllDrinks };
