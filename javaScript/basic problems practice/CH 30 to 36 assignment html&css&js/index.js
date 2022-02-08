button1.onclick = function () {
    var date = new Date();
    var day = date.getDay();
    var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    origional.innerHTML = day;
    output.innerHTML = days[day];
} 
button2.onclick = function () {
    var dataOfBirth = prompt("enter your DateOfBirth?");
    var pDate = new Date(dataOfBirth);
    var dateOfBirth = pDate.getTime();
    var cDate = new Date();
    var currentDate = cDate.getTime();
    var age = currentDate - dateOfBirth;
    origional.innerHTML = pDate;
    // alert("Days Passed since I born=>" + Math.floor(age / (1000 * 60 * 60 * 24)));
    output.innerHTML =Math.floor(age / (1000 * 60 * 60 * 24)) + " Days Passed since I born";
}
button3.onclick = function () {
    var nextBD = prompt("enter your next birthday?");
    var cDate = new Date();
    var cMS = cDate.getTime();
    var bDate = new Date(nextBD);
    var dateOfBirth = bDate.getTime();
    var day = dateOfBirth - cMS;
    output.innerHTML = "your next BirthDay is " + Math.floor(day / (1000 * 60 * 60 * 24)) + " days away";
    origional.innerHTML = cDate;
}
function greetUser() {
    output.innerHTML = "Hello User!";
}
button4.onclick = function () {
    greetUser();
}