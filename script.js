const firstNameInput = document.querySelector("#firstnameinput")
const lastNameInput = document.querySelector("#lastnameinput")
const emailInput = document.querySelector("#emailinput")
const telInput = document.querySelector("#telinput")
const passInput = document.querySelector("#passinput")
const confirmPassInput = document.querySelector("#confirmpassinput")
const submitBtn = document.querySelector("#submitbtn")
const message = document.querySelector("#form-message")
const messageText = document.querySelector("#message-text")
const crossIcon = document.querySelector("#crosicon")
const sucIcon = document.querySelector("#sucicon")

submitBtn.addEventListener("click", checkFormValidity);
message.style = "display: none"

function checkFormValidity()
{
    if(isValid(firstNameInput) && 
    isValid(lastNameInput) && isValid(emailInput) 
    && isValid(telInput) && isValid(passInput) && 
    isValid(confirmPassInput))
    {
        if(passwordValidation())
        {
            submit();
            successMessage();
        }
    }
    else
    {
        console.log("Please fill out all fields");
        messageText.innerText = "Please fill out all fields!"
        invalidMessage();
    }
}

function passwordValidation()
{
    if(passInput.value === confirmPassInput.value)
    {
        confirmPassInput.setCustomValidity("");
        return true;
    }
    else
    {
        console.log("Passwords do not match!");
        messageText.innerText = "Passwords do not match!";
        invalidMessage();
        return false;
    }
}

function isValid(input)
{
    return input.value != "" && input.checkValidity();
}

function submit()
{
    console.log("Submitted!");
    messageText.innerText = "Submitted!"
    message.style = "display: flex"
    sucIcon.style = "display: flex"
    crossIcon.style = "display: none"
}
function invalidMessage()
{
    messageText.style = "Color: red"
    message.style = "display: flex"
    sucIcon.style = "display: none"
    crossIcon.style = "display: flex"
}
function successMessage()
{
    messageText.style = "Color: green"
    message.style = "display: flex"
    sucIcon.style = "display: flex"
    crossIcon.style = "display: none"
}