button1.onclick = function () {
    alert(5);
}
button2.onclick = function () {
    var name = prompt("enter name?");
    // alert(name);
    result.innerHTML = name;
}
var cities = ["Lahore","Islamabad","Karachi","Faislabad"];
button3.onclick = function () {
    result.innerHTML = "";
    for (let index = 0; index < cities.length; index++) {
        result.innerHTML = result.innerHTML +  cities[index] + "<br>"; 
    }
}
button4.onclick = function () {
    var city = prompt("Enter city to be enter?");
    cities.push(city);
}
button5.onclick = function () {
    result.innerHTML ="";
    var tableNo = prompt("Enter table number?");
    for (let index = 1; index <= 10; index++) {
        result.innerHTML =result.innerHTML + tableNo + "*" + index + "=" + tableNo * index + "<br>";
    }
}