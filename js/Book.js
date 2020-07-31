$(document).ready(function() {
    $("body").addClass("js");

    /* The booking form */
    let form = document.getElementById('main-form');

    /* Function for handling submission of the booking form */
    function handleSubmit(event) {
        event.preventDefault();
        /* Get all form input */
        let checkIn = document.getElementById('check-in').value;
        let checkOut = document.getElementById('check-out').value;
        let adults = document.getElementById('adults').value;
        let children = document.getElementById('children').value;
        let firstName = document.getElementById('first-name').value;
        let lastName = document.getElementById('last-name').value;
        let email = document.getElementById('email').value;
        let phone = document.getElementById('phone').value;
        let address = document.getElementById('address').value;
        let city = document.getElementById('city').value;
        let state = document.getElementById('state').value;
        let country = document.getElementById('country').value;
        let postcode = document.getElementById('postcode').value;

        /* Write this form input into the html for displaying it back to the user to review their input */
        document.getElementById('dates').textContent = checkIn + " to " + checkOut;
        document.getElementById('adults-input').textContent = adults;
        document.getElementById('children-input').textContent = children;
        document.getElementById('name').textContent = firstName + " " + lastName;
        document.getElementById('email-input').textContent = email;
        document.getElementById('phone-input').textContent = phone;
        document.getElementById('address-input').textContent = address + ", " + city + " " + state + " " +
            postcode + ", " + country;

        /* Display the review form dialog box for the user to review their input */
        document.getElementById('review-form').style.visibility = 'visible';
    }

    form.addEventListener('submit', handleSubmit);

    /* When the user clicks the confirm button in the review form dialog box, display the confirmation message */
    let confirmButton = document.getElementById('confirm');
    confirmButton.addEventListener('click', function () {
        document.getElementById('confirmation-text').style.visibility = 'visible';
    })

});