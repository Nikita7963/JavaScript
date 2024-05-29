//Ques2. Return only details of those students who scored more than 70

let students = [
    { name: "Nikita", rollNumber: 15, marks: 75 },
    { name: "Mukund", rollNumber: 18, marks: 85 },
    { name: "Muskan", rollNumber: 20, marks: 80 },
    { name: "Satyam", rollNumber: 25, marks: 70 }
]

//Solution:
const studentDetails = students.filter((stud)=>{           // stud => stud.marks > 70
    if(stud.marks >70){
        return stud;
    }
})

console.log(studentDetails);
