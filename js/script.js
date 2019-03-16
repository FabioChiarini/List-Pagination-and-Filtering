/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// function to construct the student list with their respective details
function constructStudentsList ()  {
  let students = [{}];
  const studentsList = document.querySelectorAll('LI');

  for (var i = 0; i < studentsList.length; i += 1){
    const studentDetails = document.getElementsByClassName('student-details')[i];
    const joinedDetails = document.getElementsByClassName('joined-details')[i];

    // populate the list
    students[i] = {
      img: studentDetails.querySelector('img').src,
      name: studentDetails.querySelector('h3').innerHTML,
      email: studentDetails.querySelector('span').innerHTML,
      joined: joinedDetails.querySelector('span').innerHTML
    };
  }
  return students;
}


// function to remove previous elements from the page
function hideStudents(div) {
  const remove = document.getElementsByClassName('student-list')[0];
  div.removeChild(remove);
}


// function to set new structure for the students to display on a page
function setPageStructure(div){
  const ul = document.createElement('ul');
  ul.className = 'student-list';
  div.parentNode.insertBefore(ul, div.nextSibling);
}

function setSearchStructure(div) {
  //create div for searching students
  const divSearch = document.createElement('div');
  divSearch.className = 'student-search';
  div.appendChild(divSearch);
  //create input bar to search
  const inputSearch = document.createElement('input');
  inputSearch.placeholder = "Search for students...";
  divSearch.appendChild(inputSearch);
  //create the search button
  const searchButton = document.createElement('button');
  searchButton.name = "searchButton";
  divSearch.appendChild(searchButton);
  searchButton.textContent = 'SEARCH';
}


/* function to get the increment for the element to display on the page.
Should return 10 or the remaining number of students if the last page
is being selected */
function getIncrement(start, listOfStudents) {
  let maxIncrement;
  if ((listOfStudents.length - start) < 10){
    maxIncrement = listOfStudents.length - start;
  }
  else {
    maxIncrement = 10;
  }
  return maxIncrement;
}


// function to create the structure of a single students and attach it to the ul
function showStudent (ul, student) {


  // function to show the student details on the page
  function displayStudent (student) {
    displayImg.src = student.img;
    displayName.innerHTML = student.name;
    displayEmail.innerHTML = student.email;
    displayJoinDate.innerHTML = student.joined;
  }


  const li = document.createElement('li');
  li.className = 'student-item cf';
  ul.appendChild(li);

  const divStudent = document.createElement('div');
  divStudent.className = 'student-details';
  li.appendChild(divStudent);

  const displayImg = document.createElement('img');
  displayImg.className = 'avatar';
  divStudent.appendChild(displayImg);

  const displayName = document.createElement('h3');
  divStudent.appendChild(displayName);

  const displayEmail = document.createElement('span');
  displayEmail.className = 'email';
  divStudent.appendChild(displayEmail);

  const divStudentJoined = document.createElement('div');
  divStudentJoined.className = 'joined-details';
  li.appendChild(divStudentJoined);

  const displayJoinDate = document.createElement('span');
  displayJoinDate.className = 'date';
  divStudentJoined.appendChild(displayJoinDate);

  displayStudent(student);
}


// function to show just the students for that page (10 students for page)
function showPage (pageNumber, listOfStudents) {

  // remove previous elements from the page and set new structure for the students to display on a page
  const div = document.getElementsByClassName('page')[0];
  hideStudents(div);
  const divChild = document.getElementsByClassName('page-header cf')[0];
  setPageStructure(divChild);
  const ul = document.getElementsByClassName('student-list')[0];

  //calculate portion of 10 (or less) students to show
  let studentStartingFrom = (pageNumber * 10) - 10;

  // condition to check if you are on the last page
  let increment = getIncrement(studentStartingFrom, listOfStudents);

  //display the 10 (or less) students on the page
  for (var i = studentStartingFrom; i < (studentStartingFrom + increment); i+= 1){
    showStudent(ul, listOfStudents[i]);
  }
}


// function that create the pagination link at the bottom of the page
function appendPageLinks(numberOfPages) {

  const div = document.getElementsByClassName('page')[0];
  const nPagesDiv = document.createElement('div');
  nPagesDiv.className = 'pagination';
  div.appendChild(nPagesDiv);

  const nPagesUl = document.createElement('ul');
  nPagesDiv.appendChild(nPagesUl);

  // create pagination link equals to the number of pages
  for (var i = 0; i < numberOfPages; i+= 1){
    const li = document.createElement('li');
    nPagesUl.appendChild(li);
    const a =  document.createElement('a');
    a.href = "#";
    a.innerHTML = (i + 1);
    li.appendChild(a);

    // set class active to first page
    let active = document.getElementsByTagName('a')[0];
    active.className = 'active';
  }
}


