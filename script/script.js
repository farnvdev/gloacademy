'use strict';
//pms
let mission = +prompt('Сколько вы хотите заработать?', 10000),
    addExpences = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 
    'Семья, учеба, квартира'),
    monthInc,
    deposit = confirm('Есть ли у вас депозит в банке?'),
    stctExp1,
    stctExp2,
    counter = 0;
//pms
 do {
    monthInc = +prompt('Ваш месячный доход?', 10000);
    while (isNaN(monthInc) || monthInc === '' || monthInc === null) {
        monthInc = +prompt('Ваш месячный доход?', 10000);
    }
    counter++;
}
while(counter === 0);

function getAccumulatedMonth() {
    function getExpensesMonth() {
        for (let i = 0; i < 2; i++) {
            if (i === 0) {
                stctExp1 = prompt('У вас есть обязательные расходы?', 'Квартплата');
            }
            if (i === 1) {
                stctExp2 = prompt('У вас есть обязательные расходы?', 'Бензин');
            }
            let sum = 0;
            sum += +prompt('Во сколько это обойдется?');
            while (isNaN(sum) || sum === '' || sum === null) {
                sum += +prompt('Во сколько это обойдется?');
            }
            return sum;
        }
    }
    return monthInc - getExpensesMonth();
}


let accumulatedMonth = getAccumulatedMonth();

function getTargetMonth() {
    return Math.ceil(mission / accumulatedMonth);
}
let targetMBudget = getTargetMonth();
if (targetMBudget < 0){
    console.log('Цель не будет достигнута!');
} else {
    console.log('Цель будет достигнута через ' + targetMBudget + ' месяцев.');
}
console.log(typeof (money), typeof (addExpences), typeof (deposit));
let dayBudget = accumulatedMonth / 30;
if (dayBudget < 0) {
    console.log('Что-то пошло не так');
}else {
    console.log('Бюджет на день: ' + Math.floor(dayBudget));
}

const getStatusIncome = function () {
    if (dayBudget >= 800) {
        return ('Высокий уровень дохода');
    } else if (dayBudget <= 800 || dayBudget >= 300) {
        return ('Средний уровень дохода');
    } else if (dayBudget <= 300 || dayBudget >= 0) {
        return ('Низкий уровень дохода');
    } else if (dayBudget < 0) {
        return ('Что-то пошло не так');
    }
};
console.log(getStatusIncome());