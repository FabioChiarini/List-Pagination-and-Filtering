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
    displayJoinDate.innerHTML = students.joined;
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



let students = constructStudentsList();

showPage(6);



/***
   Create the `showPage` function to hide all of the items in the
   list except for the ten you want to show.

   Pro Tips:
     - Keep in mind that with a list of 54 students, the last page
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when
       you initially define the function, and it acts as a variable
       or a placeholder to represent the actual function `argument`
       that will be passed into the parens later when you call or
       "invoke" the function
***/




/***
   Create the `appendPageLinks function` to generate, append, and add
   functionality to the pagination buttons.
***/
