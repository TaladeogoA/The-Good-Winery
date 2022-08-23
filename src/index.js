// Preloader


var loader;

function loadNow(opacity) {
	if (opacity <= 0) {
		displayContent();
	} else {
		loader.style.opacity = opacity;
		window.setTimeout(function () {
			loadNow(opacity - 0.05);
		}, 50);
	}
}

function displayContent() {
	loader.style.display = 'none';
	document.getElementById('content').style.display = 'block';
}

document.addEventListener("DOMContentLoaded", function () {
	loader = document.getElementById('loader');
	loadNow(1);
});









// Open Tabs

function setUpTabs() {
	document.querySelectorAll(".tablinks").forEach(button => {
		button.addEventListener("click", () => {
			const sideBar = button.parentElement; //sideBar is the parent element of the button with class tab
			const tabsContainer = sideBar.parentElement; //tabsContainer is the div with the class "catalog"
			const tabNumber = button.dataset.forTab; //tabNumber is the number of the tab we want to open
			const tabToActivate = tabsContainer.querySelector(`.tab-content[data-tab="${tabNumber}"]`); //tabToActivate is the div with the class "tab-content" with the data-tab attribute of the same value as tabNumber

			// console.log(sideBar);
			// console.log(tabsContainer);
			// console.log(tabNumber);
			// console.log(tabToActivate);

			sideBar.querySelectorAll(".tablinks").forEach(button => {
				button.classList.remove("button--active");
			}) //remove the class "button--active" from all buttons in the sideBar

			tabsContainer.querySelectorAll(".tab-content").forEach(tab => {
				tab.classList.remove("tab-content--active");
			}); //remove the class "tab-content--active" from all tabs in the tabsContainer

			button.classList.add("button--active"); //add the class "button--active" to the button that was clicked
			tabToActivate.classList.add("tab-content--active"); //add the class "tab-content--active" to the tab that was clicked
		});
	});


};

document.addEventListener("DOMContentLoaded", () => setUpTabs());




// Side Navigation

function openNav() {
	let navigation = document.getElementById('hidden-nav');
	let hamburger = document.querySelector('.hamburger-button');
	let closeButton = document.querySelector('.close-button')

	navigation.style.display = "flex";
	hamburger.style.display = "none";
	closeButton.style.display = "block";

}


function closeNav() {
	let navigation = document.getElementById('hidden-nav');
	let hamburger = document.querySelector('.hamburger-button');
	let closeButton = document.querySelector('.close-button');

	navigation.style.display = "none";
	hamburger.style.display = "block";
	closeButton.style.display = "none";
}


// Products Filter

// Declare variables
const links = document.querySelectorAll('.filter-link');
const products = document.querySelectorAll('.product-card');
const pageTitle = document.getElementById('page-title');
const pageIdentifier = document.getElementById('page-identifier');

// console.log(links);
// console.log(products);
// console.log(pageTitle);
// console.log(pageIdentifier);


function filterProducts(e) {
	e.preventDefault(); // Prevent default behavior of link

	const filter = this.dataset.filter; // Get the filter value from the link


	products.forEach(product => {
		// If the filter value is "all", show all products
		if (filter === 'all') {
			product.style.display = 'block';
		} else { // Otherwise, hide all products and show only products with the same filter value
			if (product.classList.contains(filter)) {
				product.style.display = 'block';
			} else {
				product.style.display = 'none';
			}
		}
	})

	// Remove the class "filter-link--active" from all links
	links.forEach(link => {
		link.classList.remove('filter-link--active');
	})

	// Add the class "filter-link--active" to the link that was clicked
	this.classList.add('filter-link--active');


	// pageTitle.innerHTML = links[i].innerHTML; // Change page title
	// pageIdentifier.innerHTML = links[i].innerHTML; // Change page identifier

	// Change page title and page identifier
	pageTitle.innerHTML = `${filter} Wines`.toUpperCase();
	pageIdentifier.innerHTML = `${filter} Wines`.toUpperCase();
}

links.forEach(link => {
	link.addEventListener('click', filterProducts);
})








// Cart Functionality

const addToCart = document.querySelectorAll('#add-to-cart');

