//waits till the HTML is loaded then add event listeners
document.addEventListener("DOMContentLoaded", function(e) {
    //prevent the page from relading when user presses enter key in email field if the email is invalid
    document.getElementById('emailInput').addEventListener('keypress', event => {
        if(event.key != 'Enter'){
            return true;
        }else{
            event.preventDefault();
            emailSubmitCheck();
        }
    });

    //prevent page reloading when submit button is clicked if email is invalid
    document.getElementById('emailSubmitButton').addEventListener('click', event => {
        event.preventDefault();
        emailSubmitCheck();
    });
});

//adds a box-shadow to the div for 1sec then disapaear for user visual feedback
function emailSubmitButtonMouseDown() {
    document.getElementById('emailSubmitButton').style.boxShadow = "1px 10px 20px 1px #88888898";
}
function emailSubmitButtonMouseUp() {
    document.getElementById('emailSubmitButton').style.boxShadow = "none";
}

//check if email is:
//1) empty 2)not formatted correct and shows error
function emailSubmitCheck() {
    //collect the value in the email input
    let emailValue = document.getElementById('emailInput').value;
    
    //check if email is blank
    if(emailValue === ''){
        displayInvalidEmailMessage();
        return false;
    };

    //check if is in correct format
    if(!simpleValidEmail(emailValue)){
        displayInvalidEmailMessage();
        return false;
    }

    //email is correct submit
    submitEmail();
}

function displayInvalidEmailMessage() {
    //put error message under email input
    document.getElementById('emailInvalidMessage').innerText = 'Please provide a valid email';

    //change email input border color
    document.getElementById('emailInput').style.borderColor = 'rgba(249,98,98,1)';

    //display erro icon
    document.getElementById('errorIcon').style.visibility = 'visible';
}


var simpleValidEmail = function( email ) {
    return email.length < 256 && /^[^@]+@[^@]{2,}\.[^@]{2,}$/.test(email);
};

function submitEmail() {
    document.getElementById('emailForm').submit();
}