document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    // You can add your own logic here to handle form submission,
    // such as sending an email or saving the message to a database.

    // For demonstration purposes, let's log the form data to the console.
    for (let pair of formData.entries()) {
        console.log(pair[0] + ": " + pair[1]);
    }

    // Optional: Show a success message or redirect to a thank-you page.
    alert("Message sent successfully!");
    event.target.reset(); // Clear the form fields after submission.
});

document.getElementById("signup-form").addEventListener("submit", function (event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    // You can add your own logic here to handle sign-up data,
    // such as sending the data to a server for registration.

    // For demonstration purposes, let's log the form data to the console.
    for (let pair of formData.entries()) {
        console.log(pair[0] + ": " + pair[1]);
    }

    // Optional: Show a success message or redirect to a thank-you page.
    alert("Sign Up successful!");
    event.target.reset(); // Clear the form fields after submission.
});
