const express = require("express");
const app = express();
const port = 3000;
const morgan = require("morgan");
const rutasCursos = require("./routes/routes-cursos");

app.use(morgan());
app.use(express.json());
app.use("", require("./routes/rutas-profesor"));
app.use("", require("routes/rutas-cursos"));
app.use("/api/cursos", rutasCursos);

const rutasCursos = require("./routes/routes-cursos");

app.listen(port, () => console.log("Servidor corriendo en el puerto 5000"));
