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
  const remove = document.querySelector('ul');
  div.removeChild(remove);
}


// function to set new structure for the students to display on a page
function setPageStructure(div){
  const ul = document.createElement('ul');
  ul.className = 'student-list';
  div.appendChild(ul);
}


/* function to get the increment for the element to display on the page.
Should return 10 or the remaining number of students if the last page
is being selected */
function getIncrement(start) {
  let maxIncrement;
  if ((students.length - start) < 10){
    maxIncrement = students.length - start;
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
function showPage (pageNumber) {

  // remove previous elements from the page and set new structure for the students to display on a page
  const div = document.querySelector('div');
  hideStudents(div);
  setPageStructure(div);
  const ul = document.querySelector('ul');

  //calculate portion of 10 (or less) students to show
  let studentStartingFrom = (pageNumber * 10) - 10;

  // condition to check if you are on the last page
  let increment = getIncrement(studentStartingFrom);

  //display the 10 (or less) students on the page
  for (var i = studentStartingFrom; i < (studentStartingFrom + increment); i+= 1){
    showStudent(ul, students[i]);
  }
}


// function that create the pagination link at the bottom of the page
function appendPageLinks(numberOfPage) {

  const div = document.querySelector('div');
  const nPagesDiv = document.createElement('div');
  nPagesDiv.className = 'pagination';
  div.appendChild(nPagesDiv);

  const nPagesUl = document.createElement('ul');
  nPagesDiv.appendChild(nPagesUl);

  // create pagination link equals to the number of pages
  for (var i = 0; i < numberOfPage; i+= 1){
    const li = document.createElement('li');
    nPagesUl.appendChild(li);
    const a =  document.createElement('a');
    a.href = (i+1);
    a.innerHTML = (i + 1);
    li.appendChild(a);

  }
}



/* REMEMBER TO DO THIS
<div class="page-header cf">
  <h2>Students</h2>
</div>
*/



let students = constructStudentsList();
// number of pages to display at the bottom
let numberOfPage = Math.ceil(students.length/10);

showPage(6);
appendPageLinks(numberOfPage);




/***
   Create the `appendPageLinks function` to generate, append, and add
   functionality to the pagination buttons.
***/
