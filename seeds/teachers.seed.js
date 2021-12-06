// const mongoose = require("mongoose");
// const Teacher = require("../models/teacher");
// const { dbConnection } = require("../db/db");

// const teachers = [
//     {
//         "name": "Juan Antonio",
//         "surname": "Martinez",
//         "email": "juananotnio@ejemplo.com",
//         "isTeacher": true
//     },
//     {
//         "name": "María",
//         "surname": "Perez",
//         "email": "mariaperez@gmail.com",
//         "isTeacher": true
//     },
// ];

// const teachersDocuments =  teachers.map(teacher => new Teacher(teacher));

// dbConnection
//     .then(async () => {
//         const allTeachers = await Teacher.find();
//         if (allTeachers.length > 0) {
//             await Teacher.collection.drop();
//         }
//     })
//     .catch((error) => console.error(`Error eliminando la coleccion de profesores ${error}`))
//     .then(async () => {
//         await Teacher.insertMany(teachersDocuments)
//     })
//     .catch((error) => console.error(`Error al insertar en profesores ${error}`))
//     .finally(() => mongoose.disconnect());