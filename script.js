//your JS code here. If required.
let text = document.getElementById("text");
let delay = document.getElementById("delay");
let btn = document.getElementById("btn");
let output = document.getElementById("output");


btn.addEventListner("submit", ()=>{
	async function formDelay(text, delay) {
		setTimeout(()=>{
			await output.textContent = text;
			await output.textContent = delay;
		}, 1000)
	}
})