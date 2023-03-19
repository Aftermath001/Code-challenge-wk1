# Code-challenge-wk1
This is a code challenge to gauge my skills and abilities.
Challenge 1: Student Grade Generator (Toy Problem)
1. Write that prompts the user to input student marks. The input should be between 0 and 100. Then output the correct grade: 

A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.

This code asks the user to enter their student grades before checking to see if they fall between 0 and 100. The code generates an error message if the input is faulty. If not, the code prints the grade to the console after utilizing a series of if and else if statements to calculate the grade depending on the supplied marks.
 
2. Write a program that takes as input the speed of a car e.g 80. If the speed is less than 70, it should print “Ok”. Otherwise, for every 5 km/s above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points.

For example, if the speed is 80, it should print: “Points: 2”. If the driver gets more than 12 points, the function should print: “License suspended”.
The speed restriction and the distance between decreased points are defined in this code as constants.
The decreased points variable is then initialized to zero.
The next step is to determine if the speed is below or at the speed limit. Then write "Okay" if it is.
Calculate the demerit points if the speed exceeds the speed limit by subtracting the speed limit from the speed, dividing by the distance in kilometers required to earn each demerit point, and rounding down using the Math.floor() function.

3. Write a program whose major task is to calculate an individual’s Net Salary by getting the inputs of basic salary and benefits. Calculate the payee (i.e. Tax), NHIFDeductions, NSSFDeductions, gross salary, and net salary. 
NB: Use KRA, NHIF, and NSSF values provided in the link below.

https://www.aren.co.ke/payroll/taxrates.htmLinks to an external site.  

https://www.kra.go.ke/en/individual/calculate-tax/calculating-tax/payeLinks to an external site.
Personally, I had a difficult time with this question but I tried to solve it to the best of my abilities. Pardon me for the vage explanation but I did not fully solve the question.