// JavaScript for AquaBloom website

// Handle form submission
const form = document.getElementById('contact-form');
form.addEventListener('submit', function (event) {
    event.preventDefault();

    // Collect form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Display confirmation message
    alert(`Thank you, ${name}! Your message has been received. We will contact you at ${email}.`);

    // Clear form fields
    form.reset();
});
