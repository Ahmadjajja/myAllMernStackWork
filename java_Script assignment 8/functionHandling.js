console.log("___Functions___");
console.log("___ASSIGNMENT_08___");
console.log("Write a js program to find cube of any number using function");
console.log("Function_HANDLING_Q_NO_1_");
function cube(num){
    return num*num*num;
}
var number=5; 
console.log("number=>",number)
console.log("cube of ",number,"is ",cube(number));

console.log("Write a js program to find diameter, circumference and area of circle using functions.");
console.log("Function_HANDLING_Q_NO_2_");
var diameter,circumference,area,r=45;
const pi=3.14;
function diameter(radius) {
    return 2*radius;

}
function circumference(radius) {
    return 2*pi*radius;

}
function area(radius) {
    return pi*radius*radius;

}
console.log("diameter=>",diameter(5));
console.log("circumference=>",circumference(5).toFixed(2));
console.log("area=>",area(5).toFixed(2));


console.log("Write a js program to find maximum and minimum between two numbers using functions.");
console.log("Function_HANDLING_Q_NO_3_");
function max(num1,num2) {
    if (num1>num2) {
        console.log("",num1,"is greater then",num2);
    }else{
        console.log("",num2,"is greater then",num1);
    }
}
function min(num1,num2) {
    if (num1<num2) {
        console.log("",num1,"is lesser then",num2);
    }else{
        console.log("",num2,"is lesser then",num1);
    }
}
max(5,10);
min(5,12);

console.log("Write a js program to check whether a number is even or odd using functions.");
console.log("__Function_HANDLING_Q_NO_4__");
function EvenOdd(num) {
    if (num%2===0) {
    console.log("number is Even");
    }else{
        console.log("number is odd");
    }
}
console.log(10);
EvenOdd(10);


console.log(" Write a js program to check whether a number is prime, Armstrong or perfect number using functions.");
console.log("__Function_HANDLING_Q_NO_5__");
function PrimeArmstrongPerfectChecker(Number){
    let ArmStrongChecker=0,PerfectChecker=1,NoneChecker=0;
    // Prime Number Checker Code
     for (let i=2; i < Number; i++) {
         if (Number%i==0) {
             break;
         }
         if (i==Number-1) { 
            console.log(" ",Number," is prime number");
            NoneChecker++;
         }
     }
    // ArmStrong Number Checker Code
    arr=Number.toString().split('');
    const integerArray=arr.map((num)=>parseInt(num));
    for (let index = 0; index < integerArray.length; index++) {
        ArmStrongChecker=ArmStrongChecker+(arr[index]*arr[index]*arr[index]);
    }
    if(ArmStrongChecker===Number){
        console.log(" ",Number," is Armstrong number");
        NoneChecker++;
    }
    // Perfect Number Checker Code
    for (let index = 2; index < Number; index++) {
        if (Number%index==0) {
            PerfectChecker=PerfectChecker+index;
        }
    }
    if (PerfectChecker===Number) {
        console.log(" ",Number," is Perfect Number");
        NoneChecker++;
    }
    // NoneChecker Code
    if ( NoneChecker===0) {
        console.log(" ",Number," is not from Prime Number,not from armstrong and is also not from Perfect Number ");
    }
}
PrimeArmstrongPerfectChecker(61);
PrimeArmstrongPerfectChecker(370);
PrimeArmstrongPerfectChecker(8128);
PrimeArmstrongPerfectChecker(873);

console.log("Write a js program to find all prime numbers between given interval using functions.");
console.log("__Function_HANDLING_Q_NO_6__");
function AllPrimeNumbers(startingInterval,endingInterval) {
    console.log("All prime numbers between ",startingInterval,"and",endingInterval," are given below");
   for (let index = startingInterval+1; index < endingInterval; index++) {
       let Number=index;
       for (let i=2; i < Number; i++) {
            if (Number%i==0) {
                break;
            }
            if (i==Number-1) { 
                console.log(Number);
            }
        }
    }  
}
AllPrimeNumbers(31,66);

console.log("Write a js program to print all strong numbers between given interval using functions.");
console.log("__Function_HANDLING_Q_NO_7__");
function AllStrongNumbers(startingInterval,endingInterval){
    var NoneChecker=0;
    console.log("All strong numbers between ",startingInterval,"and",endingInterval," are given below");
    for (let ind = startingInterval+1; ind < endingInterval; ind++){
        var Number=ind,StrongChecker=0;
        // Strong Number Checker Code
        arr=Number.toString().split('');
        const integerArray=arr.map((num)=>parseInt(num));
        for (let index = 0,factorial=1; index < integerArray.length; index++) {
            for (let i = integerArray[index]; i > 0; i--) {
                factorial=factorial*i;
            }
            StrongChecker=StrongChecker+factorial;
            factorial=1;
        }
            if(StrongChecker===Number){
                console.log(" ",Number," is strong number");
                NoneChecker++;
            }
    }
    if ( NoneChecker===0) {
        console.log("There are no strong numbers between ",startingInterval,"and",endingInterval,);
    }
}
AllStrongNumbers(31,50000);

