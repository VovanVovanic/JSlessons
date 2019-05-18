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
  savings: true,
  chooseExpenses: function () {
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
  },
  detectDayBudget: function () {
    appData.moneyPerDay = (appData.budget / 30).toFixed(2);
    alert(" Ваш дневной бюджет " + appData.moneyPerDay);
  },
  detectLevel: function () {
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
  },
  checkSavings: function () {
    if (appData.savings == true) {
      let save = +prompt(" Каковы ваши накопления?"),
        percent = prompt(" Кааков процент?");
      appData.monthIncome = (save / 100 / 12) * percent;
      alert(" Доход в месяц" + appData.monthIncome);
    }
  },
  chooseOptExpenses: function () {
    for (let i = 1; i < 3; i++) {
      let question = prompt('Статья необязательных расходов?');
      appData.optionalExpences[i] = question;
    }
  },
  chooseIncome: function () {
    let items = prompt('Способ дополнительного дохода? (Перечислите через запятую).' + " ");
    if (typeof items === 'string' &&
      typeof items != null &&
      typeof items != ''
      ) {
      appData.income = items.split(', ');
      appData.income.push(prompt(' И что еще?'));   
      appData.income.sort();
      appData.income.forEach(function(item, i) {
      console.log(' Ваш дополнительный доход:' +  ' ' + i + ' ' + item);
      });
    } else {
      this.chooseIncome();
    }
  }
  };

 let list = [];
for (let key in appData) {
  list.push(' ' + key);
}

console.log(`Наше приложение содержит:  ${list}`);

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