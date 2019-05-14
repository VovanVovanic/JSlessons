let money = +prompt('Ваш бюджет на месяц?', '');
let time = prompt('Введите дату в формате YYYY-MM-DD', '');



let appData = {
  budget: money,
  timeData: time,
  expenses:  {},
  optionalExpences: {},
  income:  [],
  savings: false
};

let monthExpences = prompt('Введите обязательную статью расходов в этом месяце', '');
let cost = +prompt('Во сколько обойдется?');
let monthExpences2 = prompt('Введите обязательную статью расходов в этом месяце', '');
let cost2 = +prompt('Во сколько обойдется?');


appData.expenses.monthExpences = cost;
appData.expenses.monthExpences2 = cost2;

alert(' Ваш дневной бюджет ' +  appData.budget/30);







