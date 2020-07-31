$(document).ready(function() {
    $("body").addClass("js");

    /* Group each map element together with its associated icon pop-up and description display */
    let mapCollection1 = [document.getElementById('restaurant'),
        document.getElementById('restaurant-pop-up'),
        document.getElementById('restaurant-info')];
    let mapCollection2 = [document.getElementById('room'),
        document.getElementById('room-pop-up'),
        document.getElementById('room-info')];
    let mapCollection3 = [document.getElementById('function-room'),
        document.getElementById('function-room-pop-up'),
        document.getElementById('function-room-info')];
    let mapCollection4 = [document.getElementById('pod-room'),
        document.getElementById('pod-room-pop-up'),
        document.getElementById('pod-room-info')];
    let mapCollection5 = [document.getElementById('reception'),
        document.getElementById('reception-pop-up'),
        document.getElementById('reception-info')];
    let mapCollection6 = [document.getElementById('hallway'),
        document.getElementById('hallway-pop-up'),
        document.getElementById('hallway-info')];
    let mapCollections = [mapCollection1, mapCollection2, mapCollection3, mapCollection4, mapCollection5, mapCollection6];

    for(let mapCollection of mapCollections) {
        /* Make the icon pop-up display when the user hovers over the map element */
        mapCollection[0].addEventListener("mouseover", function () {
            mapCollection[1].style.visibility = 'visible';
        });
        mapCollection[0].addEventListener("mouseout", function () {
            mapCollection[1].style.visibility = 'hidden';
        });
        /* Make the associated description display when the user clicks on the map element */
        mapCollection[0].addEventListener("click", function () {
            // remove any currently displaying paragraphs
            document.getElementById('intro').style.display = 'none';
            for(let collection of mapCollections) {
                collection[2].style.display = 'none';
            }
            // make ours display
            mapCollection[2].style.display = 'block';
        });
    }
});