const allProducts = [
	{
		id: 1,
		name: 'Gerard Bertrand Art de Vivre Rouge',
		price: 65,
		image: '../images/products/art-de-vivre-languedoc-2016-vin-rouge-red-blend.png',
		noInCart: 0
	},
	{
		id: 2,
		name: 'Thomas Barton Reserve Bordeaux',
		price: 65,
		image: '../images/products/barton-guestier-thomas-barton-reserve-bordeaux-france.png',
		noInCart: 0
	},
	{
		id: 3,
		name: 'B&G Cuvee Reserve Speciale Rose',
		price: 65,
		image: '../images/products/bg-cuvee.png',
		noInCart: 0
	},
	{
		id: 4,
		name: 'Billecart Salmon Brut Blanc de Blanc',
		price: 65,
		image: '../images/products/billecart-salmon-blanc-de-blancs.png',
		noInCart: 0
	},
	{
		id: 5,
		name: 'Billecart Salmon Brut Rose',
		price: 65,
		image: '../images/products/Billecart-Salmon-Brut-Rose.png',
		noInCart: 0
	},
	{
		id: 6,
		name: 'Billecart Salmon Brut Reserve',
		price: 65,
		image: '../images/products/billecart-salmon-reserve.png',
		noInCart: 0
	},
	{
		id: 7,
		name: 'Maison Castel Cabernet Sauvignon',
		price: 65,
		image: '../images/products/cabernet-sauvignon-IGP-pays-d-oc.png',
		noInCart: 0
	},
	{
		id: 8,
		name: 'B&G Reserve Chardonnay',
		price: 65,
		image: '../images/products/Chardonnay.png',
		noInCart: 0
	},
	{
		id: 9,
		name: 'Chateauneuf Du Pape Red',
		price: 65,
		image: '../images/products/chateauneuf_du_pape.png',
		noInCart: 0
	},
	{
		id: 10,
		name: 'Clarendelle Bordeaux Rouge',
		price: 65,
		image: '../images/products/clarendelle-red-half-bottle.png',
		noInCart: 0
	},
	{
		id: 11,
		name: 'Clarendelle Bordeaux Rose',
		price: 65,
		image: '../images/products/clarendelle-rose.png',
		noInCart: 0
	},
	{
		id: 12,
		name: 'Clarendelle Bordeaux Blanc',
		price: 65,
		image: '../images/products/clarendelle-white.png',
		noInCart: 0
	},
	{
		id: 13,
		name: 'Gerard Bertrand Cote des Roses Rose',
		price: 65,
		image: '../images/products/Cote-de-Roses-Rose-450x450.png',
		noInCart: 0
	},
	{
		id: 14,
		name: 'Gerard Bertrand Cote des Roses Chardonnay',
		price: 65,
		image: '../images/products/Cote-des-Roses---Chardonnay-75.png',
		noInCart: 0
	},
	{
		id: 15,
		name: 'Dom Perignon Brut',
		price: 65,
		image: '../images/products/dom-perignon-vintage-case.png',
		noInCart: 0
	},
	{
		id: 16,
		name: 'Gerard Bertrand Cote des Roses Pinot Noir',
		price: 65,
		image: '../images/products/Gerard Bertrand Cote des Roses Pinot Noir.png',
		noInCart: 0
	},
	{
		id: 17,
		name: 'Maison Castel Gewurztraminer 2020',
		price: 65,
		image: '../images/products/gewurztraminer.png',
		noInCart: 0
	},
	{
		id: 18,
		name: 'Haute Couture French Bubbles Blanc',
		price: 65,
		image: '../images/products/haute_couture_blanc.png',
		noInCart: 0
	},
	{
		id: 19,
		name: 'Haute Couture French Bubbles Rose',
		price: 65,
		image: '../images/products/haute_couture_rose.png',
		noInCart: 0
	},
	{
		id: 20,
		name: 'MARTINI Asti Sparkling Wine',
		price: 65,
		image: '../images/products/Large_3000_PNG-FY21_AT_Martini_Asti_75cl.png',
		noInCart: 0
	},
	{
		id: 21,
		name: 'Martini Prosecco',
		price: 65,
		image: '../images/products/Martini-Prosecco-Bottle-Shot.png',
		noInCart: 0
	},
	{
		id: 22,
		name: 'MARTINI Brut',
		price: 65,
		image: '../images/products/martini_Brut.png',
		noInCart: 0
	},
	{
		id: 23,
		name: 'Moet & Chandon Rose Imperial',
		price: 65,
		image: '../images/products/MOET.png',
		noInCart: 0
	},
	{
		id: 24,
		name: 'Moet & Chandon Nectar Rose Imperial',
		price: 65,
		image: '../images/products/MoetChandon-NectarImperialRose.png',
		noInCart: 0
	},
	{
		id: 25,
		name: 'Robertson Winery Natural Sweet Rose',
		price: 65,
		image: '../images/products/Robertson_NS_Rose.png',
		noInCart: 0
	},
	{
		id: 26,
		name: 'Roche Mazet Sauvignon Blanc',
		price: 65,
		image: '../images/products/roche_mazet_sauvignon_blanc.png',
		noInCart: 0
	},
	{
		id: 27,
		name: 'Roche Mazet Merlot',
		price: 65,
		image: '../images/products/RWchapelRedNV1.png',
		noInCart: 0
	},
	{
		id: 28,
		name: 'Santa Cristina Umbria',
		price: 65,
		image: '../images/products/santa-cristina-umbria-bianco.png',
		noInCart: 0
	},
	{
		id: 29,
		name: 'Maison Castel Sauvignon Blanc 2020',
		price: 65,
		image: '../images/products/sauvignon-blanc-IGP-cotes-de-gascogne.png',
		noInCart: 0
	},
	{
		id: 30,
		name: 'The Chocolate Block',
		price: 65,
		image: '../images/products/the_chocolate_block.png',
		noInCart: 0
	}
]

