'use strict';
let buttonStart = document.getElementById('start'),
btnPlusIncomeAdd = document.querySelector('.income_add'),
btnPlusExpensesAdd = document.querySelector('.expenses_add'),
//-кнопки;
depositCheck = document.getElementById('deposit-check'),
additionalIncomeItems = document.querySelectorAll('.additional_income-item'),
//Правая панель;
budgetMonthValue = document.querySelector('.budget_month-value'),
budgetDayValue = document.querySelector('.budget_day-value'),
expencesMonthValue = document.querySelector('.expenses_month-value'),
additionalIncomeValue = document.querySelector('.additional_income-value'),
additionalExpensesValue = document.querySelector('.additional_expenses-value'),
incomePeriodValue = document.querySelector('.income_period-value'),
targetMonthValue = document.querySelector('.target_month-value'),
// Левая панель;
salaryAmount = document.querySelector('.salary-amount'), //Месячный доход текстбокс;
incomeTitle = document.querySelector('.income-items').firstElementChild, // Доп дох. наименование;
incomeAmount = document.querySelector('.income-amount'), // Доп дох. сумма;
 //  __Обязательные расходы;
expensesTitle = document.querySelector('.expenses-items').firstElementChild, // Наименование
expensesAmount = document.querySelector('.expenses-amount'), // Сумма
//  __Возможные расходы;
additionalExpensesItem = document.querySelector('.additional_expenses-item'), //Название
//  __Цель
targetAmount = document.querySelector('.target-amount'), // сумма;
//  __Период расчета
periodSelect = document.querySelector('.period-select'); // Ползунок (range);
console.log(periodSelect);

