button1.onclick = function () {
    var x = Math.random();
    origionalNumber.innerHTML = x;
    var y = (x * 6) + 1;
    var z = Math.floor(y);
    output.innerHTML = z;
}
button2.onclick = function () {
    var num = prompt("Enter any Number?");
    origionalNumber.innerHTML =num;
    if (isNaN(num)) {
        output.innerHTML = "Entered input is not a Number";
    } else {
        output.innerHTML = "Entered input is a Number";
    }
}
button3.onclick = function () {
    var string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz 0123456789";
    var x1 = Math.random();
    var y1 = (x1 * 10) + 1;
    var z1 = Math.floor(y1);
    output.innerHTML = "";
    for (let index = 0; index < z1; index++) {
        var x2 = Math.random();
        var y2 = (x2 * 65) + 1;
        var z2 = Math.floor(y2);
        output.innerHTML =output.innerHTML + string.charAt(z2);
    }
}
// button3.onclick = function () {

//     var random = Math.random();
//     var converted = random.toString( 36 );   //confusion in this line
//     var randomString = converted.slice( 2 );

//     output.innerHTML = randomString;

// }
button4.onclick = function () {
    var amount = prompt("Enter amount?");
    origionalNumber.innerHTML = "amount=>" + amount;
    var tax = (amount * (14.975/100)).toFixed(2);
    output.innerHTML = tax;
}
