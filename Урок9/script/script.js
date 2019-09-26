'use strict';
let startBt = document.getElementById('start'),
    resetBt = document.getElementById('cancel'),
    btnPlusIncomeAdd = document.querySelector('.income_add'),
    btnPlusExpensesAdd = document.querySelector('.expenses_add'),
    //-кнопки;
    depositCheck = document.getElementById('deposit-check'),
    additionalIncomeItems = document.querySelectorAll('.additional_income-item'),
    //Правая панель;
    budgetMonthValue = document.querySelector('.budget_month-value'),
    budgetDayValue = document.querySelector('.budget_day-value'),
    expensesMonthValue = document.querySelector('.expenses_month-value'),
    additionalIncomeValue = document.querySelector('.additional_income-value'),
    additionalExpensesValue = document.querySelector('.additional_expenses-value'),
    incomePeriodValue = document.querySelector('.income_period-value'),
    targetMonthValue = document.querySelector('.target_month-value'),
    // Левая панель;
    salaryAmount = document.querySelector('.salary-amount'), //Месячный доход текстбокс;
    incomeItem = document.querySelectorAll('.income-items'),
    //  __Обязательные расходы;
    expensesTitle = document.querySelector('.expenses-items').firstElementChild, // Наименование
    expensesItems = document.querySelectorAll('.expenses-items'), // Сумма
    //  __Возможные расходы;
    additionalExpensesItem = document.querySelector('.additional_expenses-item'), //Название
    //  __Цель
    targetAmount = document.querySelector('.target-amount'), // сумма;
    //  __Период расчета
    periodSelect = document.querySelector('.period-select'); // Ползунок (range);
