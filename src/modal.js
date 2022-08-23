
for (let i = 0; i < addToCart.length; i++) {
	// Add event listener to each button
	addToCart[i].addEventListener('click', (e) => {
		e.preventDefault(); // Prevent default behavior of button	

		let modal = document.getElementById('modal');
		// let modalContent = document.querySelectorAll('.modal p');
		// Display add to cart modal
		// console.log(modalContent);
		modal.style.display = 'flex';
		// Display product name in modal
		modal.innerHTML = 
		`<p>${allProducts[i].name} was added to your cart</p>
		<i class="fa-solid fa-times fa-lg close"></i>`;
	})
}


let modal = document.getElementById('modal'); // Get the modal from the DOM
modal.addEventListener('click', (e) => {
	if (e.target.classList.contains('close')) {
		modal.style.display = 'none';
	}
})



// let modalContent = document.querySelector('#modal p');
// modalContent.innerHTML = wine.name + ' added to cart!';

// let modal = document.getElementById('modal');
// let closeModal = document.querySelector('#modal .close');
// closeModal.addEventListener('click', () => {
// modal.style.display = 'none';
// })