
(function(){
    let form = document.querySelector("#contact-form");
    let nameInput = document.querySelector("#name");
    let emailInput = document.querySelector("#email");
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
        let isValidMessage = validateMessage();
        return isValidName && isValidEmail && isValidMessage;
    }
    form.addEventListener("submit", (e)=> {
        e.preventDefault() //Do not submit to the server
        if(validateForm()){
            alert("Success");
        }
    } );
    nameInput.addEventListener("input", validateName);
    emailInput.addEventListener("input", validateEmail);
    messageInput.addEventListener("input", validateMessage);
})();
