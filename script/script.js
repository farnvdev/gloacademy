'use strict';
//pms
let mission = prompt ('Сколько вы хотите заработать?', 10000),
monthInc = prompt ('Ваш месячный доход?', 10000),
addExpences = prompt ('Перечислите возможные расходы за рассчитываемый период через запятую'),
deposit = confirm('Есть ли у вас депозит в банке?'),
stctExp1 = prompt ('Какие обязательные ежемесячные расходы у вас есть?'),
cost1 = prompt ('Во сколько это обойдется?'), 
stctExp2 = prompt ('Какие обязательные ежемесячные расходы у вас есть?2'),
cost2 = prompt ('Во сколько это обойдется?');
//pms

function getAccumulatedMonth () {
    function getExpensesMonth () {
        if (isNaN(cost1 && cost2)){
            alert('Incorrect value');
        } else {
            return cost1 + cost2;
        }
    }
    return monthInc - getExpensesMonth();
}
let accumulatedMonth = getAccumulatedMonth();

function getTargetMonth() {
return Math.ceil(mission / accumulatedMonth);
}
let targetMBudget = getTargetMonth();
console.log('Mission will be reached in ' + targetMBudget + ' month.');
console.log(typeof(money),typeof(addExpences),typeof(deposit));
let dayBudget = accumulatedMonth / 30;
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