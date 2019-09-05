'use strict';
//pms
let  money = 0;
let appData = {
    income: {},
    addIncome: [],
    expenses: {},
    addExpences: '',
    deposit: false,
    mission: 50000,
    period: 3,
    expensesMonth: 0,
    budgetMonth: 0,
    asking: function () {
        this.addExpences = prompt('Перечислите возможные расходы за рассчитываемый период через запятую',
        'Семья, учеба, квартира');
        this.mission = +prompt('Сколько вы хотите заработать?', 10000);
        this.deposit = confirm('Есть ли у вас депозит в банке?');
    },
    getExpensesMonth: function () {
        for (let i = 0; i < 2; i++) {
            if (i === 0) {
                appData.expenses[prompt('У вас есть обязательные расходы?',
                 'Квартплата')] = +prompt('Во сколько это обойдется?');
            }
            if (i === 1) {
                appData.expenses[prompt('У вас есть обязательные расходы?',
                 'Учеба')] = +prompt('Во сколько это обойдется?');
            }
        }
        for (let i in appData.expenses){
                appData.expensesMonth += Number(appData.expenses[i]);
            
        }
                appData.budgetMonth = money - this.expensesMonth;
    },

    getBudget: function () {
        let dayBudget = appData.budgetMonth / 30;
        if (dayBudget < 0) {
            return 'Что-то пошло не так';
        } else {
            if (dayBudget >= 800) {
            return ('Бюджет на день: ' + Math.floor(dayBudget) + '\n' + 'Высокий уровень дохода');
        } else if (dayBudget <= 800 || dayBudget >= 300) {
            return ('Бюджет на день: ' + Math.floor(dayBudget) + '\n' + 'Средний уровень дохода');
        } else if (dayBudget <= 300 || dayBudget >= 0) {
            return ('Бюджет на день: ' + Math.floor(dayBudget) + '\n' +  'Низкий уровень дохода');
        } else if (dayBudget < 0) {
            return ('Бюджет на день: ' + Math.floor(dayBudget) + '\n' + 'Что-то пошло не так');
        }
        }
    },

    getTargetMonth: function () {
        let res = Math.ceil(this.mission / appData.budgetMonth);
        if (res <= 0) {
            return 'Цель не будет достигнута!';
        } else {
            return 'Цель будет достигнута через ' + res + ' месяцев.';
        }
    },
};

let counter = 0;
do {
    money = +prompt('Ваш месячный доход?', 10000);
    while (isNaN(money) || money === '' || money === null) {
        money = +prompt('Ваш месячный доход?', 10000);
    }
    counter++;
}
while (counter === 0);
appData.asking();
appData.getExpensesMonth();
console.log(appData.getBudget()); 
console.log(appData.getTargetMonth());
console.log('Расходы за месяц: ' + appData.expensesMonth);
for (let i in appData){
    console.log('Наша программа включает в себя следующие данные:' +
     i + appData[i]);
}