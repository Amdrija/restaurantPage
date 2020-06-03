import {
    makeMenuItem
} from './menu-item.js';

function showAllStarters(parent) {
    makeMenuItem(parent, '/dist/assets/pictures/fried-chedar.jpg', 'Fried Chedar', 'Fried cheddar served with tartar sauce', '4.59$');
    makeMenuItem(parent, '/dist/assets/pictures/fries.jpg', 'French Fries', 'Thin French fries served with ketchup and mayo', '2.89$');
    makeMenuItem(parent, '/dist/assets/pictures/onion-rings.jpg', 'Onion Rings', 'Fried onion rings served with any 2 sauces', '2.49$');
}

export {
    showAllStarters
};