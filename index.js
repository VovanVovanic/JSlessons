let name = document.querySelector('#myName'),
  dob = document.querySelector('#dob'),
  about = document.querySelector('#about'),
  isSessionStorage = document.querySelector('#forLocalStore'),
  save = document.querySelector('#save'),
  load = document.querySelector('#load'),
  form = document.querySelector('#form'),
  changeForm = document.querySelector('#changeForm')
  storage = localStorage;

  save.addEventListener('click', (e) => { // засунули в LocalStorage
    e.preventDefault()
    storage.data = JSON.stringify({
      name: name.value,
      borned: dob.value,
      about: about.value
    });
    name.value ='';
    about.value = '';
    dob.value = '';
  });
load.addEventListener('click', e => {  ///Вытащили из Local Storage и засунули назад в инпуты
  e.preventDefault();
  let data = JSON.parse(storage.data || {}); 
  name.value = data.name,
  dob.value = data.borned,
  about.value = data.about;
});
isSessionStorage.addEventListener('change', function(e) { // если галочка отмечена, сохраняем в session Storage. 
  storage = isSessionStorage.checked ? sessionStorage : localStorage;// Оно теряет данные при закрытии страницы  иначе в local storage
});

storage.setItem('Number', 12); // сохранили данные в формате('ключ', значение)
console.log(storage.getItem("Number")); // получим значение намбер
storage.removeItem('Number'); /// удалили Number

isSessionStorage.addEventListener('click', function () { // запомнили в локал сторедж значение чекбокса тру
  storage.setItem('isChecked', true)
});

if(storage.getItem('isChecked') === "true") { // и теперь чекбокс всегда будет отмеччен
   isSessionStorage.checked === true;
}

if(storage.getItem("bg") === "changed") {
  form.style.backgroundColor = 'red'
}
changeForm.addEventListener('click', function(e) {
  e.preventDefault()
  storage.setItem('bg', 'changed');
});