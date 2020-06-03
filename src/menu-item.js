function makeMenuItem(parent, image_path, title, description, price) {
    let menu_item = document.createElement('div');
    menu_item.classList.add('menu-item');

    let item_image = document.createElement('img');
    item_image.setAttribute('src', image_path);

    let item_description = document.createElement('div');
    item_description.classList.add('item-description');

    let item_title = document.createElement('h3');
    item_title.innerText = title;

    let item_description_text = document.createElement('p');
    item_description_text.innerText = description;

    let item_price = document.createElement('h4');
    item_price.innerText = price;


    item_description.appendChild(item_title);
    item_description.appendChild(item_description_text);
    item_description.appendChild(item_price);

    menu_item.appendChild(item_image);
    menu_item.appendChild(item_description);

    parent.appendChild(menu_item);
}

export {
    makeMenuItem
};