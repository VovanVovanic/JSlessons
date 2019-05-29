/*let arr = [
  'Krait' ,
  'Asp' ,
  'Phantom' ,
  'Cobra' ,
  'Python'

];
arr.unshift('Cutter'); // Добавляет элемент впереди
console.log(arr + ' Добавили Cutter в начало');

arr.shift(); // Удаляет первый элемент
console.log(arr + ' Удалили Cutter');


arr.push('Anaconda'); // Добавляет элемент в конец массива
console.log(arr + ' Добавили Анаконду в конец');

arr.pop(); // Удаляет последний элемент
console.log(arr + ' Удалили Анаконду');

let a = arr.join('/'); // этот метод слепит все корабли в одну строку и разделит их по знаку / то есть превратит строку в массив
console.log(a + 'Слепили и разделили');

// let askUser = prompt('', ''),
//   arr2 = [];
// arr2 = askUser.split(',') //Это превратит строку в массив и разделит элементы по знаку в кавычках
// console.log(arr2);

let i = arr.sort() // отсортируем по алфавиту
console.log(i + ' Отсортировали по алфавиту');

let с = arr.reverse() // сортирует против алфавита
console.log(arr + ' ' + ' Меня отсортировали наоборот')


let arr3 = [2, 4, 67, 23, 45, 1, 0, 8]
arr3.sort(compare);
console.log(arr3 + ' Меня отсортировали по порядку');

function compare(a, b) { //это для сортировки числового массива в порядке возрастания
  return a - b;
}

arr.forEach(function(item, i) {
 console.log( '' + i + ':' +  ' ' + ' Это мой корабль' + ' ' + item + '    ' )
 }) // Метод перебора массива. Для каждого элемента производит какое то действие. i Это индекс. 
 // item, тут это название корабля. Третьим аргументом может быть сам массив 


 for ( let key in arr) { // метод перебора выводит индекс
console.log(key + ' ' + 'Я индекс элемента');
}


for (let key of arr) { // метод перебора выводит сам элемент. Аналог цикла for но не работает для объектов
console.log(key + ' ' + ' Я элемент массива');
}

delete arr[3]; // удалит элемент массива
console.log(arr + ' ' + ' Удалили Кобру');

arr.splice(3, 1); // Более адекватное удаление не оставляет undefined, в отличии от метода delete
console.log(arr + ' ' + 'Вырезали пустое место после удаленной Кобры');

arr.splice(0, 2, 'Corvette', ' FDL'); // удаляет и замещает элементы, в данном примере с индекса 0 
//по индекс 2 
console.log(arr + ' ' + ' Вырезали Питона и Фантома, вставили Корвет и Федю');

arr.splice(3, 0, 'Vulture'); // Вставляет элемент после указанного индекса (3)
console.log(arr + " " + ' Вставили Вультуру');

var newArr = arr.concat('Python', 'Phantom')// создает новый массив и добавляет элементы из старого
console.log(newArr + ' ' + ' В старый массив добавили еще один из Питона и Фантома')

let upper = newArr.map(function(el) { // делает что то и возвращает новый массив
  return el.toUpperCase();
});
console.log(upper + ' ' + ' ПЕРЕВЕЛИ МАПОМ НАЗВАНИЯ В ВЕРХНИЙ РЕГИСТР')
var newArr2 = [...arr, ...newArr]; //склеивает массивы
console.log(newArr2 + ' ' + ' Склеили 2 массива с помощью спреда')

let [first, second, third, fourth, fifth, ...rest] = newArr2; // Выбранные элементы выводим а остаток в массив
console.log(first, second, third, fourth, fifth, rest);


let filtered = newArr.filter(function(l) { // Это фильтр. Здесь выводит элементы массива, длина которых больше 5
  return l.length > 5;
})

console.log(filtered + ' ' + ' отбросили корабли в имени которых меньше 5 букв');

let ships = [
  {
    name: 'Python',
    size: 'middle'
  },
  {
    name: 'Cutter',
    size: 'big'
  },
  {
    name: 'Vulture',
    size: 'small'
  },
  {
    name: 'Asp',
    size: 'middle'
  }
]

const bar = ships.map(e => {
  return `${e.name} ${e.size}`;///  Еще пимер метода map
});
console.log(bar);

let foo = [
  {
    name: 'Vladimir',
    age: '40'
  },
  {
    name: 'Victor',
    age: '26'
  },
  {
    name: 'Alex',
    age: '34'
  },
  {
    name: 'Sergey',
    age: '28'
  }
];

foo.sort((a, b) =>{
  return a.age - b.age; // отсортировали по возрасту
}
);
console.log(foo);*/


// var forsort = [];
// for (var item in arr2)
//   forsort.push([item, arr2[item]])
// forsort.sort(
//   function(a, b) {
//     return b[1] - a[1]
//   })
// for (var z = 0; z < forsort.length; z++) {
//   arr3[forsort[z][0]] = forsort[z][1];
// }
// console.log(arr3);
 
let myText = document.querySelector('#myText');
let myButton = document.querySelector('#myButton');
let myList = document.querySelector('#list');

myButton.addEventListener('click', function(e) {
  if (myText.value === '') {
    return;
  }
 
  let myElem = document.createElement('li');
  myElem.textContent = myText.value;
  myList.appendChild(myElem);
  myElem.classList.add('item');

  let delBtn = document.createElement('button');
  delBtn.textContent = ' Удалить';
  myElem.appendChild(delBtn);

  myText.value ='';

    delBtn.addEventListener('click', function(){
      myList.removeChild(myElem);
    });



});