let birthYear = prompt("enter your birth year");
let age = 2021 - birthYear;
let salary = prompt("what is your salary for a month?")
let fivePercent = 5/100 * salary;
let tenPercent = 10/100 * salary;
let twentyPercent = 20/100 * salary;
console.log(age);
console.log(salary);
if (age === 18 || age <= 20){
    alert(fivePercent);
}else if (age === 21 || age <= 30){
    alert(tenPercent);
}else if(age === 31 || age <= 50){
    alert(twentyPercent);
}
