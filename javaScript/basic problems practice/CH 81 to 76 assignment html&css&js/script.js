 button1.onclick = function(){
    var whereWeAt = window.location.href;
    output.innerHTML = whereWeAt;
 }
 button2.onclick = function(){
   // window.location.href = "https://calculator12345.surge.sh/";
   output.innerHTML = window.location.assign("https://calculator12345.surge.sh/");
}
button3.onclick = function(){
   output.innerHTML = window.location.replace("https://calculator12345.surge.sh/");
}
button4.onclick = function(){
   var monkeyWin = window.open("", "","width=100,height=100");
   output.innerHTML = monkeyWin;
}
button5.onclick = function(){
   var monkeyWin = window.open();
   var html = "<h1>ahmad jajja will become good programmer oneday inshallah</h1>";
   monkeyWin.document.write(html);
   output.innerHTML = monkeyWin;
}
button6.onclick = function(){
   var monkeyWindow = window.open("https://calculator12345.surge.sh/");
}
button7.onclick = function(){
   monkeyWin.close();
}