// function to get the page clicked by the user and then display it.
function getPageNumber (pages, listOfStudents){
  for (let i = 0; i < pages.length; i += 1){
    pages[i].addEventListener('click', (e) => {
      // remove the active class from pagination
      for (let h = 0; h < pages.length; h += 1){
        pages[h].classList.remove('active');
      }
      pageNumber = e.target.textContent;
      showPage(pageNumber, listOfStudents);
      // set the active class to the active page
      pages[pageNumber-1].className = 'active';
    });
  }
}


// function to search the student based on the user user input
function searchStudent (button) {
  button.addEventListener('click', () =>{
    const userInput = document.getElementsByTagName('input')[0].value;
    let results = []
    // go through every student in the list to find possible match(es)
    for (var k = 0; k < students.length; k += 1){
      // check if name or email match the user Input e store the student(s)
      if (students[k].name.toString().toUpperCase().includes(userInput.toString().toUpperCase())
          || students[k].email.toString().toUpperCase().includes(userInput.toString().toUpperCase())){
            results.push(students[k]);
          }
    }
    if (results.length === 0) {
      noResults();
    } else {
      // following lines are to display the results
      let numberOfPages = Math.ceil(results.length/10);
      showPage(1, results);
      removePageLinks();
      appendPageLinks(numberOfPages);
      const pagesSearch = document.querySelectorAll('a');
      getPageNumber(pagesSearch, results);
      }
    });
}

// function to remove the pagination link
function removePageLinks(){
  const pageLinks = document.getElementsByClassName('pagination')[0];
  const divPage = document.getElementsByClassName('page')[0];
  divPage.removeChild(pageLinks);

}

function noResults (flag) {
  if (flag === 0) {
    removePageLinks();
    const div = document.getElementsByClassName('page')[0];
    hideStudents(div);
    const noStudent = document.createElement('h1');
    noStudent.textContent = 'NO STUDENT WAS FOUND';
    div.appendChild(noStudent);
  }
}

// function to dinamically search students while typing
function studentSearchWhileTyping(noResultsFlag) {
  const input = document.getElementsByTagName('input')[0];
  input.addEventListener('keyup', () => {
    // go through every student in the list to find possible match(es)
    let results = [];
    userInput = input.value;
    for (var k = 0; k < students.length; k += 1){
      // check if name or email match the user Input e store the student(s)
      if (students[k].name.toString().toUpperCase().includes(userInput.toString().toUpperCase())
          || students[k].email.toString().toUpperCase().includes(userInput.toString().toUpperCase())){
            results.push(students[k]);
          }
      }
  // check if results array is empty and, if so, display it to the page
  if (results.length === 0) {
    noResults(noResultsFlag);
    noResultsFlag = 1;
  } else {
    if (noResultsFlag === 1) {
      let h1 = document.getElementsByTagName('h1')[0];
      const div = document.getElementsByClassName('page')[0];
      div.removeChild(h1);
      const divChild = document.getElementsByClassName('page-header cf')[0]
      setPageStructure(divChild);
    }
    // following lines are to display the results
    let numberOfPages = Math.ceil(results.length/10);
    showPage(1, results);
    if (noResultsFlag !== 1) {
      removePageLinks();
    }
    appendPageLinks(numberOfPages);
    const pagesSearch = document.querySelectorAll('a');
    getPageNumber(pagesSearch, results);
    noResultsFlag = 0;
    }
  });
}



let students = constructStudentsList();
// number of pages to display at the bottom
let numberOfPages = Math.ceil(students.length/10);

//display first page and append pagination link
showPage(1, students);
appendPageLinks(numberOfPages);

// next 5 lines are for basic functionality of the site, without the searching part
const divChild = document.getElementsByClassName('page-header cf')[0];
setSearchStructure(divChild);
const pages = document.querySelectorAll('a');
const button = document.getElementsByTagName('button')[0];
getPageNumber(pages, students);

// call the 2 search functions
let noResultsFlag = 0;
studentSearchWhileTyping(noResultsFlag);
searchStudent(button);
