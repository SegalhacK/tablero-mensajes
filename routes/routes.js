const { Router } = require('express');
const router = Router();
// const { Users } = require('../db'); // IMPORTAMOS LA BASE DE DATOS DESDE EL ARCHIVO JS


// 2. Configuramos las rutas.
function checkLogin(req, res, next) {

    if (req.session.user == null) {
        req.flash('errors', "Debe ingresar para entrar a esta parte del sistema");
        return res.redirect('/login');
    }
    res.locals.user = req.session.user;
    next();
}

function checkAdmin(req, res, next) {

    if (req.session.user.rol != "ADMIN") {
        req.flash('errors', "No tienes permisos de Administrador");
        return res.redirect('/');
    }

    next();

}


// router.get("/", [checkLogin], (req, res) => {
//     const errors = req.flash("errors");
//     const mensajes = req.flash("mensajes");

//     res.render("usuariopro.ejs", { errors, mensajes })
// });


router.get("/admin", [checkLogin, checkAdmin], (req, res) => {


    const errors = req.flash("errors");
    const mensajes = req.flash("mensajes");

    res.render("adminpro.ejs", { errors, mensajes })
});

router.get('/', (req, res) => {
    res.render('index')
})

module.exports = router;
