/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

let students = [{}];

// construct the student list with their respective details
const studentsList = document.querySelectorAll('LI');
for (var i = 0; i < studentsList.length; i += 1){
  const studentDetails = document.getElementsByClassName('student-details')[i];
  const name = studentDetails.querySelector('h3').innerHTML;
  const email = studentDetails.querySelector('span').innerHTML;
  const img = studentDetails.querySelector('img').src;

  const joinedDetails = document.getElementsByClassName('joined-details')[i];
  const joined = joinedDetails.querySelector('span').innerHTML;


  students[i] = {
    img: img,
    name: name,
    email: email,
    joined: joined
  };


}

console.log(students)

// function to show just the students for that page (10 students for page)
function showPage () {
  const div = document.querySelector('div');
  const remove = document.querySelector('ul');
  div.removeChild(remove);
  const ul = document.createElement('ul');
  ul.className = 'student-list';
  div.appendChild(ul);
  for (var i = 0; i < 10; i+= 1){
    const li = document.createElement('li');
    li.className = 'student-item cf';
    ul.appendChild(li);

    const divStudent = document.createElement('div');
    divStudent.className = 'student-details';
    li.appendChild(divStudent);

    const displayImg = document.createElement('img');
    displayImg.className = 'avatar';
    displayImg.src = students[i].img;
    divStudent.appendChild(displayImg);

    const displayName = document.createElement('h3');
    displayName.innerHTML = students[i].name;
    divStudent.appendChild(displayName);

    const displayEmail = document.createElement('span');
    displayEmail.className = 'email';
    displayEmail.innerHTML = students[i].email;
    divStudent.appendChild(displayEmail);

    const divStudentJoined = document.createElement('div');
    divStudentJoined.className = 'joined-details';
    li.appendChild(divStudentJoined);

    const displayJoinDate = document.createElement('span');
    displayJoinDate.className = 'date';
    displayJoinDate.innerHTML = students[i].joined;
    divStudentJoined.appendChild(displayJoinDate);
  }

showPage();

}




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
