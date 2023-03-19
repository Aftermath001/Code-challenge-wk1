// Prompt the user to enter student marks
let marks = prompt("Enter student marks:");
let Grades;
// Check if the input is valid
if (marks < 0 || marks > 100) {
  console.log("Invalid input!");
} else {
  // Determine the grade based on the input marks

  if (marks >= 80) {
    Grades = "A";
  } else if (marks >= 60 && marks < 80) {
    Grades = "B";
  } else if (marks >= 50 && marks < 60) {
    Grades = "C";
  } else if (marks >= 40 && marks < 50) {
    Grades = "D";
  } else {
    Grades = "E";
  }
  
}
//Output the results
console.log(grade);

    
function calculatePoints(speed) {
  //Define the speed limit and the number of kilometers per reduced point as constants.
  const speedLimit = 70;
  const kmPerreducePoint = 5;
  //Initialize the reduce points variable to zero.
  let reducePoints = 0;
//Check if the speed is less than or equal to the speed limit. If it is, print "Okay".
  if (speed <= speedLimit) {
    console.log("Okay");
  } else {
    demeritPoints = Math.floor((speed - speedLimit) / kmPerreducePoint);
    console.log(`Points: ${reducePoints}`);
    if (demeritPoints >= 12) {
      console.log("License suspended");
    }
  }
}

calculateDemeritPoints(80);

//Program to calculate Net Salary

//Get the inputs of Basic Salary and Benefits
let basicSalary = prompt("Enter Basic Salary: ");
let benefits = prompt("Enter Benefits: ");

//Calculate Gross Salary
let grossSalary = basicSalary + benefits;

//Calculate PAYE Tax
let tax = 0;
if(grossSalary <= 24000) {
  tax = 0;
} else if(grossSalary > 24000 && grossSalary <= 40000) {
  tax = 0.1*(grossSalary - 24000);
} else if(grossSalary > 40000 && grossSalary <= 80000) {
  tax = 1600 + 0.2*(grossSalary - 40000);
} else if(grossSalary > 80000 && grossSalary <= 120000) {
  tax = 7600 + 0.25*(grossSalary - 80000);
} else if(grossSalary > 120000 && grossSalary <= 160000) {
  tax = 13600 + 0.3*(grossSalary - 120000);
} else if(grossSalary > 160000 && grossSalary <= 200000) {
  tax = 22400 + 0.32*(grossSalary - 160000);
} else {
  tax = 31200 + 0.34*(grossSalary - 200000);
}

