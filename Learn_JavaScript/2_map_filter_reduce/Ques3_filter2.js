//Ques1. More than 70 marks and roll number greater than 18

let students = [
    { name: "Nikita", rollNumber: 15, marks: 75 },
    { name: "Mukund", rollNumber: 18, marks: 85 },
    { name: "Muskan", rollNumber: 20, marks: 80 },
    { name: "Satyam", rollNumber: 25, marks: 70 }
]

//Solution:

const studentDetails = students.filter(stud => stud.marks > 70 && rollNumber > 18)
console.log(studentDetails);