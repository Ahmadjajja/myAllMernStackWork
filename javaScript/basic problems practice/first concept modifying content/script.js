//    this.onclick
//    The onclick JavaScript event occurs when the user clicks on an element. 
//    It runs a specified line of code when you click a HTML object that has the onclick attribute.
//    The JavaScript onclick functions can be triggered by object.onclick or object.addEventListener.
firstButton.onclick = function () {
    var marks = prompt("Enter your marks?");
    var abc=" ";
    if (marks >= 90) { 
        // result.innerHTML = "Congratulation! You got A+ grade";     //short form modifying html content using javascript
        document.getElementById("result").innerHTML = "Congratulation! You got A+ grade";   //complete form modifying html content using javascript
    } else if (marks >= 80) {
        // result.innerHTML = "Congratulation! You got A grade";
        document.getElementById("result").innerHTML = "Congratulation! You got A grade";
    } else if (marks >= 70) {
        result.innerHTML = "You got B grade";
        document.getElementById("result").innerHTML = "You got B grade";
    } else if (marks >= 60) {
        result.innerHTML = "You got C grade";
        document.getElementById("result").innerHTML = "You got C grade";
    } else if (marks >= 50) {
        result.innerHTML = "You got D grade";
        document.getElementById("result").innerHTML = "You got D grade";
    } else if (marks < 50) {
        result.innerHTML = "Alas! You got E grade and you are failed";
        document.getElementById("result").innerHTML = "Alas! You got E grade and you are failed";
    }
}

//Queries
// what is onclick,innerhtml in javascript and these two are buil-in fuuctions in javaScript?