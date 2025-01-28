
document.getElementById("payment-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var cardNumber = document.getElementById("card-number").value;
    var cvc = document.getElementById("cvc").value;
    var expirationDate = document.getElementById("expiration-date").value;

    if (name && cardNumber && cvc && expirationDate) {
        document.getElementById("error-message").style.display = "none";
        document.getElementById("payment-form").style.display = "none";
        document.getElementById("success-message").style.display = "block";
    } else {
        document.getElementById("error-message").style.display = "block";
        alert("Please fill out all fields correctly.");
    }
});



