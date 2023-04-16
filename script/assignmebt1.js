// TASK NO.1 
// Calculate the zakat value, first, create a variable named "zakatPercentage" and
//  store the value of 2.5% in it (hint: 2.5% means 0.025). Next, create another variable
//  named "userInput" and take the input from the user using the prompt. Make sure
//  the input value is of a type number by converting the input string to a number
//  using a suitable method. Then, create a variable named "result" and assign its value
//  to the multiplication of the zakat percentage and user input. Finally, use an alert
//  message to display the calculated zakat value. The message should look like this:
// "Your zakat value is xxx

var zakatPercentage = 0.025;
 var userInput = Number( prompt("Enter a number"));
 var result = (zakatPercentage) * (userInput);
alert ("Your zakat value is " + result)

// TASK NO.2
// calculate the fitrah amount, first, ask the user to enter the total number of family
// members using the prompt and store the value in a variable called
// "familyMembers". Next, ask the user to choose a fitrah method by providing them
// options using the prompt, and store the selected method and its price in variables.
// Then, use an if-else block to check the user's input and calculate the fitrah amount
// by multiplying the selected method's price with the number of family members.
// Finally, display the calculated fitrah amount using an alert message.


var FamilyMembers = prompt("Enter your total family members")

var FitraMethod = prompt("choose Fitra Method:\1 Wheat-250 RS \2 dates-2100 RS \3 Jau-450 RS \4 Kishmish-2800 RS" )

var Fitraprices;

if(FitraMethod == "1"){
    Fitraprices = 250;
} else if(FitraMethod == "2"){
    Fitraprices = 2100;
} else if(FitraMethod == "3"){
    Fitraprices = 450;
} else if(FitraMethod == "4"){
    Fitraprices = 2800;
}


 else {
     alert("YOU ARE DOING SOME MISTAKE, TRY AGAIN")
 }

 var fitraAmount = FamilyMembers * Fitraprices

alert("The fitra amount for"+ FamilyMembers + "Family member using the" + FitraMethod + "method is RS" + fitraAmount );

// TASK NO. 3
// Create a program that generates a random number between 1 and 10 and stores it
// in a variable called "secretNumber". Then, ask the user to enter a guess for the
// secret number using a prompt.
// Use an if-else statement to check if the user's guess matches the secret number. If
// the guess is correct, display a message using an alert saying "Congratulations! You
// guessed the secret number". Otherwise, if the guess is too high or too low, display
// an appropriate message informing the user to guess again.

var secretnumber = +prompt("Guess any number between 1 to 10");

if (secretnumber == 8){
    alert("Congrats! You did it")
}

else if(secretnumber <= 8){
    alert("Your vale is low, guess again")
}
else if(secretnumber >=8){
    alert("Your value is high. guess again")
}

// TASK NO. 4

// Create a program that asks the user to enter a name, and then prints out the name
// with the first letter capitalized (Make your name in capitalized case).

 var name=prompt("Enter your name")

document.write(name[0].toUpperCase() + name.slice(1).toLowerCase());



// TASK NO. 5
// In this task, you will be creating two empty arrays called "contactNumbers" and
// "contactNames". Using the prompt, you will ask the user to enter a contact number
// and contact name. You will then push these values into their respective arrays
// using the push method. After adding all the contacts, you will display the contact
// numbers and names in the console. To do this, you will need to use a for loop to
// iterate through both arrays and log each element to the console.
// Make sure to use descriptive variable names and comment on your code for clarity.

var contactnumber = [];
var contactname = [];

for (var i = 0; i < 3; i++) {


    var Cnumber = prompt("Enter contact number:");
    var Cname = prompt("Enter contact name:");

    contactnumber.push(Cnumber);

    contactname.push(Cname);
}
for (var i = 0; i < contactNumber.length; i++) {

    console.log([i + 1], contactName[i], contactNumber[i]);

}

// TASK NO. 6
// Create an Array that contains different products, and get input from the user in which you
// ask your user to give the position of that element he/she wants. Now remove that Item
// from your array and console the removed item, Also display the remaining items in the
// array and total number of items remaining.

var products =["SOOPER","CHEETOS","DORITOS","LAYS","SILK CHOCO"];
var InputUser = +prompt("Which snack you want to buy?s");
console.log(products[InputUser]+" is removed from the list");
products.splice(InputUser,1);
console.log("remaining products in the List "+products);
console.log("Number of products "+products.length);

// TASK NO. 7

// Create a program that asks the user for their nationality, gender, and age using the prompt
// function. The program should then use nested if-else statements to determine if the
// person is eligible to vote.
// First, the program should check if the person is Pakistani or Indian. If they are not, the
// program should display a message saying they are not eligible to vote.
// If they are Pakistani or Indian, the program should then check their gender. If the person is
// male and over the age of 18, they are eligible to vote. If the person is female and over the
// age of 18, the program should ask if they are married. If they are married, they are eligible
// to vote. If they are not married, they are not eligible to vote.
// If the person is under 18, the program should display a message saying they are not eligible
// to vote.

var nationality = prompt("Enter your nationality");
var age = prompt("Enter your age");
var gender = +prompt("Enter your gender");
var female = prompt("Are you married?");

if (nationality == "Pakistani" || nationality == "Indian") {
    console.log("You are eligible to vote");
}
if (age >= 18 && gender == "male") {
    console.log("You are eligible to vote");
}
else if (age >= "18" && gender == "female" && female == "married") {
    console.log("You are eligible to vote");
}

else {
    console.log("You are not eligible to vote");
}


// Task 8:
// You have an array of that contains the name of Pakistani Teams Player selected for
// WorldCup (15 Players) named as WorldCupSquad. Now tomorrow we have a match with
// India, So make an array of final team players (11 Players) that will be playing in tomorrows
// match from the WorldCupSquad array.
// (Hint : Make sure it should not disturb the array that contains 15 players instead you have
// to make a copy of this array).

var worldCupSquad = [ "Fahad", "Shaan", "Afnan", "Zafar", "Rashid", "Ahmed", "Kabeer", "Moiz", "Akhter","Rizwan", "Waseem", "Ali", "Feroz", "Zunair", "Arham"];
var finalTeamPlayers = worldCupSquad.slice(5,1);
console.log(worldCupSquad);
console.log(finalTeamPlayers);




