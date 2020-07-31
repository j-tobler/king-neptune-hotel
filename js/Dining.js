$(document).ready(function() {
    $("body").addClass("js");

    /* Group each menu item with its associated description to show when the menu item is clicked */
    let foodCollection1 = [document.getElementById('caviar-beluga'),
        document.getElementById('caviar-beluga-info')];
    let foodCollection2 = [document.getElementById('tacos-al-pastor'),
        document.getElementById('tacos-al-pastor-info')];
    let foodCollection3 = [document.getElementById('pesto-farfalle'),
        document.getElementById('pesto-farfalle-info')];
    let foodCollection4 = [document.getElementById('oyster-plate'),
        document.getElementById('oyster-plate-info')];
    let foodCollection5 = [document.getElementById('crumbed-chicken-burger'),
        document.getElementById('crumbed-chicken-burger-info')];
    let foodCollection6 = [document.getElementById('olive-pizza'),
        document.getElementById('olive-pizza-info')];
    let foodCollection7 = [document.getElementById('roast-platter'),
        document.getElementById('roast-platter-info')];
    let foodCollection8 = [document.getElementById('baked-salmon'),
        document.getElementById('baked-salmon-info')];
    let foodCollection9 = [document.getElementById('sirloin-steak'),
        document.getElementById('sirloin-steak-info')];
    let foodCollections = [foodCollection1, foodCollection2, foodCollection3, foodCollection4, foodCollection5,
        foodCollection6, foodCollection7, foodCollection8, foodCollection9];

    for(let foodCollection of foodCollections) {
        /* When the menu item is clicked, replace any currently displaying descriptions with the description associated
        * with that menu item */
        foodCollection[0].addEventListener("click", function () {
            document.getElementById('intro').style.display = 'none';
            for(let collection of foodCollections) {
                collection[1].style.display = 'none';
            }
            foodCollection[1].style.display = 'block';
        });
    }

});