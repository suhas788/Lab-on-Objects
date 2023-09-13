// Challenge 1.1:
// Step 1: Create an object for storing your profile information. The object name can be "studentProfile". below are the keys which are to be added to the object, please add your values for the same:
// studentName,
// studentAge,
// cohortName,
// location,
//hobbies.

// Step 2: Add more then one hobby in the student object.
//Hint: Use Arrays


const studentProfile = {
  studentName: "Your Name",
  studentAge: 25, // Your age
  cohortName: "Your Cohort",
  location: "Your Location",
  hobbies: ["Hobby 1", "Hobby 2", "Hobby 3"] // Add your hobbies as an array
};

studentProfile.hobbies.push("Hobby 4", "Hobby 5");

studentProfile.studentAge = 26; // Update the age

console.log(studentProfile);

// Challenge 1.2: Access the studentName value of the object "studentProfile" using dot "." notation and print the same in console.
console.log(studentProfile.studentName);

//Challenge 1.3: Access the cohortName property of the object using Bracket notation ([]).
console.log(studentProfile['cohortName']);

//Challenge 2.1:Create an object using the constructor function for storing the book information. The object name can be "Book". Include the following values .
//title
//author

function Book(title, author) {
  this.title = title;
  this.author = author;
}

const myBook = new Book("The Great Gatsby", "F. Scott Fitzgerald");

console.log("Title:", myBook.title);
console.log("Author:", myBook.author);

//Challenge 2.2: Access the title property of the object "Book" and print the same in console.
console.log(myBook.title);
