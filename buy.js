var cars = [
    {
        id: 1,
        make: "Mercedes",
        model: "Benz E Class",
        price: 35000,
        image: "./img/mercedes1.jpg"
    },
    {
        id: 2,
        make: "Mercedes",
        model: "Benz A45 AMG",
        price: 42000,
        image: "./img/mercedes2.jpg"
    },
    {
        id: 3,
        make: "Mercedes",
        model: "Benz S Class Carbio",
        price: 35000,
        image: "./img/mercedes3.jpg"
    },
    {
        id: 4,
        make: "BMW",
        model: "X4",
        price: 41000,
        image: "./img/BMW1.jpg"
    },
    {
        id: 5,
        make: "BMW",
        model: "18 Blue",
        price: 45000,
        image: "./img/bmw2.jpg"
    },
    {
        id: 6,
        make: "BMW",
        model: "M3 E92",
        price: 40000,
        image: "./img/bmw3.webp"
    },
    {
        id: 7,
        make: "Porsche",
        model:"Carrera GT",
        price: 50000,
        image: "./img/porsche1.jpg"
    },
    {
        id: 8,
        make: "Porsche",
        model: "991",
        price: 47000,
        image: "./img/porsche2.jpg"
    },
    {
        id: 9,
        make: "Porsche",
        model: "Panamera",
        price: 42000,
        image: "./img/porsche3.jpg"
    }
];

function displayCars() {
    var carContainer = document.getElementById("car-container");
    carContainer.innerHTML = "";
    cars.forEach(function(car) {
        var carDiv = document.createElement("div");
        carDiv.classList.add("car");
        carDiv.innerHTML = `
            <img src="${car.image}" alt="${car.make} ${car.model}">
            <p><strong>Id:</strong> ${car.id}
            <p><strong>Model:</strong> ${car.model}</p>
            <p><strong>Make:</strong> ${car.make}</p>
            <p><strong>Price:</strong> $${car.price}</p>
            <button onclick="addToCart(${car.id})">Add to Cart</button>
            
        `;
        carContainer.appendChild(carDiv);
    });
}
function addCarToGallery(car) {
    const carContainer = document.createElement('div');
    carContainer.classList.add('car');

    const imgElement = document.createElement('img');
    imgElement.src = car.image;
    carContainer.appendChild(imgElement);
}

cars.forEach(addCarToGallery);

function addToCart(carId) {
    var selectedCar = cars.find(function(car) {
        return car.id === carId;
    });
    if (selectedCar) {
        var shoppingCart = document.getElementById("shoppingCart");
        var cartItem = document.createElement("div");
        cartItem.innerHTML = `
            <p>${selectedCar.model} - $${selectedCar.price}</p>
            <img src="${selectedCar.image}" alt="${selectedCar.model}">
            <button class="remove-button">Remove</button>
        `;
        shoppingCart.appendChild(cartItem);

        var removeButton = cartItem.querySelector(".remove-button");
    removeButton.addEventListener("click", function() {
        shoppingCart.removeChild(cartItem); 
    });
    }
}

displayCars()


    
document.addEventListener("DOMContentLoaded", function() {
    const filterBtn = document.getElementById("filter-btn");
    const resetBtn = document.getElementById("reset-btn");
    const carContainer = document.getElementById("car-container");
    const carDiv = document.createElement("div")
    const makeFilter = document.getElementById("make-filter");
    const priceFilterMin = document.getElementById("price-filter-min");
    const priceFilterMax = document.getElementById("price-filter-max");


    function renderCars() {
        carContainer.innerHTML = "";
        const make = makeFilter.value;
        const minPrice = parseFloat(priceFilterMin.value) || 0;
        const maxPrice = parseFloat(priceFilterMax.value) || Infinity;

        cars.forEach(car => {
            if ((make === "all" || car.make.toLowerCase() === make) && car.price >= minPrice && car.price <= maxPrice) {
                const carElement = document.createElement("div");
                carElement.innerHTML = `
                <div class="car-info-box">
                    <img src="${car.image}" alt="${car.make} ${car.model}" class="car-image">
                    <div class="car-info">
                    <p><strong>Id:</strong> ${car.id}
                    <p><strong>Model:</strong> ${car.model}</p>
                    <p><strong>Make:</strong> ${car.make}</p>
                    <p><strong>Price:</strong> $${car.price}</p>
                    <button onclick="addToCart(${car.id})">Add to Cart</button>
                `;
                carContainer.appendChild(carElement);
            }
        });
    }

   
    filterBtn.addEventListener("click", renderCars);

   
    resetBtn.addEventListener("click", function() {
        makeFilter.value = "all";
        priceFilterMin.value = "";
        priceFilterMax.value = "";
        renderCars();
    });

  
    displayCars()
});

var total = 0;

function addToCart(carId) {
    var selectedCar = cars.find(function(car) {
        return car.id === carId;
    });
    if (selectedCar) {
        var shoppingCart = document.getElementById("shoppingCart");
        var cartItem = document.createElement("div");
        cartItem.innerHTML = `
            <p>${selectedCar.model} - $${selectedCar.price}</p>
            <img src="${selectedCar.image}" alt="${selectedCar.model}">
            <button class="remove-button">Remove</button>
        `;
        shoppingCart.appendChild(cartItem);

        var removeButton = cartItem.querySelector(".remove-button");
        removeButton.addEventListener("click", function() {
            shoppingCart.removeChild(cartItem); 
            updateTotal(-selectedCar.price);
        });

        updateTotal(selectedCar.price); 
    }
}

function updateTotal(price) {
    total += price;
    document.getElementById("total").textContent = "Total: $" + total;
}

displayCars();

function openPaymentPage() {
    window.location.href = "pay.html";
}

document.getElementById("checkout").addEventListener("click", function() {
    openPaymentPage(); 
});

document.addEventListener("DOMContentLoaded", function() {
  
});

document.addEventListener("DOMContentLoaded", function() {
    const carForm = document.getElementById("car-form");

    carForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const make = document.getElementById("make-input").value;
        const model = document.getElementById("model-input").value;
        const price = parseFloat(document.getElementById("price-input").value);
        const image = document.getElementById("image-input").files[0]; 

        const imageInput = document.getElementById("image-input");
        if (imageInput.files.length === 0) {
            alert("Car has been successfully added");
            return;
        }
       


        const newCarId = cars.length;

        const reader = new FileReader();
        reader.onload = function(event) {
            const imageUrl = event.target.result;

            
            const newCar = {
                id: 10,
                make: make,
                model: model,
                price: price,
                image: imageUrl
            }
            cars.push(newCar);
            displayCars()
        }
        reader.readAsDataURL(image);

        document.getElementById("make-input").value = "";
        document.getElementById("model-input").value = "";
        document.getElementById("price-input").value = "";
        document.getElementById("image-input").value = "";
    });
});

function addCarToLocalStorage(make, model, price, image) {
   
    let cars = JSON.parse(localStorage.getItem('cars')) || [];
    
 
    let newCar = {
        make: make,
        model: model,
        price: price,
        image: image
    };
    
    
    cars.push(newCar);
    
    localStorage.setItem('cars', JSON.stringify(cars));
}

document.getElementById('car-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    let make = document.getElementById('make-input').value;
    let model = document.getElementById('model-input').value;
    let price = document.getElementById('price-input').value;
    let image = document.getElementById('image-input').value;
    
   
    addCarToLocalStorage(make, model, price, image);
    
});

    
   








