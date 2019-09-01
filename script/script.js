'use strict';
let mission = prompt ('Сколько вы хотите заработать?', 10000),
money = prompt ('Ваш месячный доход?', 10000),
addExpences = prompt ('Перечислите возможные расходы за рассчитываемый период через запятую');
console.log(addExpences.split(', '));
let deposit = confirm('Есть ли у вас депозит в банке?');
console.log(typeof(money),typeof(addExpences),typeof(deposit));
let stctExp1 = prompt ('Какие обязательные ежемесячные расходы у вас есть?'),
cost1 = prompt ('Во сколько это обойдется?'), 
stctExp2 = prompt ('Какие обязательные ежемесячные расходы у вас есть?2'),
cost2 = prompt ('Во сколько это обойдется?'),
budgetMonth = money - cost1 - cost2,
result =  Math.ceil(mission / budgetMonth);
console.log('Mission will be reached in ' + result + ' month.');
let dayBudget = budgetMonth / 30;
console.log('Бюджет на день: '+ Math.floor(dayBudget));
if (dayBudget <= 800){
    console.log('Высокий уровень дохода');
} else if (dayBudget < 800 || dayBudget > 300){
console.log('Средний уровень дохода');
} else if (dayBudget < 300 || dayBudget > 0){
    console.log('Низкий уровень дохода');
} else if (dayBudget < 0 ){
    console.log('Что-то пошло не так');
}