// Les imports
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

// Création du schéma
const articleSchema = new Schema({
    title: {
        type: String,
        required: 'Le titre de l\'article doit être renseigné',
        unique: true
    },
    content: {
        type: String,
        required: 'Le contenu de l\'article doit être rempli'
    },
    createdAt: String,
    updatedAt: String,
    state: Number,
    author: String
});

// Création du modèle
const Article = mongoose.model('Article', articleSchema);

module.exports.Article = Article;
