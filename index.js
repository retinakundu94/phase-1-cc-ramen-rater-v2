// document.addEventListener("DOMContentLoaded", main);

// function main() {
//     displayRamens();
//     // addSubmitListener();
//     // addEditListener();
// }
// main();

displayRamens();

async function displayRamens() {
    const response = await fetch('http://localhost:3000/ramens');
    const ramens = await response.json();
    console.log(ramens);

    const ramenMenu = document.getElementById('ramen-menu');
    ramens.forEach(ramen => {
        const img = document.createElement('img');
        img.src = ramen.image;
        img.alt = ramen.name;
        // img.addEventListener('click', event => {
        //     event.preventDefault();
        // })
        ramenMenu.apeend(img);
    });
    if (ramens.length > 0) {
        // displayRamenDetails(ramens[0]); // Display first ramen details on load
    }
}

// function handleClick(ramen) {
//     displayRamenDetails(ramen);
// }

// function displayRamenDetails(ramen) {
//     const detailImage = document.querySelector('#ramen-detail img');
//     const detailName = document.querySelector('#ramen-detail h2');
//     const detailRestaurant = document.querySelector('#ramen-detail h3');
//     const detailRating = document.querySelector('#ramen-detail #rating');
//     const detailComment = document.querySelector('#ramen-detail #comment');

//     detailImage.src = ramen.image;
//     detailName.textContent = ramen.name;
//     detailRestaurant.textContent = ramen.restaurant;
//     detailRating.textContent = `Rating: ${ramen.rating}`;
//     detailComment.textContent = `Comment: ${ramen.comment}`;
// }

// function addSubmitListener() {
//     const form = document.getElementById('new-ramen');
//     form.addEventListener('submit', event => {
//         event.preventDefault();
//         const newRamen = {
//             name: event.target.name.value,
//             restaurant: event.target.restaurant.value,
//             image: event.target.image.value,
//             rating: event.target.rating.value,
//             comment: event.target['new-comment'].value,
//         };
//         // Here, you could implement POST request to persist new ramen if needed.
//         displayRamenOnMenu(newRamen);
//         form.reset(); // Reset form fields after submission
//     });
// }

// function displayRamenOnMenu(ramen) {
//     const ramenMenu = document.getElementById('ramen-menu');
//     const img = document.createElement('img');
//     img.src = ramen.image;
//     img.alt = ramen.name;
//     ramenMenu.appendChild(img);
// }

// function addEditListener() {
//     const form = document.getElementById('edit-ramen');
//     if (!form) return; // Skip if edit form doesn't exist
//     form.addEventListener('submit', event => {
//         event.preventDefault();
//         const updatedRating = event.target['new-rating'].value;
//         const updatedComment = event.target['new-comment'].value;
//         // Here, update the frontend display or implement PATCH request to persist changes.
//     });
// }

// Additional functionality for editing, deleting, etc. can be added following the pattern above.
