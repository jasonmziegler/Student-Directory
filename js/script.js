/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/



/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/



/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/

console.log(data);

// TODO: build a list item with information from the data.js file

//<li class="student-item cf">
const studentListItem = document.createElement('li');
studentListItem.className = "student-item cf";
//<div class="student-details">
const studentDetailsDiv = document.createElement('div');
studentDetailsDiv.className = "student-details";
studentListItem.appendChild(studentDetailsDiv);
//  <img class="avatar" src="https://randomuser.me/api/portraits/women/25.jpg" alt="Profile Picture">
const avatarImg = document.createElement('img');
avatarImg.className = "avatar";
avatarImg.src = "https://randomuser.me/api/portraits/women/25.jpg";
avatarImg.alt = "Profile Picture";
studentDetailsDiv.appendChild(avatarImg);
//  <h3>Ethel Dean</h3>
const h3 = document.createElement('h3');
h3.textContent = "Ethel Dean";
studentDetailsDiv.appendChild(h3);
//  <span class="email">ethel.dean@example.com</span>
const emailSpan = document.createElement('span');
emailSpan.className = "email";
emailSpan.innerText = "ethel.dean@example.com"
studentDetailsDiv.appendChild(emailSpan);
studentListItem.appendChild(studentDetailsDiv);
//</div>
//<div class="joined-details">

const joinedDetailsDiv = document.createElement('div');
joinedDetailsDiv.className = "joined-details";
//  <span class="date">Joined 12-15-2005</span>
const dateSpan = document.createElement('span');
dateSpan.className = "date";
dateSpan.innerText = "Joined 12-15-2005";
joinedDetailsDiv.appendChild(dateSpan);
studentListItem.appendChild(joinedDetailsDiv);
//</div>
//</li>
//TODO: append the list item to the student list ul // <ul class="student-list"></ul>
const studentListUl = document.querySelector('.student-list');
studentListUl.appendChild(studentListItem);
/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/



// Call functions
