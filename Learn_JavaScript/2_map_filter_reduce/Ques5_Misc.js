//Ques 5. Return only name of students who scored more than 70

let students = [
    { name: "Nikita", rollNumber: 15, marks: 75 },
    { name: "Mukund", rollNumber: 18, marks: 85 },
    { name: "Muskan", rollNumber: 20, marks: 80 },
    { name: "Satyam", rollNumber: 25, marks: 70 }
]


//Solution:

const names = students.filter((stu)=>stu.marks>70).map((stu)=>stu.name);
console.log(names);