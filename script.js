const firstNameInput = document.querySelector("#firstnameinput")
const lastNameInput = document.querySelector("#lastnameinput")
const emailInput = document.querySelector("#emailinput")
const telInput = document.querySelector("#telinput")
const passInput = document.querySelector("#passinput")
const confirmPassInput = document.querySelector("#confirmpassinput")
const submitBtn = document.querySelector("#submitbtn")
const message = document.querySelector("#form-message")

submitBtn.addEventListener("click", checkFormValidity);

function checkFormValidity()
{
    if(notEmpty(firstNameInput) && 
    notEmpty(lastNameInput) && notEmpty(emailInput) 
    && notEmpty(telInput) && notEmpty(passInput) && 
    notEmpty(confirmPassInput))
    {
        if(passwordValidation())
        {
            console.log("Submitted");
        }
    }
    else
    {
        console.log("Please fill out all fields");
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
        confirmPassInput.setCustomValidity("Passwords do not match!");
        console.log("Passwords do not match!");
        return false;
    }
}

function notEmpty(input)
{
    return input.value != "";
}