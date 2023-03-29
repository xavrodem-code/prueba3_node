const express = require("express");
const router = express.Router();
const { joiPasswordExtendCore } = require("joi-password");
const Joi = require("joi");
const joiPassword = Joi.extend(joiPasswordExtendCore);

const profesores = [
  {
    id: 1,
    nombre: "Javier",
    apellidos: "Rodríguez",
    email: "javier@email.com",
    password: "password1",
  },
  {
    id: 2,
    nombre: "Maria",
    apellidos: "González",
    email: "maria@email.com",
    password: "password2",
  },
  {
    id: 3,
    nombre: "Juan",
    apellidos: "Pérez",
    email: "juan@email.com",
    password: "password3",
  },
  {
    id: 4,
    nombre: "Sofia",
    apellidos: "Hernandez",
    email: "sofia@email.com",
    password: "password4",
  },
  {
    id: 5,
    nombre: "Luis",
    apellidos: "Garcia",
    email: "luis@email.com",
    password: "password5",
  },
];

router.get("/profesores/", (res, req, next) => {
  res.send(profesores);
  next();
});

router.post("/profesores/", (req, res, next) => {
  const schema = Joi.object({
    nombre: Joi.string().min(3).required(),
    apellidos: Joi.string().min(3).required(),
    email: Joi.string().email().min(3).required(),
    password: joiPassword
      .string()
      .minOfSpecialCharacters(1)
      .minOfLowercase(1)
      .minOfUppercase(1)
      .minOfNumeric(1)
      .noWhiteSpaces()
      .required(),
  });
  const { error, value } = schema.validate(req.body);
  if (!error) {
    const profesor = {
      id: profesores.length + 1,
      nombre: req.body.nombre,
      apellidos: req.body.apellidos,
      email: req.body.email,
      password: req.body.password,
    };
    profesores.push(profesor);
    res.send(profesor);
  } else {
    const mensaje = error.details[0].message;
    res.status(400).send(mensaje);
  }
  next();
});
module.exports = profes;
