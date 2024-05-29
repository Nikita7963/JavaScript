//Ques1. Return only name of students in Capital

let students = [
    { name: "Nikita", rollNumber: 15, marks: 75 },
    { name: "Mukund", rollNumber: 18, marks: 85 },
    { name: "Muskan", rollNumber: 20, marks: 80 },
    { name: "Satyam", rollNumber: 25, marks: 70 }
]


//Solution:
//It can be solved using for, for-each, map:
const studentName = students.map((stu) => {    // stu => stu.name.toUpperCase()
    return stu.name.toUpperCase();
})

console.log(studentName);

