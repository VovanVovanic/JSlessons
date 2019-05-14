let money = +prompt('Ваш бюджет на месяц?', '');
console.log(money);
let time = prompt('Введите дату в формате YYYY-MM-DD', '');
console.log(time);
let monthExpences = prompt('Введите обязательную статью расходов в этом месяце', '');
console.log(monthExpences);
let cost = +prompt('Во сколько обойдется?');


let appData = {
  budget: money,
  timeData: time,
  expenses:  {
    monthExpences: monthExpences,
    cost: cost
  },
  optionalExpences: {},
  income:  [],
  savings: false
};

alert(' Ваш дневной бюджет ' +  money/30);