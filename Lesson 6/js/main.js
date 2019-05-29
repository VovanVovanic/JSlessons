let startCalc = document.getElementById("start"),
  budgetValue = document.getElementsByClassName("budget-value")[0],
  dayBudgetValue = document.getElementsByClassName("daybudget-value")[0],
  levelValue = document.getElementsByClassName("level-value")[0],
  expensesValue = document.getElementsByClassName("expenses-value")[0],
  incomeValue = document.getElementsByClassName("income-value")[0],
  monthSavingValue = document.getElementsByClassName("monthsavings-value")[0],
  yearSavingValue = document.getElementsByClassName("yearsavings-value")[0],
  expensesItem = document.getElementsByClassName("expenses-item"),
  expensesBtn = document.getElementsByTagName("button")[0],
  optExpBtn = document.getElementsByTagName("button")[1],
  countBtn = document.getElementsByTagName("button")[2],
  btns = document.querySelectorAll('button'),
  optExpItem = document.querySelectorAll(".optionalexpenses-item"),
  optExpValue = document.querySelector('.optionalexpenses-value'),
  incomeItem = document.querySelector(".choose-income"),
  savingsCheck = document.querySelector("#savings"),
  chooseSum = document.querySelector(".choose-sum"),
  choosePercent = document.querySelector(".choose-percent"),
  yearValue = document.querySelector(".year-value"),
  monthValue = document.querySelector(".month-value"),
  dayValue = document.querySelector(".day-value");

  window.addEventListener('load', () => {
    for (let i = 0; i < btns.length -1; i++){
      btns[i].disabled = true;
      btns[i].style.backgroundColor= 'grey';
      btns[i].style.color = 'red';
      
    }
  });

let money, time;

startCalc.addEventListener('click', function(e) {

  time = prompt("Введите дату в формате YYYY-MM-DD", "");
  money = +prompt("Ваш бюджет на месяц?", "");

  while (isNaN(money) || money == "" || money === null) {
    money = +prompt("Ваш бюджет на месяц?", "");
  }
  appData.budget = money;
  appData.timeData = time;
  budgetValue.textContent = money.toFixed() + " " + 'EU';

  yearValue.value = new Date(Date.parse(time)).getFullYear();
  monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
  dayValue.value = new Date(Date.parse(time)).getDate();

  for (let i = 0; i < btns.length - 1; i++) {
    btns[i].disabled = false;
    btns[i].style.color = 'white';
    btns[i].style.backgroundColor = 'orange';
  
  }
});

expensesBtn.addEventListener("click", () => {
  let sum = 0;

  for (i = 0; i < expensesItem.length; i++) {
    let a = expensesItem[i].value;
    expensesItem[i].value = '';
    let b = expensesItem[++i].value;
    expensesItem[i].value = '';
    
    
    if (
      typeof a === "string" &&
      typeof a != null &&
      typeof b != null &&
      a != "" &&
      b != "" &&
      a.length < 50
    ) {
      appData.expenses[a] = b;
      sum += +b;
      
      
    } else {
      i = i - 1;
    }
  }
  expensesValue.textContent = sum + " " + "EU";
  
});

optExpBtn.addEventListener('click', () => {
  for (let i = 0; i < optExpItem.length; i++) {
    let optExp = optExpItem[i].value;
    appData.optionalExpences[i] = optExp;
    optExpValue.textContent += appData.optionalExpences[i] + ', ';
    optExpItem[i].value = '';

  }
});


countBtn.addEventListener('click', () => {
  appData.moneyPerDay = ((appData.budget - parseInt(expensesValue.innerText)) / 30).toFixed();
  let daily = appData.moneyPerDay;
  dayBudgetValue.textContent = daily + ' ' + 'EU';
  

  if (daily < 20) {
    levelValue.textContent = "Малый доход";
  } else if (daily > 20 ||  daily === 50) {
    levelValue.textContent = "Средний доход";
  } else if (daily > 50)  {
    levelValue.textContent = "Высокий доход";

  } else {
    levelValue.textContent = "Произошла ошибка";
  }


});

incomeItem.addEventListener('input', () => {
  let items = incomeItem.value;
  appData.income = items.split(", ");
  incomeValue.textContent = items;

});


savingsCheck.addEventListener('click', () => {
  console.log(appData.savings);
 if(appData.savings == true) {
   appData.savings = false;
 } else 
 appData.savings = true;
});


chooseSum.addEventListener('input', (e) => {
  if (appData.savings == true) {
    let summ = +chooseSum.value,
        percent = +choosePercent.value;

    appData.monthIncome = summ/100/12*percent;
    appData.yearIncome = summ/100*percent;

    monthSavingValue.textContent = appData.monthIncome;
    yearSavingValue.textContent = appData.yearIncome;

    
  }
  if (appData.savings == false) {
    chooseSum.value = "";
  }
});


choosePercent.addEventListener('input', (e) => {
  if (appData.savings == true) {
    let summ = +chooseSum.value,
        percent = +choosePercent.value;

    appData.monthIncome = summ/100/12*percent;
    appData.yearIncome = summ/100*percent;

    monthSavingValue.textContent = appData.monthIncome.toFixed(1) + " " + 'EU';
    yearSavingValue.textContent = appData.yearIncome.toFixed(1) + " " + 'EU';
    
  }
  if (appData.savings == false) {
    choosePercent.value = '';
  }
});

let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpences: {},
  income: [],
  savings: false

};

let list = [];
for (let key in appData) {
  list.push(" " + key);
}

console.log(appData.savings);
