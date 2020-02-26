// Your code goes here

// Prevent navigation from default refresh behavior

let stopNavRefresh = document.querySelectorAll('nav a').forEach(item => {
	item.addEventListener('click', event => {
		event.preventDefault();
		console.log(`clicked ${item}`);
	});
});

// Nested events - prevent propagation

// Unique Events

// let strEnd = `style = "${cssProp}: = ${propValue};"`;

// const eventHandler = function(eventOption, element, cssProp, propValue) {
// 	let item = document.querySelector(element);
// 	item.setAttribute('style', cssProp);

// 	let cssAttr = item.cssProp;
// 	let propAttr = item.propValue;
// 	let targetAttr = item.event.target;

// 	console.log(cssAttr, propAttr);

// 	let strObj = targetAttr.style;

// 	item.addEventListener(eventOption, function(event) {
// 		console.log(cssProp, propValue);

// 		item.strObj.setAttribute();

// 		// console.log(strEnd);
// 	});
// };

function Article(eventOption, selector, cssProp, propValue) {
	this.eventOption = eventOption;
	this.selector = selector;
	this.cssProp = cssProp;
    this.propValue = propValue;
    let callback = event => {
	    return ();
}
    console.log(document.querySelector(selector).addEventListener(eventOption, callback));

    // let calback = event => ;
	Object.defineProperty(this, selector, {
		get: function() {
			return document.querySelector(selector).addEventListener(eventOption, callback);
		},
		set: function(cssProp, propValue) {

			// return document.querySelector(selector).addEventListener(eventOption, callback);
		},
		configurable: true;
    });

        // document.querySelector(selector)
        // .addEventListener(eventOption, callback);

//Copy;

// const copyEvent = document.querySelector('.intro h2');
// copyEvent.addEventListener('copy', function(event) {
// 	return (event.target.style.color = '#336699');
// });

// eventHandler('copy', '.intro h2', 'color', '#FF0000');
new Article('copy', 'h2', 'color', '#FF0000');

// // Mouse Enter

// eventHandler('mouseenter', '.content-section', '#FF000');

// // Mouse Over

// eventHandler('mouseover', '.btn', '#55FFDD');

// // Select Text

// eventHandler('select', '.destination', '#999');

// // Wheel

// eventHandler('wheel', '.container', '#44DDAA');

// // Drag

// eventHandler('drag', '.footer', '#DDD');

// // Drop

// eventHandler('drop', 'img', '#000');

// // Resize

// eventHandler('resize', '', '#FF8');

// Scroll

// eventHandler('copy', '.intro h2', '#3366DD');
