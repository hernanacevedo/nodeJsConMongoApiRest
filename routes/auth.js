const express = require("express");
const {loginCtrl, registerCtrl} = require("../controllers/auth")
const router = express.Router();
const { validatorRegister, validatorLogin } = require("../validators/auth");


router.post("/register", validatorRegister, registerCtrl);
/**
 * Router register new user
 * @openapi
 * /auth/register:
 *      post:
 *          tags:
 *              - auth
 *          summary: "Register nuevo usuario"
 *          descripcion: "Esta ruta es para registrar un nuevo usuario"
 *          requestBody:
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: "#/components/schemas/authRegister"
 *          responses:
 *                  '201':
 *                      description: "Usuario registrado de manera correcta"
 *                  '403':
 *                      description: "Error por validación de usuario"
 */

router.post("/login", validatorLogin, loginCtrl);

module.exports = router;
