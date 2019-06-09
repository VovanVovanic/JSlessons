
         
    let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');

 inputRub.addEventListener('input', () => {
   let prmise = new Promise(function(resolve, reject ){
    let request = new XMLHttpRequest();
    request.open('GET', 'js/current.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();
   
    request.addEventListener('readystatechange', function() {
        if (request.readyState === 4 && request.status == 200) {
          resolve()
       } else {
            reject()
        }
    });



   })
        let resp = function() {
      prmise
        .then (() => {
          let data = JSON.parse(request.response);

          inputUsd.value = inputRub.value / data.usd;
        })
        .catch(() => {
          inputUsd.value = "Что-то пошло не так!";
        });
    } 
    resp();


 });

 

// let tet = document.querySelector('#test');
// tet.addEventListener('input', (e) => {
//   let promise = new Promise(function(resolve, reject) {
//     if(e.target.value == 5) {
//       resolve();
//     } else{
//       reject();
//     }
//   });
//   let wer = function() {
//     promise
//     .then(() => {
//       console.log('ok');
//     })
//     .catch(() => {
//       console.log('bad');
//     });
//   }
//   wer();
// });