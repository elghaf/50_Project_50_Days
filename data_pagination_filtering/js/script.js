// Get elements from the DOM
let studentList = document.querySelector('.student-list');
let btnList = document.querySelector('.link-list');
let header = document.querySelector('.header');



/********************* EXCEEDS EXPECTATIONS *****************/

// Create search area
header.innerHTML += `
                     <label for="search" class="student-search">
                        <span>Search by name</span>
                        <input id="search" placeholder="Search by name...">
                        <button type="button" id="search-btn">
                        <img src="img/icn-search.svg" alt="Search icon">
                        </button>
                     </label>
`;

let foundArr = [];
const searchBtn = document.getElementById('search-btn');
const searchInput = document.getElementById('search')

function searchName(place, text){
   foundArr = [];
   let val = text.value.toLowercase();
   for(let i = 0; i<place.length; i++){
      let firName = place[i].name.first.toLowercase();
      let lasName = place[i].name.last.toLowerCase();
      let bothNames = firName + ' ' + lasName;
      if(firName.includes(val) || lasName.includes(val) || bothNames.includes(val)){
         foundArr.push(place[i]);
      }
   } 
   // in case there are no results 
   if(foundArr.length === 0){
      studentList.innerHTML = `<h3> No results</h3>`;
      btnList.innerHTML = '';
   }else{
      studentList.innerHTML = '';
      showPage(foundArr, 1);
      addPagination(foundArr);
   }

}

// Create a event for searching names

searchBtn.addEventListener('click', e => {
   e.preventDefault();
   searchName(data, searchInput);
});

searchInput.addEventListener('keyup', e => {
   e.preventDefault();
   searchName(data, searchInput);
});

function showPage(list, page) {
   // split students in fractions of 9
   let startIndex = (page * 9) -9;
   let endIndex = page * 9;

   // Update endIndex in case the list has less than 9 students:
   if(endIndex> list.length) {
      let subt = parseInt(endIndex) -parseFloat(list.length);
      endIndex -= subt;
   }

   // loop for adding students in the DOM:
   for(let i = startIndex; i < endIndex; i++){
      let actualStd = list[i];

      studentList.innerHTML += `
                        <li class = 'student-item cf'>
                           <div class = 'student-details'>
                              <img class = 'avatar' src = '${actualStd.picture.medium}' alt = ' Profile Picture'>
                              <h3>${actualStd.name.first} ${actualStd.name.last}</h3>
                           </div>
                           <div class = 'joined-details'>
                              <span class ='date'> Joined ${actualStd.registered.date}</span>
                           </div>
                        </li>
      `;

   }
}

function addPagination(list){
   btnList.innerHTML = '';
   let totalButtons = Math.ceil(list.length / 9);
   if(list.length >= 10){
      // loop for creating and addin the buttns to the DOM
      for(let i = 0 ; i<totalButtons; i++){
         btnList.innerHTML +=`
                           <li>
                              <button type = 'button' class = 'pagin'>${i+1} </button>
                           </li>

         `;

      }
      // Give the class active for the first button 
      btnList.firstElementChild.firstElementChild.classList.add('active');

      }else {
         // Dont create buttons for just onee page
         btnList.innerHTML = '';
      }
}
btnList.addEventListener('click', e => {
   if(e.target.className === 'pagin'){
      // change the button with active class 
      document.querySelector('.active').classList.remove('active');
      e.target.classList.add('active');
      // clear the page and call the showpage woth the new value
      studentList.innerHTML = '';
      if(searchInput.value.length === 0 ){
         showPage(data, parseInt(e.target.innerText));

      }else{
         showPage(foundArr, parseInt(e.target.innerText));
      }
   }
})

// Call functions 
showPage(data, 1);
addPagination(data);

