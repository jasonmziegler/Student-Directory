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
//I think I will need to use slice to display only one section of the array and to not change the array 
// slice(start, end)

console.log(data);
function showPage(pageNumber) {
   function createStudentListItem(studentObject) {
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
      avatarImg.src = studentObject.picture.large;
      avatarImg.alt = "Profile Picture";
      studentDetailsDiv.appendChild(avatarImg);
      //  <h3>Ethel Dean</h3>
      const h3 = document.createElement('h3');
      h3.textContent = `${studentObject.name.first} ${studentObject.name.last}`;
      studentDetailsDiv.appendChild(h3);
      //  <span class="email">ethel.dean@example.com</span>
      const emailSpan = document.createElement('span');
      emailSpan.className = "email";
      emailSpan.innerText = studentObject.email;
      studentDetailsDiv.appendChild(emailSpan);
      studentListItem.appendChild(studentDetailsDiv);
      //</div>
      //<div class="joined-details">
      const joinedDetailsDiv = document.createElement('div');
      joinedDetailsDiv.className = "joined-details";
      //  <span class="date">Joined 12-15-2005</span>
      const dateSpan = document.createElement('span');
      dateSpan.className = "date";
      dateSpan.innerText = studentObject.registered.date;
      joinedDetailsDiv.appendChild(dateSpan);
      studentListItem.appendChild(joinedDetailsDiv);
      //</div>
      //</li>
      return studentListItem;
   }

   const studentListUl = document.querySelector('.student-list');

   //TODO: Need to make sure that a page number greater than the number of pages doesn't throw an error (may not be necessary)
   let start = (pageNumber * 9) - 9;
   let end = pageNumber * 9;
   let studentsPage = data.slice(start, end);
   for (let i = 0; i < studentsPage.length; i++) {
      const studentListItem = createStudentListItem(studentsPage[i]);
      studentListUl.appendChild(studentListItem);
   }
}

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/
//TODO: Need to determine how many pages there will be (if there are 17 students then there needs to be 2 pages)
let numPages = Math.ceil(data.length / 9);
//TODO: Need to create elements for each page with the correct page number
/*
<ul class="link-list"> */
const pagesList = document.querySelector('.link-list');
/*<!-- Dynamically insert pagination buttons here
EXAMPLE - Two pagination buttons, one with active class, one without: --> */
  //<li>
  const pageLi = document.createElement('li');
  //  <button type="button" class="active">1</button>
  const pageButton = document.createElement('button');
  pageButton.type = "button";
  pageButton.textContent = '1';
  pageLi.appendChild(pageButton);
  pagesList.appendChild(pageLi);

  //</li>
  //<li>
  //  <button type="button">2</button>
  //</li>
/*</ul>*/


//TODO: need to set up event listeners that will call the show page function when clicked
//TODO: make sure that the active class is on the page being displayed and is removed from others when another page is clicked


// Call functions
showPage(2);