function tellMeTime (but) {
    var date = new Date();
    var theHour = date.getHours();
    var theMin = date.getMinutes();
    var theSec = date.getSeconds();
    result.innerHTML += "time by pressing " + "@"  + but + "=>" + theHour + ":" + theMin + ":" + theSec + "</br>";
}

button1.onclick = function(){
    tellMeTime(" button 1");
}
button2.onclick = function(but){
    tellMeTime(" button 2");
}
button3.onclick = function(but){
    tellMeTime(" button 3");
}
button4.onclick = function(but){
    var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var months = ["January","February","March","April","May","June","July","August","Septmber","October","November","Decembber"];
    var date = new Date();
    var day = date.getDay();
    var month = date.getMonth();
    console.log(days[day]);
    console.log(months[month]);
    result.innerHTML += "Day =>" + days[day] + "</br>" + "month =>" + months[month] + "</br>";
}