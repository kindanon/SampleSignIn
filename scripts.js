
window.onload = function() {
//make labels do the thing
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
});
	//realtime feedback stuff
document.getElementById("pass").onkeyup = function(){
	var password = document.getElementById("pass").value;
		var reqlist = document.getElementById("reqlist").getElementsByTagName("li");

	if (password.length < 6) {//length
		console.log(reqlist[0]);
	}
	if(/[A-Z]/.test(password)) {//uppercase
    
    }    
	if(/[a-z]/.test(password)) {//lowercase
	}
    
    if(/\d/.test(password)) {//numbers 
	} 
    
    if(/\W/.test(password)) {//special
	
	}
	if(/[^\u0000-\u00ff]/.test(password)){
		//("no unicode please, it frightens the programmers")
	}
};
}