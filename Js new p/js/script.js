let money;
let time;
function start() {
    money = +prompt("Каков Ваш бюджет на месяц", "");
    time = prompt("Какой сейчас год? А месяц? А день? Пожалуйста в формате YYYY-MM-DD", "");

    while(isNaN(money) || money =="" || money == null){
        money = +prompt("Ну что? Сколько денег на этот месяц?", "");
    }
}

start();


let appData = {
    budget: money,
    expenses : {},
    optExpenses :{},
    optionalExpenses: {},
    income : [],
	timeData: time,
    saving : true,
    chooseExpenses: function(){
        for (i = 0; i<2; i++){
            let a = prompt("Введите обязательную статью расходов в этом месяце", '');
            let b = prompt("Во сколько обойдется?", '');
            if((typeof(a) === 'string') && (typeof(a) != null) && (typeof(b) != null) && a!= '' && b!='' && a.length < 50){
                console.log("done");
                appData.expenses[a] = b;
            } else {
                i--;
            }
        }
    },
    chooseOptExpenses: function () {
        for (i = 0; i<3; i++){
            let a = prompt("Введите необязательную статью расходов в этом месяце", '');
            let b = prompt("Во сколько обойдется?", '');
            if((typeof(a) === 'string') && (typeof(a) != null) && (typeof(b) != null) && a!= '' && b!='' && a.length < 50){
                console.log("done");
                appData.optExpenses[a] = b;
            } else {
                i--;
            }
        }
    },
    detectDayBudget:function (){
        appData.monyePerDay = (appData.budget / 30).toFixed(2);
        alert("Ежедневный бюджет: " + appData.monyePerDay);

    },
    detectLevel: function (){
        if(appData.monyePerDay < 100){
            console.log("Ну что-то ты по минималке живешь!");
        } else if(appData.monyePerDay > 100 && appData.monyePerDay < 2000){
            console.log("Молодец! Средний класс");
        } else if(appData.monyePerDay > 2000){
            console.log("Ого! Да ты богач");
        } else{
            console.log("Поздравляю Вы вне системы исчеслений");
        }
    },
    checkSecings: function (){
        if(appData.saving == true){
            let saveMoney = +prompt("Какова сумма накоплений: ", "");
            let savepercent = +prompt("Под какой процент","");
    
            appData.monthIncome = saveMoney/100/12*savepercent;
            alert("Доход в месяц с вашего депозита составит: " + appData.monthIncome);
        }
    },
    chooseIncome: function (){
        let items =  prompt("Что принесет Вам доп доход? (напишите через запятую)" ,"");
        appData.income = items.split(', ');
        appData.income.push(prompt("Может что-то еще?", ""));
        appData.income.sort();
    }
}