console.log("Write a js program to print all Armstrong numbers between given interval using functions.");
console.log("__Function_HANDLING_Q_NO_8__");
function AllArmstrongNumbers(startingInterval,endingInterval){
    var NoneChecker=0;
    console.log("All Armstrong numbers between ",startingInterval,"and",endingInterval," are given below");
    for (let ind = startingInterval+1; ind < endingInterval; ind++){
        var Number=ind,armStrongChecker=0;
        // Strong Number Checker Code
        arr=Number.toString().split('');
        const integerArray=arr.map((num)=>parseInt(num));
        for (let index = 0,factorial=1; index < integerArray.length; index++) {
            armStrongChecker=armStrongChecker+(integerArray[index]*integerArray[index]*integerArray[index]);
        }
            if(armStrongChecker===Number){
                console.log(Number);
                NoneChecker++;
            }
    }
    if ( NoneChecker===0) {
        console.log("There are no armStrong numbers between ",startingInterval,"and",endingInterval,);
    }
}
AllArmstrongNumbers(31,50000);


console.log("Write a js program to print all perfect numbers between given interval using functions.");
console.log("__Function_HANDLING_Q_NO_9__");
function AllPerfectNumbers(startingInterval,endingInterval){
    var NoneChecker=0;
    console.log("All perfect numbers between ",startingInterval,"and",endingInterval," are given below");
    for (let ind = startingInterval+1; ind < endingInterval; ind++){
        var Number=ind,PerfectChecker=1;
         // Perfect Number Checker Code
        for (let index = 2; index < Number; index++) {
            if (Number%index==0) {
                PerfectChecker=PerfectChecker+index;
            }
        }
        if (PerfectChecker===Number) {
            console.log(" ",Number," is Perfect Number");
            NoneChecker++;
        }
    }
    if ( NoneChecker===0) {
        console.log("There are no perfect numbers between ",startingInterval,"and",endingInterval,);
    }
}
AllPerfectNumbers(3,10000);

console.log(" Write a js program to find power of any number using function.");
console.log("__Function_HANDLING_Q_NO_10__");
function pow(base,power){
    let powCalculator=1;
    for (let index = 1; index <= power; index++) {
        powCalculator=powCalculator*base;
    }
    console.log('',power,'power of',base,'is=>',powCalculator);
}
pow(4,3);


console.log("Write a js program to print all natural numbers between 1 to n using function.");
console.log("__Function_HANDLING_Q_NO_11__");
function naturalNumbers(n){
    console.log("n=>",n);
    for (let index = 1; index <= n; index++) {
        console.log(index);
    }
}
naturalNumbers(3);

console.log("Write a js program to print all even or odd numbers in given range using function");
console.log("__Function_HANDLING_Q_NO_12__");
function evenOdd(StartRange,EndRange) {
    console.log("evenOdd numbers between",StartRange,"and",EndRange,"given below");
    console.log("even numbers");
    for (let index = StartRange; index < EndRange; index++) {
        if (index%2===0) {
            console.log(index);
        }  
    }
    console.log("0dd numbers");
    for (let index = StartRange; index < EndRange; index++) {
        if (index%2===1) {
            console.log(index);
        }  
    }
}
evenOdd(1,10)



console.log("Write a js program to find sum of all natural numbers between 1 to n using function.");
console.log("__Function_HANDLING_Q_NO_13__");
function naturalNumbers(n){
    let sum=0;
    console.log("n=>",n);
    for (let index = 1; index <= n; index++) {
        sum=sum+index;
    }
    console.log("sum of first",n,"natural numbers is=>",sum);
}
naturalNumbers(4);


console.log(" Write a js program to find sum of all even or odd numbers in given range using function.");
console.log("__Function_HANDLING_Q_NO_14__");
function evenOdd(StartRange,EndRange) {
    console.log("Sum of evenOdd numbers between",StartRange,"and",EndRange,"given below");
    let evenNumberSum=0,oddNumberSum=0;
    for (let index = StartRange; index <= EndRange; index++) {
        if (index%2===0) {
            evenNumberSum=evenNumberSum+index;
        }  
    }
    console.log("sum of even numbers=>",evenNumberSum);
    for (let index = StartRange; index < EndRange; index++) {
        if (index%2===1) {
            oddNumberSum=oddNumberSum+index;
        }  
    }
    console.log("sum of odd numbers=>",oddNumberSum);
}
evenOdd(1,10);

