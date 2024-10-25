let fruits = ['pomme', 'banane', 'orange', 'fraise', 'mangue'];

const student = 
{
name : "Marie",
age : 20,
courses : [],
grade : 'A'
}

student.age = 21;
student.courses.push('Math');
student.courses.push('Physics');
student.courses.push('Chemistry');
const indexPhysics = student.courses.indexOf('Physics')
const indexChemistry = student.courses.indexOf('Chemistry')
let SlicedCourses = student.courses.slice(0,2)


console.log(student)
console.log("Indice cours Physique :",indexPhysics)
console.log("Indice cours Chimie :",indexChemistry)
console.log("2 premiers cours :", SlicedCourses)