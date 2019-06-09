let citiesLoad  = document.querySelector('#cities');
let citiesList = document.querySelector('.citiesList');


citiesLoad.addEventListener('click', () => {
  
  fetch('https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json')
  
    .then(response => response.json())
    .then(cities => {
      arrr =[];
      
for (let element in cities){
  arrr.push(cities[element].name);


}
arrr.sort();
console.log(arrr);
const fragment = document.createDocumentFragment();
console.log(fragment)
for (let i = 0; i < arrr.length; i++) {
  
  if(arrr[i].length < 6){
    const li = document.createElement('li');
    li.textContent = arrr[i];
    fragment.appendChild(li);
  }
  
  
}
      


      citiesList.appendChild(fragment);
    });
    
});