console.log("Write a js program to find reverse of any number using function.");
console.log("__Function_HANDLING_Q_NO_15__");
function reverseNumber(Number) {
    console.log("Number before reversing=>",Number);
    let stringReverseArray=[];
    const stringArray=Number.toString().split('');
    for (let index = stringArray.length-1,i=0; index>=0; index--,i++) {
        stringReverseArray[i]=stringArray[index];
    }
    console.log("Number after reversing=>",parseInt(stringReverseArray.join('')));
}
reverseNumber(3215);


console.log("Write a js program to check whether a number is palindrome or not using function.");
console.log("__Function_HANDLING_Q_NO_16__");
function palindromeNumber(Number) {
    console.log(" Number=>",Number);
    let stringReverseArray=[],numberAfterReversing;
    const stringArray=Number.toString().split('');
    for (let index = stringArray.length-1,i=0; index>=0; index--,i++) {
        stringReverseArray[i]=stringArray[index];
    }
    numberAfterReversing=parseInt(stringReverseArray.join(''));
    if (Number===numberAfterReversing) {
        console.log("",Number," is palindrome");
    }else{
        console.log("",Number," is not palindrome");
    }
}
palindromeNumber(505);

console.log("Write a js program to find sum of digits of a given number using function.");
console.log("__Function_HANDLING_Q_NO_17__");
function sumOfDigitsOfgivenNumber(Number) {
    console.log("Number=>",Number);
    let sum=0;
    const stringArray=Number.toString().split('');
    const integerArray=stringArray.map((num)=>parseInt(num));
    for (let index = 0; index< integerArray.length; index++) {
        sum=sum+integerArray[index];
    }
    console.log("sum of digits of a given number=>",sum);
}
sumOfDigitsOfgivenNumber(786);

console.log(" Write a js program to find factorial of any number using function.");
console.log("__Function_HANDLING_Q_NO_18__");
function factorial(Number){
    let factorial=1;
    for (let i = Number; i > 0; i--) {
        factorial=factorial*i;
    }
    console.log("factorial 0f",Number,"is=>",factorial);
}
factorial(4);

console.log("Write a js program to generate nth Fibonacci term using function.");
console.log("__Function_HANDLING_Q_NO_19__");
function FibbonacyCalculator(Number) {
    let oddConditionChecker=Number,x=0,y=1;
    console.log("first",Number,"fibbonacy numbers are given below");
    if (Number!=0) {
        console.log(x);
    }
    if (Number!=1&&Number!=0) {
        console.log(y);
    }
    Number=(Number/2)-1;
    for (let index = 0; index < Number; index++) {
        x=x+y;
        y=x+y;
        console.log(x);
        if (oddConditionChecker%2===1&&index===Number-0.5) {
            
        } else {
            console.log(y);
        }
    }
}
FibbonacyCalculator(6);


console.log("Write a js program to find GCD (HCF) of two numbers using function");
console.log("__Function_HANDLING_Q_NO_20__");
function GCD(num1,num2) {
    let gcd=0;
    for (let index = 2; index <= num1; index++) {
        if (num1%index===0&&num2%index===0) {
            gcd=index;
        }
    }
    console.log("GCD of ",num1,"and",num2,"is=>",gcd);
}
GCD(50,65);

console.log("Write a js program to find LCM of two numbers using function.");
console.log("__Function_HANDLING_Q_NO_21__");
function LCM(num1,num2) {
    let gcd=0,LCM=1;
    for (let index = 1; index <= num1; index++) {
        if (num1%index===0&&num2%index===0) {
            gcd=index;
        }
    }
    LCM=(num1*num2)/gcd;
    console.log("LCM of ",num1,"and",num2,"is=>",LCM);
}
LCM(5,12);

console.log("Write a js program to display all array elements using function.");
console.log("__Function_HANDLING_Q_NO_22__");
function displayArrayElements() {
    let array=[7,8,6,"Ahmad jajja"];
    console.log(array);
    for (let index = 0; index < array.length; index++) {
        console.log(array[index]);
    }
}
displayArrayElements();


console.log("Write a js program to find sum of elements of array using function.");
console.log("__Function_HANDLING_Q_NO_23__");
function sumArrayElements() {
    let array=[700,80,6],sumArrayElements=0;
    console.log(array);
    for (let index = 0; index < array.length; index++) {
        sumArrayElements=sumArrayElements+array[index];
    }
    console.log("Sum of Array Elements=>",sumArrayElements);
}
sumArrayElements();



console.log("Write a js program to find maximum and minimum elements in array using function.");
console.log("__Function_HANDLING_Q_NO_24__");
function maxMinArrayElements() {
    let array=[4,260,58,4,5,6,10],max=0,min=0;
    console.log(array);
    for (let index = 0; index < array.length; index++) {
        if (array[index]>max) {
            max=array[index];
        }
        if (index===0) {
            min=array[0]
        }else if (array[index]<min) {
            min=array[index];
        }
    }   
    console.log("maximum element of Array=>",max);
    console.log("minmum element of Array=>",min);
}
maxMinArrayElements();

























































