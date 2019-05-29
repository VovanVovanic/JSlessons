let menu = document.querySelector('.menu');
let menuItem = document.querySelectorAll('.menu-item');
let backGround = document.querySelector('body');
let title = document.querySelector('#title');
let adv = document.querySelector('.adv');
let answer = document.querySelector('#prompt');
let column = document.querySelectorAll('.column');
let question = prompt(' Ваше отношение к технике Apple?');




menu.insertBefore(menuItem[2], menuItem[1]);
let fifth = document.createElement('li');
fifth.classList.add('menu-item');
fifth.textContent = ' Пятый пункт';
menu.appendChild(fifth);

title.innerHTML= '<h3>Мы продаем только подлиную технику Apple</h3>';


column[1].removeChild(adv);

answer.innerHTML = question;