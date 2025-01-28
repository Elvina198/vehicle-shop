document.addEventListener("DOMContentLoaded", function() {
  var form = document.getElementById("newsletter-form");
  var messageContainer = document.getElementById("message-container");

  form.addEventListener("submit", function(event) {
      event.preventDefault();

      var emailInput = document.getElementById("email");
      var newsletterCheckbox = document.getElementById("newsletter");

      if (emailInput.value.trim() === "" || !newsletterCheckbox.checked) {
          alert( "Please fill in all fields and agree to subscribe to the newsletter");
      } else {
         
          alert("Thank you for subscribing to the newsletter");
        
      }
  });
});