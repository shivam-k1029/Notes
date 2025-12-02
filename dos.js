// getElementbyTagName(' ')
// ____________ClassName(' ')
// ____________Id(' ')
//  querySeclector('.A') for class-->(.) for id-->(#)
//  querySeclectorAll('.B');   If more than 1 class and we have implement all of them, then this tag will be use.

let changeText = document.getElementById('user-greeting')
console.log(changeText)

changeText.textContent = "Bla Bla "  // textContent will change the text inside the tag.

let paragraph1 = document.querySelector('p')
console.log(paragraph1)
paragraph1.innerHTML = "<u>This is paragraph one changed by JS.</u>" // innerHTML will change the whole HTML inside the tag.


//value in input tag
const Welcome = document.getElementById('welcome');

const nameInput = document.getElementById('name');

nameInput.value = "Shipra" // changing the value of input tag using JS.
console.log(nameInput.value);


Welcome.style.fontSize = "24px"; // changing the style of the tag using JS.
Welcome.style.color = "blue"; // changing the color of the tag using JS.