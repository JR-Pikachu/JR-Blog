// Les imports
const User = require(__basedir + '/model/user').User;
const bcrypt = require('bcrypt');

/**
 * Enregistre l'utilisateur en BDD de données
 * /!\ : Le mot de passe sera hashé avec bcrypt
 * @param req 
 * @param res 
 * @param next 
 */
module.exports.register = (req, res, next) => {
    // Récupération de l'utilisateur
    const userReceived = req.body;

    console.log(req.body);
    console.log('hello');
    console.log(userReceived);

    // On vérifie si le MDP existe
    if(userReceived.password) {
        console.log('IN IF');
        // Hasher le mot de passe
        bcrypt.hash(userReceived.password, 10, (err, hash) => {
            if(err) { next(err); }
            else {
                console.log('userReceived');
                console.log(userReceived);

                userReceived.password = hash;
                console.log(userReceived);
//                userReceived.password = '';


                 // Ajout de l'utilisateur en BDD
                User.create(
                    userReceived,
                    (err, user) => {
                        console.log('err');
                        console.log(err);
                        console.log('user');
                        console.log(user);
                        if(err) { next(err); }
                        else {
                            res.json({result: true});
                        }
                    }
                );
            }
        });
    } else {
        res.json({result: false});
    }
};

/**
 * Vérification du nom d'utilisateur et du mot de passe
 * @param  req 
 * @param  res 
 * @param  nest 
 */
module.exports.login = (req, res, next) => {
    console.log('IN API CALL LOGIN');

    // Récupération des données envoyées
    const datas = req.body;

    console.log('datas = donnée que jenvoie');
    console.log(datas);
    if(datas.username && datas.password) {
        // Recherche de l'utilisateur
        User.findOne(
            {
                'username': datas.username
            }, 
            (err, user) => {
                if(err) { next(err); }
                else{

                    if(user) {
                        // Vérification du mot de passe

                        console.log('user = donnée récup de lutilisateur')
                        console.log(user)
                        bcrypt.compare(datas.password, user.password, (err, resultat) => {
                            if(err) { next(err); }
                            else {
                                if(resultat) { 
                                    // connexion ok - ajout de _id, username, email pour retourner les infos TEST
                                    res.json({
                                        result: true,
                                        user: {
                                            _id: user._id,
                                            username : user.username,
                                            email : user.email    
                                        }
                                    });
                                }
                                else { res.json({result: false}); }
                            }
                        })
                    } else { res.json({result: false}); }
                   
                }
            }
        )
    } else {
        res.json({result: false});
    }
};

module.exports.getUserData = (req, res, next) => {
    console.log('IN API getUserData');

    // Récupération des données envoyées
    const datas = req.body;

    console.log('datas = donnée que jenvoie');
    console.log(datas);
    if(datas.username) {
        // Recherche de l'utilisateur
        User.findOne(
            {
                'username': datas.username
            }, 
            (err, user) => {
                if(err) { next(err); }
                else{

                    if(user) {
                        // Vérification du mot de passe

                        console.log('user = donnée récup de lutilisateur pour stockage')
                        console.log(user)

                    } else { res.json({result: false}); }
                   
                }
            }
        )
    } else {
        res.json({result: false});
    }
};