// For loop to implement all the functions on every button

for (let i = 0; i < addToCart.length; i++) {
	// Add event listener to each button
	addToCart[i].addEventListener('click', (e) => {
		e.preventDefault(); // Prevent default behavior of button	
		cartNumbers(allProducts[i]); // Call cartNumbers function using index of allProducts array as argument
		totalCost(allProducts[i]); // Call totalCost function using index of allProducts array as argument


	})
}





// Function to get the items in cart on every refresh of the page
function onLoadCartNumbers() {
	let productNumbers = localStorage.getItem('cartNumbers'); // Get cartNumbers from localStorage

	if (productNumbers) {
		document.querySelector('.cart-div span').textContent = productNumbers;
	} // If cartNumbers is not empty, set the textContent of the span to the value of productNumbers
}



// Experimental code (works but not used)
// function onLoadCartPageNumbers() {
// 	let productNumbers = localStorage.getItem('cartNumbers'); // Get cartNumbers from localStorage

// 	if (productNumbers) {
// 		document.querySelector('.cart-heading span').textContent = productNumbers;
// 	} // If cartNumbers is not empty, set the textContent of the span to the value of productNumbers
// }

// function to set the number of items in the cart on click of button
function cartNumbers(wine, action) {
	let productNumbers = localStorage.getItem('cartNumbers'); // Get cartNumbers from localStorage
	productNumbers = parseInt(productNumbers); // Convert string to integer
	let cartItems = localStorage.getItem('productsInCart'); // Get productsInCart from localStorage
	cartItems = JSON.parse(cartItems); // Convert string to object
	// let cartPageNumbers = document.querySelector('.cart-heading span'); // Get the cart numbers span from the cart page


	if (action === 'add') {
		localStorage.setItem('cartNumbers', productNumbers + 1); // Add 1 to cartNumbers
		document.querySelector('.cart-div span').textContent = productNumbers + 1; // Set the textContent of the span to the value of cartNumbers
		// cartPageNumbers.textContent = productNumbers + 1; // Set the textContent of the span to the value of cartNumbers

	} else if (action === 'remove') {
		localStorage.setItem('cartNumbers', productNumbers - 1); // Subtract 1 from cartNumbers
		document.querySelector('.cart-div span').textContent = productNumbers - 1; // Set the textContent of the span to the value of cartNumbers

	} else if (productNumbers) { // If productNumbers exists, 
		localStorage.setItem('cartNumbers', productNumbers + 1); // Add 1 to cartNumbers
		document.querySelector('.cart-div span').textContent = productNumbers + 1; // Set the textContent of the span to the value of productNumbers + 1

	} else { // If productNumbers does not exist,
		localStorage.setItem('cartNumbers', 1); // Set cartNumbers to 1
		document.querySelector('.cart-div span').textContent = 1; // Set the textContent of the span to 1
	}

	setItems(wine); // Call setItems function using wine(the product) as argument

}

