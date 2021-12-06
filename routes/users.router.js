const express = require("express")
const passport = require("passport");
// const Teacher = require("../models/teacher");
const User = require("../models/users");

const route = express.Router()


//Obtener todos los usuarios
route.get("/", (req, res, next) => {
    User.find()
        .then((users) => {
            return res.json(users)
        })
        .catch(error => {
            next(error)
        })
})


//Obtener usuario por id
route.get("/:id", (req, res, next) => {
    const userId = req.params.id
    User.findById(userId)
        .then((user) => {
            if (!user) {
                const error = new Error(`Usuario no existe`)
                error.status = 404
                return next(error)
            }
            res.json(user)
        })
        .catch(error => {
            next(error)
        })
})



//Obtener profesores
route.get("/profesores/todos", (req, res, next) => {
    User.find()
        .then((users) => {
            const profesores = users.filter(user => user.isTeacher == true)
            return res.json(profesores)
        })
        .catch(error => {
            next(error)
        })
})




//Obtener alumnos
route.get("/alumnos/todos", (req, res, next) => {
    User.find()
        .then((users) => {
            const alumnos = users.filter(user => user.isTeacher == false)
            return res.json(alumnos)
        })
        .catch(error => {
            next(error)
        })
})



//Obtener alumnos por asignaturas
route.get("/alumnos/:asignatura", (req, res, next) => {
    const subject = req.params.asignatura
    User.find()
    .then((users) => {
        const usuariosSeleccionados = users.filter(
            user => user.subjects.includes(subject) && user.isTeacher == false
            )
        return res.json(usuariosSeleccionados)
    })
    .catch(error => {
        next(error)
    })
})



//Obtener profesores por asignaturas
route.get("/profesores/:asignatura", (req, res, next) => {
    const subject = req.params.asignatura
    User.find()
    .then((users) => {
        const usuariosSeleccionados = users.filter(
            user => user.subjects.includes(subject) && user.isTeacher == true
            )
        return res.json(usuariosSeleccionados)
    })
    .catch(error => {
        next(error)
    })
})



//Registro
route.post("/register", (req, res, next) => {
    passport.authenticate("register", (error, user) => {
        if (error) {
            return next(error)
        }
        req.logIn(user, (error) => {
            if (error) {
                return next(error)
            }
            return res.status(201).json(user)
        })
    })(req);
});


//Editar usuario
route.put("/:id", (req, res, next) => {
    const userId = req.params.id
    const newUser = new User(req.body)
    newUser._id = userId
    User.findByIdAndUpdate(userId, newUser, { new: true })
        .then((userUpdated) => {
            return res.status(200).json(`Usuario actualizado ${userUpdated}`)
        })
        .catch(error => {
            return next(error)
        })
})




//LogIn
route.post("/login", (req, res, next) => {
    passport.authenticate("login", (error, user) => {
        if (error) {
            return next(error)
        }
        req.logIn(user, (error) => {
            if (error) {
                next(error)
            }
            return res.status(200).json(user)
        })
    })(req);
});




//LogOut
route.post("/logout", (req, res, next) => {
    if (req.user) {
        req.logout();
        req.session.destroy(() => {
            res.clearCookie("connect.sid");
            return res.status(200).json(`Sesion cerrada`)
        })
    }
    else {
        res.sendStatus(304);
    }
})



module.exports = route