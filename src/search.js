
// Search Filter
const search = document.getElementById('search');
// console.log(search);

search.addEventListener('keyup', (e) => {
	e.preventDefault();
	const searchValue = search.value.toLowerCase().trim();

	for (i = 0; i < products.length; i++) {
		if (products[i].classList.contains(searchValue)) {
			products[i].style.display = 'block';
		} else if (searchValue === '') {
			products[i].style.display = 'block';
		} else {
			products[i].style.display = 'none';
		}

	}


})