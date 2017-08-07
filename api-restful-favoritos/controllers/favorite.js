'use strict'

var Favorite = require('../models/favorite');

function getFavorite(req, res) {
    var favoriteId = req.params.id;

    Favorite.findById(favoriteId, function(err, favorite){
        if(err){
            res.status(500).send({message: 'Error al devolver el favorito.', success: false});
        }else{
            if (!favorite){
                res.status(404).send({message: 'El favorito no existe.', success: false});
            }else{
                res.status(200).send({favorito: favorite, success: true});
            }
        }
    })
}

function getFavorites(req, res) {
    Favorite.find({}).sort('-_id').exec((err, favorites) => {
        if(err){
            res.status(500).send({message: 'Error al listar los favoritos.', success: false});
        }else{
            if (!favorites){
                res.status(404).send({message: 'No hay favoritos.', success: false});
            }else{
                res.status(200).send({favoritos: favorites, success: true});
            }
        }
    })
}

function saveFavorite(req, res) {
    var favorite = new Favorite()
    var params = req.body;

    favorite.title = params.title;
    favorite.description = params.description;
    favorite.url = params.url;

    favorite.save((err, favoriteStored) => {
        if (err){
            res.status(500).send({message: 'Error al guardar el favorito', success: false});
        }else{
            res.status(200).send({message: 'success', result: true, data: favoriteStored});
        }
    })
}

function updateFavorite(req, res) {
    var favoriteId = req.params.id;
    var update = req.body;

    Favorite.findByIdAndUpdate(favoriteId, update, (err, favoriteUpdate) => {
        if (err){
            res.status(500).send({message: 'Error al actualizar el favorito.', success: false});
        }else{
            res.status(200).send({message: 'success', result: true, data: favoriteUpdate});
        }
    });
}

function deleteFavorite(req, res) {
    var favoriteId = req.params.id;

    Favorite.findById(favoriteId, function(err, favorite){
        if(err){
            res.status(500).send({message: 'Error al devolver el favorito.', success: false});
        }else{
            if (!favorite){
            res.status(404).send({message: 'El favorito no existe.', success: false});
            }else{
                favorite.remove(err => {
                    if (err){
                        res.status(500).send({message: 'Error al eliminar el favorito.', success: false});
                    }else{
                        res.status(200).send({message: 'El favorito se ha eliminado con exito.', success: true});
                    }
                })
            }
        }
    });
}

module.exports = {
    getFavorite,
    getFavorites,
    saveFavorite,
    updateFavorite,
    deleteFavorite
}