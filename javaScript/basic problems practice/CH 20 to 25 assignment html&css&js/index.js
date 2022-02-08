button1.onclick = function () {
    var anyString = prompt("enter any string?");
    originalString.innerHTML = anyString;
    output.innerHTML = anyString.toLowerCase();
}
button2.onclick = function () {
    var anyString = prompt("enter any string?");
    originalString.innerHTML = anyString;
    output.innerHTML = anyString.toUpperCase();
}
var cities = ["Islamabad","Lahore","Karachi","Multan","Sialkot"];
button3.onclick = function () {
    var anyString = prompt("enter any string?");
    originalString.innerHTML = anyString;
    for (let index = 0; index < cities.length; index++) {
        if (anyString === cities[index]) {
            output.innerHTML = "City is found!";
            break;
        }else {
            output.innerHTML = "City is not found!";
        }
    }
}   
button4.onclick = function () {
    var anyString = prompt("enter any string?");
    originalString.innerHTML = anyString;
    var firstCharacter = anyString.charAt(0);
    var otherCharacters = anyString.slice(1);
    output.innerHTML = firstCharacter.toUpperCase() + otherCharacters.toLowerCase();
}
var stringSentence = "ahmad jajja working well for becoming Software Engineer";
button5.onclick = function () {
    var stringSentence = "ahmad jajja working well for becoming Software Engineer";
    originalString.innerHTML = stringSentence;
    var anyWord = prompt("enter any word to be find in sentence?");
    if (stringSentence.indexOf(anyWord) !== -1) {
        output.innerHTML = "Word(" + anyWord + ") is Found at index " + stringSentence.indexOf(anyWord);
    } else {
        output.innerHTML = "Word(" + anyWord + ") is not found in sentence!";
    }
}