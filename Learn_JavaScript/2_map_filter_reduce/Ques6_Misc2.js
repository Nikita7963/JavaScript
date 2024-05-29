//Ques 6. Return total marks for students with marks greater than 75
//after 20 marks have been added to those who scored less than 75


let students = [
    { name: "Nikita", rollNumber: 15, marks: 75 },
    { name: "Mukund", rollNumber: 18, marks: 85 },
    { name: "Muskan", rollNumber: 20, marks: 80 },
    { name: "Sneha", rollNumber: 25, marks: 70 }
]


// Solution: 

const totaMarks = students.map((stu) => {
    if (stu.marks < 75) {
        stu.marks += 20;
    }
    return stu;
}).filter((stu) => stu.marks > 75).reduce((acc, curr) => { return acc + curr.marks},0);

console.log(totaMarks);