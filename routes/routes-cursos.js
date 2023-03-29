const express = require("express");
const router = require("router");
const express = require("express");
const users = require("../usuarios");
const Joi = require("joi");
app.use(express.json());
router.get("/usuarios", (req, res, next) => {
  res.send(users);
  next();
});

router.post("/bootcamp", (req, res, next) => {
  console.Console(req.body);
  const schema = Joi.object({
    bootcamp: Join.string().min(3).required(),
  });
  if (!req.body.curso || req.body.curso.length < 3) {
    res
      .status(400) //! 400: Bad Request
      .send("Se requiere un nombre de curso y que tenga más de 3 caracteres");
    return;
  }
  if (validacion.error) {
    console.log(validacion.error.details[0].message);
    res
      .status(400) //! 400: Bad Request
      .send(validacion.error.details[0].message);
    return;
  }
});
