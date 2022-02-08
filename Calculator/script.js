let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = ''; 
var counter = 1;
for (item of buttons) {
   item.addEventListener('click',(e)=>{  // Arrow Function Used Here
        buttonText = e.target.innerText;   // Can we use here innerHTML instead of innerText
        if (buttonText === '=') {
            screen.value = eval(screenValue);
            counter = 0;
        } else if (buttonText === 'C') {
            screenValue = "";
            screen.value = screenValue;
            counter = 0;
        } else if (buttonText == "(" || buttonText == ")" || buttonText == '*' || buttonText == 'x' || buttonText == '-' || buttonText == '+' || buttonText == '%' || buttonText == '/' || buttonText == '.') {
            if (screen.value.charAt(screen.value.length-1) == '*' || screen.value.charAt(screen.value.length-1) == 'x' || screen.value.charAt(screen.value.length-1) == '-' || screen.value.charAt(screen.value.length-1) == '+' || screen.value.charAt(screen.value.length-1) == '%' || screen.value.charAt(screen.value.length-1) == '/' || screen.value.charAt(screen.value.length-1) == '.') {
                console.log("condition going well!");
            } else {
                if (buttonText == 'x') {
                    buttonText = '*';
                }
                screenValue += buttonText;
                screen.value = screenValue;
            }
            // counter++;
        }
        for (let index = 0; index < 10; index++) {
            if (buttonText === index.toString() ) {
                screenValue += buttonText;
                screen.value = screenValue;
                counter = 0;
            }
        }
   }) 
}
// screen.value.charAt(screen.value.length-1) !== 'x' || screen.value.charAt(screen.value.length-1) !== '-' || screen.value.charAt(screen.value.length-1) !== '+' || screen.value.charAt(screen.value.length-1) !== '%' || screen.value.charAt(screen.value.length-1) !== '/' || screen.value.charAt(screen.value.length-1) !== '.'