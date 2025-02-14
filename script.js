function submitForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  if (name === "" || email === "" || message === "") {
      alert("Please fill in all fields.");
      return;
  }

  
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return;
  }

  console.log("Name: " + name);
  console.log("Email: " + email);
  console.log("Message: " + message);
}

// Task 1: Create an array of car objects

    // Add other car objects here
    // Example 

      //id: '1',
			//make: 'Toyota',
			//model: 'Camry',
			//price: 24000,
			//image: ''

  
  // Task 2: Function to add a new car to the car list

  
  // Task 3: Function to handle the form submission for adding a new car

  
    // Get the selected image file

      // Create a FileReader to read the image file
    
  
      // Define the event when the FileReader has loaded the image
   
  
      // Read the image file as a data URL

  
  // Task 4: Display all cars in the list

  
  // Task 5: Display only the cars that match the filters

  // Task 6: Update the shopping cart display and total

  // Task 7: Attach event listeners and initialize on document ready
    // Display all cars on page load
  
  
    // Task 8: Filter cars when the filter values change
  
  
    // Task 9: Add or remove the 'selected' class when a car is clicked

    // Task 10: Add a car to the cart when the 'Add to Cart' button is clicked
 
  
    // Task 11: Remove a car from the cart when the 'Remove' button is clicked

  
    // Task 12: Checkout functionality
  
        // Show sale button
      
        // Disable add-to-cart buttons
   
  
    // Task 13: Sale functionality
   
      // Hide sale button
    
      // Get the IDs of selected cars in the cart
      
      // Remove the selected cars from the car list
      
      // Update the car list and UI
     