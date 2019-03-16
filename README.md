# List Pagination and Filtering
Unit 2 Project - TeamTreeHouse
 Instructions:
 In this project, you'll enhance the usability of a web page that is displaying way too much information all at once. Long lists don't make for a good user experience on a web page. To make it easier for the user to find information and read the page, you'll add to this project a popular web development technique known as "pagination".

While making these improvements, you'll adhere to an important development principle known as "progressive enhancement". Which in this case basically just means that you'll add JavaScript to enhance the web page, without making the web page dependent upon the JavaScript that you are adding.

In other words, you'll add JavaScript to paginate and improve the project, without altering the project in such a way that JavaScript becomes required to use or view the web page.

With "progressive enhancement" in mind, you'll write the code to take this default list of 54 students and break it up into separate pages that display only 10 students at a time. Additionally, you'll programmitcally add buttons to the bottom of the page that allow users to navigate through the list, 10 students at a time.

Your pagination solution should be dynamic, meaning it will work for any list containing any number of items.

An optional search feature task will give you the opportunity to earn an Exceeds Expectation grade on this project while learning about filtering in a web page. It is highly recommended that you aim for exceeds as doing so will strengthen your skills, add to your experience, and give you cooler projects to show off to potential employers.

Avoid using plugins to achieve the pagination and/or search functionality. While there are a number of tools out there to help with this sort of feature, for your education and career it is important for you to gain experience and understanding of these techniques and how they work, "under the hood".

This project is a good step up in difficulty from the first project, and it will be a great way to really push your skills to the next level. Luckily, if you run into trouble or get stuck, you have an excellent support system here at Treehouse and on Slack.

After completing this project, you'll have a strong second portfolio piece to show off to potential employers, new and powerful JavaScript skills, and you will have taken a huge step on your journey to become a web developer.



EXTRA CREDITS:
Add search component
Dynamically create and append a search component. You can reference the examples/example-exceeds.html file, lines 16-19, to see an example of the markup you'll need.
Add functionality to the search component
When the "Search" button is clicked, the list of students is filtered to match the search value. For example if the name Phillip is typed into the box, list all students whose name or email includes Phillip.
Note: To improve the functionality and add to the user experience, consider adding a keyup event listener to the search input so that the list filters in real time as the user types. This would be in addition to making the search button clickable since pasting text into the search bar wouldn't trigger the keyup event.

Paginate search results
Display pagination links based on how many search results are returned. For example: if 10 or fewer results are returned, 0 or 1 pagination links are displayed. If 22 search results are returned, 3 pagination links are displayed.
Note: If you created functions for showing and hiding students, creating and appending pagination links, and adding functionality to the links, then this part of the project will be much more manageable.

Handle no results returned
If no matches are found by the search, include a message in the HTML to tell the user there are no matches.
Note Don't use the built in alert() method here. The "No results" message must be printed to the page somehow.
