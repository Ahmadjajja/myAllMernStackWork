console.log("__OBJECT_HANDLING__");
console.log("___ASSIGNMENT_08___");
console.log(" Write a JavaScript program to list the properties of a JavaScript object");
console.log("Object_HANDLING_Q_NO_1_");
var student={
    name:"David Rayy",
    class:"IV",
    rollNo:12,
}
console.log("student=>",student);
var studentArray=Object.keys(student); 
studentArray.join("");
console.log("required output=>",studentArray.join(","));


console.log(" Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property");
console.log("Object_HANDLING_Q_NO_2_");
var student={
    name:"David Rayy",
    class:"IV",
    rollNo:12,
}
console.log("studentObject before deleting property=>",student);
delete student.rollNo;
console.log("studentObject after deleting property=>",student);


console.log("Write a JavaScript program to get the length of a JavaScript object. ");
console.log("Object_HANDLING_Q_NO_3_");
var student={
    name:"David Rayy",
    class:"IV",
    rollNo:12,
}
console.log("studentObject=>",student);
console.log("length of object=>",Object.keys(student).length);



console.log(" Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books.  ");
console.log("Object_HANDLING_Q_NO_4_");
var library = [  
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games', 
        readingStatus: false
    }];
    console.log("library=>",library);
    for (let index = 0; index < library.length; index++) {
        console.log("reading status at index->",index);
        console.log(library[index].author);
        console.log(library[index].title);
        console.log(library[index].readingStatus);
    }

console.log("Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes.Volume of a cylinder : V = πr2h.where r is the radius and h is the height of the cylinder.");
console.log("Object_HANDLING_Q_NO_5_");
var volume={
    radius:5,
    height:10,
},v;
const pi=3.14;
v=pi*volume.radius*volume.radius*volume.height;
console.log("volume of a Cylider=>",v.toFixed(4));


console.log("Write a Bubble Sort algorithm in JavaScript.");
console.log("Object_HANDLING_Q_NO_6_");
var arr=[6,4,0,3,-2,1];
console.log("Before Sorting=>",arr);
console.log("After Sorting=>",arr.sort());

console.log("Write a JavaScript program which returns a subset of a string.");
console.log("Object_HANDLING_Q_NO_7_");
var string="ahmad",arr,subset=[];
console.log("string=>",string);
arr=string.split("");
for (let index=0,i=0;index<arr.length; index++,i++) {
    if (index===0) {
        subset[i]=arr[index];
    }else{
        subset[i]=subset[i-1]+arr[index];
    }
    if (index===arr.length-1) {
        arr.shift();
        index=-1;
    }
}
console.log(subset);


console.log("Write a JavaScript program to create a Clock.");
console.log("Object_HANDLING_Q_NO_8_");
var CurrentTime=new Date();
console.log("CurrentTime=>",CurrentTime.getHours(),":",CurrentTime.getMinutes(),":",CurrentTime.getSeconds());


console.log("Write a JavaScript program to create a Clock.");
console.log("Object_HANDLING_Q_NO_9_");
var radius=4;
const pii=3.14;
function area(r){
    return pii*r*r;
}
function perimeter(r) {
    return 2*pii*r;
}
console.log("area=>",area(radius));
console.log("perimeter=>",perimeter(radius));


console.log("Write a JavaScript program to sort an array of JavaScript objects.");
console.log("Object_HANDLING_Q_NO_10_");
// const o = new Object();
// o.toString(); // returns [object Object]
var library = [ 
    {
        title:  'The Road Ahead',
        author: 'Bill Gates',
        libraryID: 1254
    },
    {
        title: 'Walter Isaacson',
        author: 'Steve Jobs',
        libraryID: 4264
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        libraryID: 3245
    }],temp1,temp2,library2=[];
    for (let index = 0,temp; index < library.length; index++) {
        if (index!=2) {
            temp=library[index].title;
            library[index].title=library[index].author;
            library[index].author=temp;
            
        }
    }
    console.log("Expected output:)");
for (let index = 0,x=1; index < library.length; index++,x++) {
    if (x>=1) {
        library2[index]=library[x];
    }
    if (x===0) {
        library2[index]=library[x];
    }
    if (x==library.length-1) {
        // library2.toString(object);
        x=-1;
    }
    
    
}
for (let index = 0; index < library2.length; index++) {
    console.log(library2[index].toString());
    console.log(library2[index]);
    
}
console.log(library2.toString());
console.log(library2);

console.log("Write a JavaScript function to print all the methods in an JavaScript object.  ");
console.log("Object_HANDLING_Q_NO_11_");
getMethods= (obj)=> Object.getOwnPropertyNames(obj).filter(index=> typeof obj[index]==='function');
// console.log("Math",getMethods(Math));
console.log("Object",getMethods(Object));
console.log("Array",getMethods(Array));



console.log("Write a JavaScript function to parse(تجزیہ) an URL.");
console.log("Object_HANDLING_Q_NO_12_");
const url= new URL("https://dmitripavlutin.com/static/c5277341f9e610109e8382035b79f925/65311/cover-8.webp");
console.log(url);

console.log("Write a JavaScript function to retrieve all the names of object's own and inherited properties.");
console.log("Object_HANDLING_Q_NO_13_");
const Math={
    myProp:'value', //object own property
    toString(){  //object inherited property
        return '[object Math]';
    }
}
getProperties=(obj)=>Object.getOwnPropertyNames(obj);
console.log(getProperties(Math));
console.log(Math.toString);


console.log("Write a JavaScript function to retrieve all the values of an object's properties.");
console.log("Object_HANDLING_Q_NO_14_");
const math={
    myProp:'value', 
    myProp1:'value1', //object own property
}
getValues=(obj)=>Object.values(obj);
console.log(getValues(math));


console.log("Write a JavaScript function to convert an object into a list of `[key, value]` pairs.");
console.log("Object_HANDLING_Q_NO_15_");
const car={
    colour:'black',
    model:'c12',
}
console.log(car); 
for(const [key, value] of Object.entries(car)){ //for in loop used here
    console.log(`[${key},${value}]`);  
}


console.log("Write a JavaScript function to convert an object into a list of `[key, value]` pairs.");
console.log("Object_HANDLING_Q_NO_16_");
const Car={
    colour:'black',
    model:'c12',
}
console.log(Car); 
let obj={}
for(const [key, value] of Object.entries(Car)){ //for in loop used here
obj={[value]:key}
    console.log(obj);  
}




console.log("Write a JavaScript function to check whether an object contains given property.");
console.log("Object_HANDLING_Q_NO_17_");
function hasKey(obj, key) {
    return obj != null && hasOwnProperty.call(obj, key);
  }
console.log(hasKey({red: "#FF0000", green: "#00FF00", white: "#FFFFFF"}, "green"));
