// Ques4. Sum of marks of all the students 

let students = [
    { name: "Nikita", rollNumber: 15, marks: 75 },
    { name: "Mukund", rollNumber: 18, marks: 85 },
    { name: "Muskan", rollNumber: 20, marks: 80 },
    { name: "Satyam", rollNumber: 25, marks: 70 }
]

//Solution:
const sumOfMarks = students.reduce((acc,curr,i,arr)=>{
    return acc+curr.marks;
},0);

console.log(sumOfMarks);