// >----------------------------<
let appData = {
    budget: 0,
    budgetDay: 0,
    budgetMonth: 0,
    income: {},
    incomeMonth: 0,
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    percentDeposit: 0,
    moneyDeposit: 0,
    expensesMonth: 0,
    
    start: function () {
        
        this.budget = +salaryAmount.value;
        startBt.style.display = 'none';
        resetBt.style.display = 'block';
        this.blockImputs();
        this.getExpenses(); // -> Запись в переменную expenses данных об обязательных расходах.
        this.getIncome();
        this.getExpensesMonth();
        this.getAddExpenses();
        this.getAddIncome();
        this.getBudget();
        this.showResult();
    },
    blockImputs: function () {
        salaryAmount.setAttribute('readOnly', 'true'); // Поле: Месячный доход;
        //------------------------------------------------------------------------
        // ПОЛЯ: ДОПОЛНИТЕЛЬНЫЙ ДОХОД
        let incomeItems = document.querySelectorAll('.income-items');         
        incomeItems.forEach(function (item) {                                  
           for (const key of item.children) {
               key.setAttribute('readonly','true');
           }
        });
        //------------------------------------------------------------------------
        // ПОЛЯ: ВОЗМОЖНЫЙ ДОХОД
        let addInc = document.querySelector('.additional_income');
        for (const key of addInc.children){
            key.setAttribute('readonly','true');
        }
        //------------------------------------------------------------------------
        // ПОЛЯ: ОБЯЗАТЕЛЬНЫЙ РАСХОД.
        let expensesItems = document.querySelectorAll('.expenses-items');         
        expensesItems.forEach(function (item) {                                  
           for (const key of item.children) {
               key.setAttribute('readonly','true');
           }
        });
        //------------------------------------------------------------------------
        // ПОЛЕ: ВОЗМОЖНЫЕ РАСХОДЫ
        additionalExpensesItem.setAttribute('readOnly', 'true');
        //------------------------------------------------------------------------
        // ПОЛЕ: ЦЕЛЬ
        targetAmount.setAttribute('readOnly', 'true');

    },
    addExpensesBlock: function () { //Клонирование кнопок обязтельные расходы
        let cloneExpensesItem = expensesItems[0].cloneNode(true);
        expensesItems[0].parentNode.insertBefore(cloneExpensesItem, btnPlusExpensesAdd);
        expensesItems = document.querySelectorAll('.expenses-items');
        if (expensesItems.length == 3) {
            btnPlusExpensesAdd.style.display = 'none';
        }
    },
    addIncomeBlock: function () { //Клонирование кнопок дополнительный доход
        let cloneIncomeItem = incomeItem[0].cloneNode(true);
        incomeItem[0].parentNode.insertBefore(cloneIncomeItem, btnPlusIncomeAdd);
        incomeItem = document.querySelectorAll('.income-items');
        if (incomeItem.length == 3) {
            btnPlusIncomeAdd.style.display = 'none';
        }
    },
    getExpenses: function () { // Обязательные расходы
        expensesItems.forEach(function (item) {
            let itemExpenses = item.querySelector('.expenses-title').value; // Наименование
            let cashExpenses = item.querySelector('.expenses-amount').value; // Сумма
            if (itemExpenses !== '' && cashExpenses !== '') {
                this.expenses[itemExpenses] = cashExpenses;
                
            } else {
                alert('Не указаны данные - обязательный расход!');
            }
        }, appData);
    },
    getIncome: function () { // Дополнительный доход [!]
        incomeItem.forEach(function(item){
            let itemIncome = item.querySelector('.income-title').value;
            let cashIncome = item.querySelector('.income-amount').value;
            if (itemIncome !== '' && cashIncome !== '') {
                this.income[itemIncome] = cashIncome;
            } else {
                alert('Не указаны данные - дополнительный доход!');
            }
        }, appData);
        for (let item in this.income) {
            this.incomeMonth += +this.income[item];
        }
    },
    showResult: function () {
        budgetMonthValue.value = this.budgetMonth;
        budgetDayValue.value = this.budgetDay;
        expensesMonthValue.value = this.expensesMonth;
        additionalExpensesValue.value = this.addExpenses.join(', ');
        additionalIncomeValue.value = this.addIncome.join(', ');
        targetMonthValue.value = this.getTargetMonth();
        incomePeriodValue.value = this.calcPeriod();   
    },
    getAddExpenses: function () { // ВОЗМОЖНЫЕ РАСХОДЫ
        let addExpenses = additionalExpensesItem.value.split(', ');
        addExpenses.forEach(function (item) {
            item = item.trim();
            if (item !== '') {
                this.addExpenses.push(item);
            } else {
                alert('Поле дополнительные расходы не заполнено!');
            }
        }, appData);
    },
    getBudget: function () {
        this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth;
        this.budgetDay = Math.ceil(this.budgetMonth / 30);
    },
    getAddIncome: function () { // Поля возможный доход;
        additionalIncomeItems.forEach(function(item) {
            let itemValue = item.value.trim();
            if (itemValue !== '') {
             this.addIncome.push(itemValue);
            } else {
                alert('Поля возможный доход не заполнены!');
            }
        }, appData);
    },
    getTargetMonth: function () {
        let res = Math.ceil(targetAmount.value / this.budgetMonth);
        if (res <= 0) {
            return 'Цель не будет достигнута!';
        } else {
            return  res;
        }
    },
    getInfodeposit: function () {
        if (this.deposit) {
            let percentDepositlocal = prompt('Какой годовой процент?', '10'); // (вал)
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
    getExpensesMonth: function () {
        for (let key in this.expenses) {
            this.expensesMonth += +this.expenses[key];
        }
    },
    calcPeriod: function () {
        return this.budgetMonth * periodSelect.value;
    },
    displayRangeValue: function () {
        let rangeValue = document.querySelector('.period-amount');
        rangeValue.innerHTML = periodSelect.value;
        incomePeriodValue.value = periodSelect.value;
    },
    reset: function () {
        location.reload();
    }
};
//startBt.setAttribute('disabled', 'disabled');
salaryAmount.addEventListener('input', function (){
    startBt.setAttribute('enabled', 'enabled');
});

// События кнопок.
resetBt.addEventListener('click', appData.reset);
startBt.addEventListener('click', appData.start.bind(appData)); // <-ENTRY POINT;
btnPlusExpensesAdd.addEventListener('click', appData.addExpensesBlock);
btnPlusIncomeAdd.addEventListener('click', appData.addIncomeBlock);
periodSelect.addEventListener('change', appData.displayRangeValue);