// Function to set the items in the cart
function setItems(wine) {
	let cartItems = localStorage.getItem('productsInCart'); // Get productsInCart from localStorage
	cartItems = JSON.parse(cartItems); // Convert string to object

	if (cartItems != null) { // If cartItems exists,
		if (cartItems[wine.name] == undefined) { // But if the particular wine is not in the cart,
			cartItems = {
				...cartItems,
				[wine.name]: wine
			} // Add the wine to the cart
		}
		cartItems[wine.name].noInCart += 1; // Add 1 to the noInCart property of the wine

	} else { // If cartItems does not exist,
		wine.noInCart = 1; // Set noInCart to 1
		cartItems = {
			[wine.name]: wine
		} // Add the wine to the cart
	}

	localStorage.setItem('productsInCart', JSON.stringify(cartItems)); // Set productsInCart to cartItems


	
}





// Function to get the total cost of the items in the cart
function totalCost(wine, action) {
	let cartCost = localStorage.getItem('totalCost'); // Get totalCost from localStorage

	if (action === 'add') { // If action is add,
		cartCost = parseInt(cartCost); // Convert string to integer
		localStorage.setItem('totalCost', cartCost + wine.price); // Add the price of the wine to totalCost

	} else if (action === 'remove') { // If action is remove,
		cartCost = parseInt(cartCost); // Convert string to integer
		localStorage.setItem('totalCost', cartCost - wine.price); // Subtract the price of the wine from totalCost

	} else if (cartCost != null) { // If cartCost exists,
		cartCost = parseInt(cartCost); // Convert value from totalCost to integer
		localStorage.setItem('totalCost', cartCost + wine.price); // Add the price of the wine to totalCost

	} else { // If cartCost does not exist,
		localStorage.setItem('totalCost', wine.price); // Set totalCost to the price of the wine
	}
}


// Function to get the items in cart on every refresh of the page
function displayCart() {
	let cartItems = localStorage.getItem('productsInCart'); // Get productsInCart from localStorage
	cartItems = JSON.parse(cartItems); // Convert string to object

	let cartCost = localStorage.getItem('totalCost'); // Get totalCost from localStorage
	cartCost = parseInt(cartCost); // Convert string to integer

	let productContainer = document.querySelector('.cart-rows'); // Get the productContainer from the DOM


	if (cartItems && productContainer) {

		productContainer.innerHTML = ''; // Empty the productContainer

		// For each item in cartItems,
		Object.values(cartItems).forEach((item) => {
			productContainer.innerHTML += `
				<div class="cart-item">
					<div class="first">
						<div class="cart-item-image">
							<img src="${item.image}" alt="${item.name}">
						</div>

						<div class="cart-item-info">
								<h2>${item.name}</h2>
								<div class="span-items">
									<span>Italy</span>
                                	<span>75cl</span>
                                	<span>2016 r.</span>
								</div>
								<p>$ ${item.price}</p>
						</div>
					</div>

					<div class="second">
						<div class="cart-item-increase">
							<i class="fa-solid fa-minus fa-lg"></i>
							<span>${item.noInCart}</span>
							<i class="fa-solid fa-plus fa-lg"></i>
						</div>

						<div class="cart-item-price">
							<p>$ ${item.price * item.noInCart}</p>
						</div>

						<div class="cart-item-remove">
							<i class="fa-solid fa-times fa-lg"></i>
						</div>
					</div>
				</div>
							`
		});

		productContainer.innerHTML += `
			<div class="cart-total">
				<div class="cart-total-text">
					<p class="cost-heading">Total:</p>
					<p class="cost">$ ${cartCost}</p>
				</div>
				<div class="cart-total-button">
					<a href="../src/checkout.html">Checkout</a>
				</div>
			</div>
				`

		deleteButtons();
		manageQuantity();
	}
}


