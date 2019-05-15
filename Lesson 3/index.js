let money, time;

function start() {
  money = +prompt("Ваш бюджет на месяц?", "");
  time = prompt("Введите дату в формате YYYY-MM-DD", "");

  while (isNaN(money) || money == "" || money === null) {
    money = +prompt("Ваш бюджет на месяц?", "");
  }
}
start();

let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpences: {},
  income: [],
  savings: true
};

function detectDayBudget() {
  appData.moneyPerDay = (appData.budget / 30).toFixed(2);
  alert(" Ваш дневной бюджет " + appData.moneyPerDay);
}
detectDayBudget();

function chooseExpenses() {
  for (i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", "");
    let b = prompt("Во сколько обойдется?");

    if (
      typeof a === "string" &&
      typeof a != null &&
      typeof b != null &&
      a != "" &&
      b != "" &&
      a.length < 50
    ) {

      appData.expenses[a] = b;
    } else {
      i = i - 1;
    }
  }
}

chooseExpenses();

function detectLevel() {
  let daily = appData.moneyPerDay;

  if (daily < 100) {
    console.log("Low income");
  } else if (daily > 100 && daily == 500) {
    console.log("Middle Income");
  } else if (daily > 500 && daily < 1500) {
    console.log("High income");
  } else {
    console.log("Richy rich");
  }
}
detectLevel();

function checkSavings() {
  if (appData.savings == true) {
    let save = +prompt(" Каковы ваши накопления?"),
      percent = prompt(" Кааков процент?");
    appData.monthIncome = (save / 100 / 12) * percent;
    alert(" Доход в месяц" + appData.monthIncome);
  }
}
checkSavings();

function chooseOptExpenses() {
  let z = 0;
  while (z < 3) {
    let question = prompt('Статья необязательных расходов?');
    appData.optionalExpences[z] = question;
    z++;
    
    
  }
  
}
chooseOptExpenses();

console.log(appData);
/*let int = 0;
while (int < 5) {
  let b = prompt('Во сколько обойдется?'); 
  int++
}
do {
  let b = prompt('За сколько обойдется?'); 
  int++;
}
while (int < 4);*/