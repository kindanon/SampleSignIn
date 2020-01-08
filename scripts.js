//make labels do the thing
//-----------------------------------------------------------------
function labels(){
const signInput = document.querySelectorAll('.signInput');
signInput.forEach(elem => {
	const inputField = elem.querySelector('input');
	const inputClass = elem.classList;
	if (elem.querySelector("input").value){inputClass.add("active");}
	inputField.addEventListener('focus', () => {
		inputClass.add('active');});
	inputField.addEventListener('blur', () => {
		if(!inputField.value){inputClass.remove('active');}});
})}
//-----------------------------------------------------------------


//password stuff
//-----------------------------------------------------------------
function password(){
	//password
	var password = document.getElementById("pass");
	password.addEventListener('focus', () => {
		document.getElementById("diffic").classList = ('diffic active');});
	password.addEventListener('blur', () => {
			if(password.value.length == 0){document.getElementById("diffic").classList = ('diffic');}})
	document.getElementById("pass").addEventListener("input", function(){difficulty(password.value);});
	//document.getElementById("pass").onkeyup = feedback();

	//confirm password
	var cpassword = document.getElementById("passc");
	cpassword.addEventListener('focus', () => {
		cpassword.classList.add(matching(password.value, cpassword.value))});
	cpassword.addEventListener('blur', () => {
		cpassword.classList.remove(matching(password.value, cpassword.value));});
}

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

function difficulty(password){
	var dbar = document.getElementById("dbar");
	var leng = password.length;

	var req = document.getElementById("req");
	req.innerHTML = (feedback(password));

	if(leng >= 18){
		dbar.classList = ('dbar excellent');
	}else if(leng >= 12){
		dbar.classList = ('dbar good');
	}else if(leng >= 6){
		dbar.classList = ('dbar easy');
	}else if(leng >= 1){
		dbar.classList = ('dbar trivial');
	}else {dbar.classList = ('dbar');}
}

function matching(password, cpassword){
	if(password == cpassword){
		return "good"
	}else{
		return "bad"
	}
}
//-----------------------------------------------------------------

//email formatting
//-----------------------------------------------------------------
function phone(){
	var email = document.getElementById("phone");
	if (email.value){inputClass.add("active");}
	inputField.addEventListener('focus', () => {
		inputClass.add('active');});
	inputField.addEventListener('blur', () => {
		inputClass.remove('active');});
}

function phone_formatting(){
	phone.value="(___) ___-____";
	//phone.data-mask = "(___) ___-____";
}
//-----------------------------------------------------------------

window.onload = function() {
	labels();
	password();
	phone();
}