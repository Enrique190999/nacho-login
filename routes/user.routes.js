const express = require("express");
const router = express.Router();

// [POST] /api/user Registrarse en la aplicación

router.post("/", (req, res, next) => {
  try {
    return res.status(200).json("/api/user Registrarse en la aplicación");
  } catch (error) {
    return next(error);
  }
});

// [PUT] /api/user Editar datos del perfil del usuario o administrador

router.put("/", (req, res, next) => {
  try {
    return res
      .status(200)
      .json("/api/user Editar datos del perfil del usuario o administrador");
  } catch (error) {
    return next(error);
  }
});

router.delete("/", (req, res, next) => {
  try {
    return res
      .status(200)
      .json("/api/user Borrar un usuario de la base de datos (admin)");
  } catch (error) {
    return next(error);
  }
});

module.exports = router;