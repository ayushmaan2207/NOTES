// contact us alert
document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    alert("Name: " + name + "\nEmail: " + email + "\nMessage: " + message);


    document.getElementById("contactForm").reset();
});

// feedback alert 
document.getElementById("feedb").addEventListener("submit", function (event) {
    event.preventDefault();

    alert("Thanks giving feedback")
    document.getElementById("feedb").reset();
});