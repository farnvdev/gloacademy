let money = 30000, Income = "Translation", addExpences = "Food, Family, School";
let deposit = false, mission = 200000, period = 12;
console.log(typeof (money), typeof (Income), typeof (deposit));
console.log("Income length:", Income.length);
console.log(period + " ,", mission, " рублей");
addExpences = addExpences.toLowerCase();
console.log(addExpences.split(", "));
let dayBudget = money / 30;
console.log(dayBudget,' ', money % 30);
