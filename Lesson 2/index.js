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

appData.moneyPerDay = appData.budget/30;

for(i = 0; i < 2; i++) {

  let a = prompt('Введите обязательную статью расходов в этом месяце', '');
  let b = prompt('Во сколько обойдется?'); 
  
  if( (typeof(a)) === 'string' 
  && (typeof(a)) != null 
  &&  (typeof(b)) != null 
  && a != '' 
  && b != '' 
  && a.length < 50) {
 console.log('done');
    appData.expenses[a] =   b;

  } else {
    continue;
  }

}


alert(' Ваш дневной бюджет ' +  appData.moneyPerDay);

let daily = appData.moneyPerDay;

if (daily < 100) {
  console.log('Low income');
} else if (daily > 100 && daily == 500) {
  console.log('Middle Income');
} else if (daily > 500 && daily < 1500) {
  console.log('High income');

}else {
  console.log('Richy rich');
}

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