let getIt = document.querySelector('#getIt'),
  result = document.querySelector('#result'),
  form = document.querySelector('#form'),
  input = document.querySelectorAll('input');


  getIt.addEventListener('click', () => {
    fetch('example.json')
      .then(response => {
        if(response.status >= 400) {
          return Promise.reject();
        }
        else {
          return response.json();
        }

      })
      .then((friends) => {
        result.innerHTML = '';
        for(friend of friends) {
          let friendNode =createFriend(friend);
          result.appendChild(friendNode)

        }
      })
      .catch(() => {
        console.error('error');
      });
  });

  
  // function fetch(url) {
  //   return new Promise((resolve, reject) => {
  //     let xhr = new XMLHttpRequest();
  //     xhr.open('GET', url);
  //     xhr.responseType = 'json';
  //     xhr.send();
  //     xhr.addEventListener('load', () => {
  //       if(xhr.status >= 400) {
  //         reject();
  //       }
  //       else {
  //         resolve(xhr.response);
  //       }
  //       xhr.addEventListener('error', reject);
  //       xhr.addEventListener('abort', reject);
  //     }); 
  //   });
  // }


  function createFriend(friend) {
    const div  = document.createElement('DIV');
    div.classList.add('friend');
    div.textContent= `${friend.name} ${friend.age} ${friend.car}`;
    return div;
  }


