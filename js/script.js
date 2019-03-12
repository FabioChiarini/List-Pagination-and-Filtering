/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// populate the students list with their respective properties
let students = [{}];

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

console.log(students);


/*
UL
<li class="student-item cf">


    <div class="joined-details">
           <span class="date">Joined 07/15/15</span>
   </div>

</li>
UL

*/

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
