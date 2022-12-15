
(function(){
    let form = document.querySelector("#contact-form");
    let nameInput = document.querySelector("#name");
    let emailInput = document.querySelector("#email");
    let phoneInput = document.querySelector("#phone");
    let messageInput = document.querySelector("#message");
    //Show error message
    function showErrorMessage(input,message){
        let container = input.parentElement; // The .input-wrapper
        
        //Check and remove exisiting error message
        let error = container.querySelector(".error-message");
        if (error){
            container.removeChild(error);
        }
        // Now add the error if the message isn’t empty.
        if (message){
            //Create div element with error-message class
            let error = document.createElement("div");
            error.classList.add("error-message");
            error.innerText = message;
            //Add error div to parent element ie. container
            container.appendChild(error);
        }
        
    }
    //Validate name. Name should not be empty.
    function validateName(){
        let value = nameInput.value;
        if (!value){
            showErrorMessage(nameInput, "Name is a required.");
            return false;
        }
  
        showErrorMessage(nameInput,null);
        return true;  
        
    }
    
    //Validate email input while typing
    function validateEmail() {
        let value = emailInput.value;

        if (!value) {
          showErrorMessage(emailInput, 'E-mail is a required field.');
          return false;
        }

        if (value.indexOf('@') === -1) {
          showErrorMessage(emailInput, 'You must enter a valid e-mail address.');
          return false;
        }

        if (value.indexOf('.') === -1) {
          showErrorMessage(emailInput, 'You must enter a valid e-mail address.');
          return false;
        }

        showErrorMessage(emailInput, null);
        return true;
    }
    //Validate phone number
    function validatePhone(){
        let value = phoneInput.value;
        let phoneNo = /^\d{10}$/;
        let phoneNoSpecial = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        //If phone input field has value
        if (value.length > 0){
            console.log(value);
            /*Validate a phone number of 10 digits either with no comma, no spaces, no punctuation and no + sign in front the number
             *  or phone number with space , - or . For example 222-055-9034, 321.789.4512 or 123 256 4587.*/ 
            if ((value.match(phoneNo)) || (value.match(phoneNoSpecial)) ){
                console.log("It has 10 digits");
                showErrorMessage(phoneInput, null);
                return true;
            } else {
                showErrorMessage(phoneInput, "Please enter valid phone numbers.");
                return false;
            }
            if (value.length < 10){
                showErrorMessage(phoneInput, "You must enter area code and phone numbers.");
                return false;
            }
        } else {
            //Phone input field is not required and does not have value. 
            showErrorMessage(phoneInput, null);
                return true;
            
        }
    }
  
    //Validate message. Message should not be empty and less than 240 characters.
    function validateMessage(){
        let value = messageInput.value;
        if (!value){
            showErrorMessage(messageInput, "Message is required.");
            return false;
        }
        //Check if message contains more than 240 characters.
        if (value.length > 240) {
            showErrorMessage(messageInput, "The message needs to be less than 240 characters long.");
            return false;
        }
        showErrorMessage(messageInput,null);
        return true;  
        
    }
    function validateForm(){
        let isValidName = validateName();
        let isValidEmail = validateEmail();
        let isValidPhone = validatePhone();
        let isValidMessage = validateMessage();
        return isValidName && isValidEmail && isValidPhone && isValidMessage;
    }
    form.addEventListener("submit", (e)=> {
        e.preventDefault() //Do not submit to the server
        if(validateForm()){
            alert("Success");
        }
    } );
    nameInput.addEventListener("input", validateName);
    emailInput.addEventListener("input", validateEmail);
    phoneInput.addEventListener("input", validatePhone);
    messageInput.addEventListener("input", validateMessage);
})();
