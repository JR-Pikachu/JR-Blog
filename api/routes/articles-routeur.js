// Les imports
const express = require('express');
const router = express.Router();
const articleController = require(__basedir + '/controllers/article-controller');

/**
 * Préfixes des routes : "/api/products"
 */
router.route('/')
    // Liste de produits
    .get(articleController.list)
    // Ajout d'un produit
    .post(articleController.add)
    // Modification d'un produit
    .put(articleController.update)
;

// Détail d'un produit
router.route('/:id')
    // Détail d'un produit
    .get(articleController.show)
    // Suppression d'un produit
    .delete(articleController.delete)
;

module.exports = router;