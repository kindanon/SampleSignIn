//make labels do the thing
function labels(){
const signInput = document.querySelectorAll('.signInput');
signInput.forEach(elem => {
	const inputField = elem.querySelector('input');
	const inputClass = elem.classList;
	if (elem.querySelector("input").value)
		inputClass.add("active");
		inputField.addEventListener('focus', () => {
		inputClass.add('active');});
	inputField.addEventListener('blur', () => {
		if(!inputField.value){inputClass.remove('active');}});
})}

//realtime feedback stuff
function feedback(password){
	if (password.length < 6) {//length
		return("1");
	}
	if(/[A-Z]/.test(password)) {//uppercase
		return("1");
    }    
	if(/[a-z]/.test(password)) {//lowercase
		return("1");
	}
    if(/\d/.test(password)) {//numbers 
		return("1");
	} 
    
    if(/\W/.test(password)) {//special
		return("1");
	}
	if(/[^\u0000-\u00ff]/.test(password)){
		return("no unicode please, it frightens the programmers");
}}

//realtime diffuclty bar
function difficulty(){
	var dbar = document.getElementById("dbar");
	var password = document.getElementById("pass").value;
	var diff = password.length;

	var req = document.getElementById("req");
	req.innerHTML = (feedback(password));

	if(diff >= 20){
		dbar.classList = ('dbar excellent');
	}else if(diff >= 15){
		dbar.classList = ('dbar good');
	}else if(diff >= 10){
		dbar.classList = ('dbar easy');
	}else if(diff >= 5){
		dbar.classList = ('dbar trivial');
	}else {dbar.classList = ('dbar');}
}

window.onload = function() {
	labels();
	//document.getElementById("pass").onkeyup = feedback();
	document.getElementById("pass").addEventListener("keyup", function(){difficulty();});
}