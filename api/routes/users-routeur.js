// Les imports
const express = require('express');
const router = express.Router();
const userController = require(__basedir + '/controllers/user-controller');

/**
 * 
 */

// Ajout d'un utilisateur
router.post('/', userController.register);
router.post('/login', userController.login);
router.post('/register', userController.register);

// Récupérer un utilisateur
router.get('/login', userController.getUserData);

// On export le routeur pour pouvoir l'utiliser dans l'application
module.exports = router;