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

//console.log(data);

/**
 * @type {number}
 */
 let numPages = Math.ceil(data.length / 9);

/**
 * @type {object} 
 */
 const pagesList = document.querySelector('.link-list');

/**
 * This the showPage function
 * @param {array} list - array of students.
 * @param {number} pageNumber - page number of the students to display
 *
 * @example 
 * 
 *    showpage(myArray, 1);
 */
function showPage(list, pageNumber) {
   /**
   * This the createStudentListItem function (a helper function of showPage)
   * @param {object} studentObject - an object that contains student information.
   * @return {object} A document object which contains a div that will display the student details
   * 
   * @example 
   * 
   *    createStudentListItem(myStudentObject);
   */
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
   /**
    * @type {number}
    */
   let start = (pageNumber * 9) - 9;
   /**
    * @type {number}
    */
   let end = pageNumber * 9;
   /**
    * @type {array}
    */
   let studentsPage = list.slice(start, end);
   for (let i = 0; i < studentsPage.length; i++) {
      /**
       * @type {object}
       */
      const studentListItem = createStudentListItem(studentsPage[i]);
      studentListUl.appendChild(studentListItem);
   }
} // End of showPage function

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/
//determine how many pages there will be (if there are 17 students then there needs to be 2 pages)
/**
 * This is the addPagination function. This function takes in the number of pages and the current page
 * and adds the pagination buttons to the bottom of the student page ul
 *
 * @param {number} numPages - A string param
 * @param {number} currentPage A good string
 *
 * @example
 *
 *     addPagination(5, 1)
 */
function addPagination(numPages, currentPage) {
//Create elements for each page with the correct page number active
/*
<ul class="link-list"> */
   /**
    * @type {object}
    */
   const pagesList = document.querySelector('.link-list');
   
   /**
    * This is the createPageButton function. ( a helper function for addPagination ) This function creates a single button
    * for the pagination buttons.
    *
    * @param {string} n - A string param
    * @return {string} A good string
    *
    * @example
    *
    *     foo('hello')
    */
   function createPageButton(pageNumber, isActive) {
      /*<!-- Dynamically insert pagination buttons here
      EXAMPLE - Two pagination buttons, one with active class, one without: --> */
      //<li>
      /**
       * @type {object}
       */
      const pageLi = document.createElement('li');
      //  <button type="button" class="active">1</button>
      /**
       * @type {object}
       */
      const pageButton = document.createElement('button');
      pageButton.type = "button";
      if (isActive) pageButton.className = "active";
      pageButton.textContent = String(pageNumber);
      pageLi.appendChild(pageButton);
      pagesList.appendChild(pageLi);
  }

  for (let i = 1; i <= numPages; i++) {
     createPageButton(i, (i === currentPage));
  }
}  //end of addPagination Function


// Show the first page of students when page loads
showPage(data, 1);
// add the pagination below the student ul
addPagination(numPages, 1);

// add event listeners to the pagination buttons
pagesList.addEventListener('click', (e) => {
   //console.log(e.target);
   if (e.target.type === 'button') {
      const studentListUl = document.querySelector('.student-list');
      studentListUl.innerHTML = '';
      const pagesList = document.querySelector('.link-list');
      pagesList.innerHTML = '';
      //console.log(e.target);
      // parseInt(e.target.innerText);
      /**
       * @type {number}
       */
      let pageClicked = parseInt(e.target.innerText)
      showPage(data, pageClicked);
      addPagination(numPages, pageClicked);
   }  
});
