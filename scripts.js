
//var	name = "name";
//var	screenname = "uname";
//var	password = "pass";
//var	confirmpass = "passc";
//var	phonenum = "phone";
//var	email = "email";


//make labels do the thing
//-----------------------------------------------------------------
function active(cntl, type){
	if(type=="focus"){
		cntl.conta.classList.add('active');
	}else{
		if (!cntl.input.value){
			cntl.conta.classList.remove('active');
		}
	}
}
//-----------------------------------------------------------------


//password stuff
//-----------------------------------------------------------------
function password(cntl, type){
	//password
	if(type=="focus"){

	}
	cntl.input.value;
	
	
	
	
	var password = document.getElementById("pass");
	password.addEventListener('focus', () => {
		document.getElementById("difficult").classList = ('diffic active');});
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

function passwordc(){

}

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

function matching(password, cpassword){
	if(password == cpassword){
		return "good"
	}else{
		return "bad"
	}
}
//-----------------------------------------------------------------

//formatting
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

//attach listeners
//need focus & blur & input


function applyfocus(cntl){
	active(cntl, "focus");
	if(cntl.name == "name")
		password(cntl, "focus")	
	else if(cntl.name == "uname")
		usern(cntl, "focus")
	else if(cntl.name == "pass")
		password(cntl, "focus")
	else if(cntl.name == "passc")
		passwordc(cntl, "focus")
	else if(cntl.name == "phone")
		phone(cntl, "focus")
	else if(cntl.name == "email")
		email(cntl, "focus")
}
function applyblur(cntl){
	active(cntl, "blur");
	if(cntl.name == "name")
		password(cntl, "blur")	
	else if(cntl.name == "uname")
		usern(cntl, "blur")
	else if(cntl.name == "pass")
		password(cntl, "blur")
	else if(cntl.name == "passc")
		passwordc(cntl, "blur")
	else if(cntl.name == "phone")
		phone(cntl, "blur")
	else if(cntl.name == "email")
		email(cntl, "blur")
}
function applyinput(){

}
function removeinput(){

}

window.onload = function() {
	
	const signInput = document.querySelectorAll('.signInput');
	signInput.forEach(elem => {
		const inputField = elem.querySelector('input');
		
		var cntl = {
			input : elem.querySelector('input'),
			label : elem.querySelector('label'),
			icon  : elem.querySelector('img'),
			conta : elem,
			name : elem.querySelector('input').id
		}

		inputField.addEventListener('focus', () => {
			applyfocus(cntl);
			inputField.addEventListener('input', () => {
				applyinput(cntl);
			});
		});
		inputField.addEventListener('blur', () => {
			applyblur(cntl);
			inputField.removeEventListener('input', () => {
				removeinput(cntl);
			});
		});
	});
}