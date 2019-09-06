'use strict';
let money = 0;
let appData = {
    income: {},
    addIncome: [],
    expenses: {},
    addExpences: '',
    deposit: false,
    percentDeposit: 0,
    moneyDeposit: 0,
    mission: 50000,
    period: 3,
    expensesMonth: 0,
    budgetMonth: 0,
    asking: function () {
        if (confirm('Есть ли у вас дополонительный заработок?')) {
            let itemIncome = prompt('Какой у вас дополнительный заработок?', 'Таксую');
            while (Number(itemIncome) || itemIncome === '' || itemIncome === null) {
                itemIncome = prompt('Какой у вас дополнительный заработок?', 'Таксую');
            }
            let cashIncome = prompt('Сколько вы на этом зарабатываете?', '5000'); // Сумма доп. зар(вал)
            while (isNaN(cashIncome) || cashIncome === '' || cashIncome === null) {
                cashIncome = prompt('Сколько вы на этом зарабатываете?', '5000');
            }
            this.income[itemIncome] = cashIncome;
        }
        this.deposit = confirm('Есть ли у вас депозит в банке?');
        this.addExpences = prompt('Перечислите возможные расходы за рассчитываемый период через запятую',
            'Семья, Учеба, Квартира');
        this.mission = +prompt('Сколько вы хотите заработать?', 10000);
    },
    getExpensesMonth: function () {
        for (let i = 0; i < 2; i++) {
            if (i === 0) {
                let temp = prompt('У вас есть обязательные расходы?',
                    'Квартплата');
                while (Number(temp) || temp === '' || temp === null) {
                    temp = prompt('У вас есть обязательные расходы?', 'Квартплата');
                }
                let temp2 = +prompt('Во сколько это обойдется?', '5000');
                while (isNaN(temp2) || temp2 === '' || temp2 === null) {
                    temp2 = prompt('Во сколько это обойдется?', '5000');
                }
                appData.expenses[temp] = temp2; //(запись в массив)
            }
            if (i === 1) { //ВТОРОЙ ЦИКЛ;
                let temp = prompt('У вас есть обязательные расходы?',
                    'Семья');
                while (Number(temp) || temp === '' || temp === null) {
                    temp = prompt('У вас есть обязательные расходы?', 'Семья');
                }
                let temp2 = +prompt('Во сколько это обойдется?');
                while (isNaN(temp2) || temp2 === '' || temp2 === null) {
                    temp2 = +prompt('Во сколько это обойдется?', '5000');   
                }
                appData.expenses[temp] = temp2;
            }
            for (let i in appData.expenses) {
                appData.expensesMonth += Number(appData.expenses[i]);

            }
            appData.budgetMonth = money - this.expensesMonth;
        }
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
                return ('Бюджет на день: ' + Math.floor(dayBudget) + '\n' + 'Низкий уровень дохода');
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
    getInfodeposit: function () {
        if (this.deposit) {
            let percentDepositlocal = prompt('Какой годовой процент?', '10')
             ; // (вал)
            while (isNaN(percentDepositlocal) || percentDepositlocal === '' || percentDepositlocal === null) {
                percentDepositlocal = +prompt('Какой годовой процент?', '10');   
            }
                this.percentDeposit = percentDepositlocal;
            let moneyDepositLocal = prompt('Какая сумма заложена?', '10000');
            while (isNaN(moneyDepositLocal) || moneyDepositLocal === '' || moneyDepositLocal === null) {
                moneyDepositLocal = +prompt('Какая сумма заложена?', '10000');   
            }
            this.moneyDeposit = moneyDepositLocal;
        }
    },
    calcSavedMoney: function () {
        return this.budgetMonth * this.period;
    }
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
appData.getInfodeposit();
console.log('Депозит: ' + appData.calcSavedMoney());
console.log(appData.addExpences);
console.log('Наша программа включает в себя следующие данные:');
for (let i in appData) {
    console.log(i + ' ' + appData[i]);
}