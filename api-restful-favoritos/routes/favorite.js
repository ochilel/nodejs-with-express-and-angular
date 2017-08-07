'use strict'

var express = require('express');
var FavoriteController = require('../controllers/favorite');
var api = express.Router();

api.get('/favorite/:id', FavoriteController.getFavorite);
api.get('/favorites', FavoriteController.getFavorites);
api.post('/favorite', FavoriteController.saveFavorite);
api.put('/favorite/:id', FavoriteController.updateFavorite);
api.delete('/favorite/:id', FavoriteController.deleteFavorite);

module.exports = api;
