$(document).ready(function() {
    $("body").addClass("js");

    /* Since JavaScript is available, hide the display of all fish icons beyond the first 6 */
    document.getElementById('more-fish').style.display = 'none';
    /* Display the button which reveals the fish we have hidden */
    let expandButton = document.getElementById('expand-button');
    expandButton.style.display = 'block';

    /* When this button is clicked, display the fish we have hidden */
    expandButton.addEventListener('click', function () {
        expandButton.style.display = 'none';
        document.getElementById('more-fish').style.display = 'flex';
    });

});