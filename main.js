//Importamos Express
const { application } = require("express");
const express = require("express");
//Instanciamos una nueva aplicación
const app = express();
//Configuración (Middlewares)

const alumnos = ["Pedro", "Gabriela", "Andres", "Sonia"];

//Diseño de las rutas
app.get('/', (req, res) => {
    console.log('Entraste a la petición.');
    res.json({ Detalles: alumnos });
});

app.get('/:saludo/:nombre', (req, res) => {
    console.log(req.params);
    res.send(`${req.params.saludo} ${req.params.nombre}`)
});

//! Ejercicio 1
app.get('/mensaje/:nombre/:apellido', (req, res) => {
    console.log(req.params);
    res.json({ mensaje: ` Holaaaa, ${req.params.nombre} ${req.params.apellido}` });
});

//Levantar servidor
app.listen(3001, ()=> {
    console.log("Servidor corriendo en el puerto 3001");
});

