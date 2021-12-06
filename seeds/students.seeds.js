// const mongoose = require("mongoose");
// const Student = require("../models/student");
// const { dbConnection } = require("../db/db");

// const students = [
//     {
//         "name": "Pepito",
//         "surname": "Garcia",
//         "email": "pepitogarcia@ejemplo.com",
//         "isTeacher": false,
//     },
//     {
//         "name": "Juanito",
//         "surname": "Rodriguez",
//         "email": "juanitorodriguez@ejemplo.com",
//         "isTeacher": false,
//     },
// ]

// const studentsDocument = students.map(driver => new Student(driver));

// dbConnection
//     .then(async () => {
//         const allStudents = await Student.find();
//         if (allStudents.length > 0) {
//             await Student.collection.drop();
//         }
//     })
//     .catch((error) => console.error(`Error eliminando la coleccion de alumnos ${error}`))
//     .then(async () => {
//         await Student.insertMany(studentsDocument)
//     })
//     .catch((error) => console.error(`Error al insertar en Alumnos ${error}`))
//     .finally(() => mongoose.disconnect());
