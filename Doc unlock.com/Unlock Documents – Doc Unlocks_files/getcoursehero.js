function validateEmail() {
	var email = document.getElementById("buyer_email").value;
	var textInvalidEmail = document.getElementById("text_invalid_email");
	var valid = false;
	
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(email)){
		valid = true;
	}
	
	return valid;
}

function validateLinks(){
	var links = document.getElementById("links_string").value;
	var valid = false;
	
	var reg = /((https:\/\/)?(www.)?(coursehero.com\/)(tutors-problems|file)\/[a-z0-9\-+]+(\/)[a-z0-9\-\%]+(\/)?)/gi;
	
	if(links.match(reg)){
		valid = true;
	}
	
	return valid;
}

function removeHighlightEmail(){
	document.getElementById("buyer_email").style.boxShadow = "none";
}

function removeHighlightTextArea(){
	document.getElementById("links_string").style.boxShadow = "none";
}

function isValidForm(){
	var result = true;
	
	if(!validateEmail()){
		document.getElementById("buyer_email").style.boxShadow = "0px 0px 5px red";
		result = false;
	}
	
	if(!validateLinks()){
		document.getElementById("links_string").style.boxShadow = "0px 0px 5px red";
		result = false;
	}
	
	return result;
}

function checkTutor(){
	var links = document.getElementById("links_string").value;
	
	var reg = /((https:\/\/)?(www.)?(coursehero.com\/)(tutors-problems)\/[a-z0-9\-+]+(\/)[a-z0-9\-\%]+(\/)?)/gi;
	
	if(links.match(reg)){
		document.getElementById("info_text").innerHTML = "<p>Before proceeding further, make sure the tutor-problem question(s) has been answered and make sure there's a file attachment in the solution (very important). <a target=\"_blank\" style=\"text-decoration: underline;\" href=\"https://www.coursehero.com/tutors-problems/Java-Programming/8788216-iLab-5-of-6-GUI-Graphics-and-File-IO-40-points-0243-PM-MT-09282/\">Click here</a> to see an example of a valid tutor-problem question (scroll down and notice that there's a file attachment in the tutor answer). You may proceed to the next step after this verification.</p>";
		//document.getElementById("info_text").style.color = "#199cd8";
		document.getElementById("info_text").style.color = "red";
	}else{
		document.getElementById("info_text").innerHTML = "";
	}
}