function manageQuantity() {
	let decreaseButtons = document.querySelectorAll('.fa-minus'); // Get all the decrease buttons from the DOM
	let increaseButtons = document.querySelectorAll('.fa-plus'); // Get all the increase buttons from the DOM
	let currentQuantity = 0; // Set currentQuantity to 0
	let currentProduct = ''; // Set currentProduct to empty string
	let cartItems = localStorage.getItem('productsInCart'); // Get productsInCart from localStorage
	cartItems = JSON.parse(cartItems); // Convert string to object
	let number = localStorage.getItem('cartNumbers'); // Get cartNumbers from localStorage
	number = parseInt(number); // Convert string to integer0p-


	// For each decrease button,
	decreaseButtons.forEach((decreaseButton) => {
		decreaseButton.addEventListener('click', () => {

			currentQuantity = decreaseButton.nextElementSibling.textContent; // Get the current quantity of the product
			// console.log(currentQuantity);

			currentProduct = decreaseButton.parentElement.parentElement.previousElementSibling.children[1].children[0].textContent.trim(); // Get the current product name
			// console.log(currentProduct);


			if (cartItems[currentProduct].noInCart > 1) { // If the current quantity is greater than 1,
				cartItems[currentProduct].noInCart -= 1; // Subtract 1 from the current quantity

				cartNumbers(cartItems[currentProduct], "remove"); // Call the cartNumbers function with the current product and "decrease" as parameters

				totalCost(cartItems[currentProduct], "remove"); // Call the totalCost function with the current product and "decrease" as parameters

				localStorage.setItem('productsInCart', JSON.stringify(cartItems)); // Set productsInCart to cartItems

				displayCart(); // Call the displayCart function

			}
		});
	});


	// For each increase button,
	increaseButtons.forEach((increaseButton) => {
		increaseButton.addEventListener('click', () => {
			
			currentQuantity = increaseButton.previousElementSibling.textContent; // Get the current quantity of the product
			// console.log(currentQuantity);
			currentProduct = increaseButton.parentElement.parentElement.previousElementSibling.children[1].children[0].textContent.trim(); // Get the current product name
			// console.log(currentProduct);

			cartItems[currentProduct].noInCart += 1; // Add 1 to the current quantity
			cartNumbers(cartItems[currentProduct], "add"); // Call the cartNumbers function with the current product and "add" as parameters
			totalCost(cartItems[currentProduct], "add"); // Call the totalCost function with the current product and "add" as parameters
			localStorage.setItem('productsInCart', JSON.stringify(cartItems)); // Set productsInCart to cartItems
			displayCart(); // Call the displayCart function
		
		})
	})

}


function deleteButtons() {
	let deleteButtons = document.querySelectorAll('.fa-times'); // Get all the delete buttons from the DOM
	let productNumbers = localStorage.getItem('cartNumbers'); // Get cartNumbers from localStorage
	let cartCost = localStorage.getItem('totalCost'); // Get totalCost from localStorage
	let cartItems = localStorage.getItem('productsInCart'); // Get productsInCart from localStorage
	cartItems = JSON.parse(cartItems); // Convert string to object
	let productName; // Set productName to empty string
	// console.log(cartItems);


	deleteButtons.forEach((deleteButton) => {
		deleteButton.addEventListener('click', () => {
			productName = deleteButton.parentElement.parentElement.previousElementSibling.children[1].children[0].textContent.trim(); // Get the current product name
			// console.log(productName);

			localStorage.setItem('cartNumbers', productNumbers - cartItems[productName].noInCart); // Subtract the current quantity from cartNumbers
			localStorage.setItem('totalCost', cartCost - (cartItems[productName].price * cartItems[productName].noInCart)); // Subtract the current price from totalCost

			delete cartItems[productName]; // Delete the current product from cartItems

			localStorage.setItem('productsInCart', JSON.stringify(cartItems)); // Set productsInCart to cartItems

			displayCart(); // Call the displayCart function
			onLoadCartNumbers(); // Call the onLoadCartNumbers function
		
		})
	})

}






// Yes. 
// Actually you can do it with local storage.. 
// With the  .clear("key name") 
// Example : I'm using localStorage.setItem("ProductInCart");

// If you want to clear it you will do something like this : 
// localStorage.clear("ProductInCart")..

// It will clear.. 

// You can add the .clear() in the checkout,  so that when you check out it will clear the storage.. 

// Thank you

onLoadCartNumbers(); // Call onLoadCartNumbers function
// onLoadCartPageNumbers(); // Call onLoadCartPageNumbers function
displayCart(); // Call displayCart function
