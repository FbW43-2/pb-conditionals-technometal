//1. Check if two given integer values are in the range 50 to 99 (this includes both 50 and 99). Print true if either of them are in the range.

function ValidateNumber(number) {
    if(number >= 50 && number <= 99) {
        return true;
    } else {
        return false;
    }
}


function Step1(number1, number2) {
    if (ValidateNumber(number1) || ValidateNumber(number2))
        console.log("true");
    else
        console.log("false");
}

Step1(65, 100);


//2. Check if three given integer values are in the range 50 to 99 (inclusive). Print true if one or more of them are in the range.

function Step2(number1, number2, number3) {
    if (ValidateNumber(number1) || ValidateNumber(number2) || ValidateNumber(number3))
        console.log("true");
    else
        console.log("false");
}

Step2(65, 100, 98);


/*3. Declare the variables a, b and c, and give them number values. Check which one out of the three variables has the largest value 
and print it to the console. Then change the values of the variables to see if your conditional still works.*/

let a = 4;
let b = 3;
let c = 7;

let arr1 = [a,b,c];
console.log(Math.max(...arr1));


a = 1;
b = 9;
c = 3;

arr1 = [a,b,c];
console.log(Math.max(...arr1));


//4. Create a new string adding "Py" in front of a given string. If the given string begins with "Py" then print the original string.

let hola = "rexia";
let newHola = "Py" + hola;


function CheckString (string) {
    
if (string.substring(0,2) === "Py") {
    console.log(string.substring(2)); // cuando sl substring tiene un solo valor, indica desde que posicion del index empieza el string
    }    
}

CheckString(newHola);
CheckString("PyHeriberto");


//5.Calculate the sum of the two integers. If the sum is in the range 50 to 80, print 65, otherwise print 80.

//let x;
//let y;

function ValidateSum (x,y) {
        if((x + y) >= 50 && (x + y) <= 80) // NO HACE FALTA DECLARAR LAS VARIABLES ANTES DE LA FUNCION
            console.log(65);
        else 
            console.log(80);
}

ValidateSum(20, 50);



//6. Check whether the sum of two integers is 8, or whether their difference is 8. If one of these is the case, print true.

//let xx;
//let yy;

function ValidateSum2 (xx, yy) {
    if((xx + yy) === 8 || (xx - yy) === 8)  // EL USO DE LAS LLAVES NO ES VITAL
        console.log("true");
    else 
        console.log("false")
}

ValidateSum2(20, 12)

// 7. Check whether either one of two integers is 15, or if their sum is 15. If one of these is the case, print true.

function ValidateIntegers (integer1, integer2) {
    if(integer1 === 15 || integer2 === 15 || (integer1 + integer2) === 15)
        console.log("true");
    else
        console.log("false");
}

ValidateIntegers(5,10);

// 8. Check whether one of two integers is a multiple of 7 or 11. If so, print true.

/*function MultipleIntegers (multipleInteger1, multipleInteger2) {
    if(multipleInteger1 % 7 === 0 || multipleInteger1 % 11 === 0)
        console.log("true");

    else if(multipleInteger2 % 7 === 0 || multipleInteger2 % 11 === 0)
        console.log("true");

    else
        console.log("false");
}*/

function MultipleIntegers (multipleInteger1, multipleInteger2) {// opcion mas reducida
    if((multipleInteger1 || multipleInteger2) % (7 || 11) === 0)
        console.log("true");
    
    else
        console.log("false");
}

MultipleIntegers(11, 10);


// 9. Calculate the sum of the two given integers. If the two values are the same, then print triple their sum.

function TwoIntegersSum (integerA, integerB) {
    if(integerA === integerB)
        console.log((integerA + integerB) * 3);

    else
        console.log("Both integers are not equal");   
}

TwoIntegersSum(6, 5);


// 10. Calculate the difference between a specified number and 19. Print double the difference if the specified number is greater than 19.

function Difference19 (x) {
    if ((x - 19) > 19)
    console.log(2 * x);

    else
        console.log(`${x} - 19 != 19`);
}

Difference19(39);

/* 11. BONUS CHALLENGE: Make a variable for firstName and age and give each variable values. Create an if/else statement to check whether
 the person's age is less than 13. If so, print "firstName is a child". If the age is equal to or more than 13 and less than 20, print 
 "firstName is a teenager". If the person's age is equal to and more than 20 and less than 30, then print "firstName is a young adult". 
 If none of these conditions apply, print "firstName is a adult".*/



 function CheckAge (age) {

    let firstName = "Heriberto";

    if (age < 13)
    console.log(`${firstName} is a child`);

    else if (age >= 13 && age < 20)
    console.log(`${firstName} is a teenager`);

    else if (age >= 20 && age <= 30)
    console.log(`${firstName} is a young adult`);

    else
        console.log(`${firstName} is an adult`);

 }

 CheckAge(46);


 // 12. BONUS CHALLENGE: Play around with each of your results, i.e., make sure they are dynamic to different inputs; is there a more efficient way of writing your code?; etc.

 
 
 // Exercise 2

 // 1. Declare a variable named isDog. If true, print 'pat, pat' and if not, print 'find me a dog to pat!'

    let isDog = 50;

    if (isDog !== isDog) {
        console.log('pat, pat');
    } else {
        console.log('find me a dog to pat!');
    } 


/* 2. Declare a variable named speedCheck. If speedlimit is 50km/h, and your speed is above that, 
print 'you're going too fast!'. If speed is lower than 50km/h, print 'You're driving below the speed limit, Oma'.*/

let speedCheck = 10;

if (speedCheck >= 50) {
    console.log('you\'re going too fast!');
} else if (speedCheck < 50) {
    console.log('You\'re driving below the speed limit, Oma');
}


// 3. Declare a variable named age. If age is below 16, print "serve butter beer". Otherwise print "serve beer".

let age = 17;

if (age < 16) {
    console.log("serve butter beer");
}

else {
    console.log("serve beer");
}



// 4. Declare a variable named isStudent. If true, print "Ticket costs €5,00". If false, print "Ticket costs €12,00".

let isStudent;

if (isStudent !== isStudent) {
        console.log("Ticket costs €5,00");
    } else {
        console.log("Ticket costs €12,00");
    }


// 5. Declare a variable named okMarie. Check if there is 'cake' - if so, print "Let them eat cake". If not, print "Oh, bother".

let okMarie = 0;

if (okMarie >= 1) {
    console.log("Let them eat cake");
} else {
    console.log("Oh, bother");
}
    

// 6. Check if the following numbers are even numbers. Use a ternary and if the number is even print 30 is even, else print that it is odd.

/*
let number = 30;


if (number % 2 === 0) {
    console.log(`${number} is even`);
} else {
    console.log(`${number} is odd`);
}
*/

let number = 31;

number % 2 === 0 ? console.log(`${number} is even`) : console.log (`${number} is odd`);


