// Les imports
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Définition du schéma
const userSchema = new Schema({
    username: {
        type: String,
        required: `Le nom d'utilisateur est obligatoire`,
        unique: true
    },
    email: {
        type: String,
        required: `L'email' est obligatoire`,
        unique: true
    },
    password: {
        type: String,
        required: `Le mot de passe est obligatoire`
    },
    firstName: String,
    lastName: String
});

// Définition du modèle
const User = mongoose.model('User', userSchema);

module.exports.User = User;