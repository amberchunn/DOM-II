// Your code goes here

// Prevent navigation from default refresh behavior

// const eventHandler = event => {
// 	stopPropagation();
// 	console.log('Help!');
// };

// let stopRefresh = navLinks.forEach(item => {
// 	eventHandler(item);
// });
// const navLinks = document.querySelectorAll('nav a');
let stopNavRefresh = document.querySelectorAll('nav a').forEach(item => {
	item.addEventListener('click', event => {
		// event.preventDefault();
		console.log(`clicked ${item}`);
	});
});

// navLinks.addEventListener('click', event => {
// 	navLinks.innerHTML = `Click count: ${event.detail}`;
// });
