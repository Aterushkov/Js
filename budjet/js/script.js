let startBtn = document.getElementById("start");
let budgetValue = document.getElementsByClassName('budget-value')[0];
let	dayBudgetValue = document.getElementsByClassName('daybudget-value')[0];
let	levelValue = document.getElementsByClassName('level-value')[0];
let	expensesValue = document.getElementsByClassName('expenses-value')[0];
let	optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0];
let	incomeValue = document.getElementsByClassName('income-value')[0];
let monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0];
let yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0];

let expensesItem = document.getElementsByClassName('expenses-item');
let expensesBtn = document.getElementsByTagName('button')[0];
let	optionalExpensesBtn = document.getElementsByTagName('button')[1];
let countBtn = document.getElementsByTagName('button')[2];
let optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item');
let	incomeItem = document.querySelector('.choose-income');
let	checkSavings = document.querySelector('#saving');
let	sumValue = document.querySelector('.choose-sum');
let percentValue = document.querySelector('.choose-percent');
let yearValue = document.querySelector('.year-value');
let monthValue = document.querySelector('.month-value');
let dayValue = document.querySelector('.day-value');

let money;
let time;

startBtn.addEventListener('click', function() {
    time = prompt("Какой сейчас год? А месяц? А день? Пожалуйста в формате YYYY-MM-DD", "");
    money = +prompt("Каков Ваш бюджет на месяц", "");

    while(isNaN(money) || money =="" || money == null){
        money = +prompt("Ну что? Сколько денег на этот месяц?", "");
    }

    appData.budget = money;
    appData.timeData = time;

    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();
});

expensesBtn.addEventListener('click', function(){
    let sum = 0;
    for (i = 0; i<expensesItem.length; i++){
        let a = expensesItem[i].value;
        let b = expensesItem[++i].value;
        if((typeof(a) === 'string') && (typeof(a) != null) && (typeof(b) != null) && a!= '' && b!='' && a.length < 50){
            console.log("done");
            appData.expenses[a] = b;
            sum += +b;
        } else {
            i--;
        }
    }
    expensesValue.textContent = sum;
});

optionalExpensesBtn.addEventListener('click', function(){
    for (i = 0; i<optionalExpensesItem.length; i++){
        let opt = optionalExpensesItem[i].value;
        appData.optionalExpenses[i] = opt;
        optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
    }
});

countBtn.addEventListener('click', function(){
    if(appData.budget != undefined){
        appData.monyePerDay = (appData.budget / 30).toFixed(2);
        dayBudgetValue.textContent = appData.monyePerDay;
    
        if(appData.monyePerDay < 100){
            levelValue.textContent = "Ну что-то ты по минималке живешь!";
        } else if(appData.monyePerDay > 100 && appData.monyePerDay < 2000){
            levelValue.textContent ="Молодец! Средний класс";
        } else if(appData.monyePerDay > 2000){
            levelValue.textContent ="Ого! Да ты богач";
        } else{
            levelValue.textContent ="Поздравляю Вы вне системы исчеслений";
        }
    }else{
        dayBudgetValue.textContent = "Ввежите Ваш бюджет!"
    }
});

incomeItem.addEventListener('input', function(){
    let items = incomeItem.value;
        appData.income = items.split(", ");
        incomeValue.textContent = incomeItem.value;
});

checkSavings.addEventListener('click', function(){
    if(appData.saving == true) {
        appData.saving = false;
    } else {
        appData.saving = true;
    }
});

sumValue.addEventListener('input', function(){
    if(appData.saving == true){
        let sum = +sumValue.value;
        let percent = +percentValue.value;

        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;

        monthSavingsValue.textContent = appData.monthIncome.toFixed(2);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(2);
    }
});

percentValue.addEventListener('input', function(){
    if(appData.saving == true){
        let sum = +sumValue.value;
        let percent = +percentValue.value;

        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;

        monthSavingsValue.textContent = appData.monthIncome.toFixed(2);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(2);
    }
});

let appData = {
    budget: money,
    expenses : {},
    optExpenses :{},
    optionalExpenses: {},
    income : [],
	timeData: time,
    saving : false,
};

for (let key in appData) {
    console.log("Наша программа включает в себя данные: " + key + " - " + appData[key]);
}


