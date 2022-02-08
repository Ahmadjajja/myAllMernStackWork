function checkForLastName(){
    var lastName = document.getElementById("lN");
    if (lastName.value.length === 0) {
        alert("Please enter your last name");
        lastName.focus();
        lastName.style.background = "red";
        return false;
    }
}
function checkForSelection(selectId) {
    var target = document.getElementById(selectId);
    if (target.selectedIndex === 0) {
        alert("select must one option before going to next");
        return false;
    }
}
// The checked property allows you to return the value if the user has selected the checkbox or not.
function ValidateRadios(rName) {
    var radios = document.getElementsByName(rName);
    for (let index = 0; index < radios.length; index++) {
        if(radios[index].checked){
            return true;
        }
    }
    alert("Please check one.");
    return false;   
}
function validatingEmail(emailID) {
    var targetEmail = document.getElementById(emailID).value;
    var validStatement = true;
    if (targetEmail.indexOf(" ") !== -1 || targetEmail.indexOf("@") === -1 || targetEmail.indexOf(".") === -1 || targetEmail.indexOf(".") === -1 || targetEmail.indexOf(".") - targetEmail.indexOf("@") < 2 ||targetEmail.length - targetEmail.indexOf(".") > 4) {
        alert("enter correct Email!");
        validStatement = false;
        return false;
    }
}
function validPassword(ps) {
    var password = document.getElementById(ps).value;
    if (password.indexOf(" ") === -1 && (password.length >= 8 && password.length <= 12)) {
        return true;
    }
    alert("enter password in correct format!");
    return false;
}