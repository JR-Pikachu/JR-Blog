// Les imports
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

// Création du schéma
const articleSchema = new Schema({
    name: {
        type: String,
        required: 'Le nom du produit doit être renseigné',
        unique: true
    },
    introduction: {
        type: String,
        required: 'Introduction obligatoire'
    },
    price: Number,
    nbViews: Number,
    isPublished: Boolean,
    createdAt: {
        type: Date,
        required: 'Date de création obligatoire'
    },
    updatedAt: Date,
    publisher: {
        type: String,
        required: 'Publicateur obligatoire'
    }
});

// Création du modèle
const Article = mongoose.model('Article', articleSchema);

module.exports.Article = Article;