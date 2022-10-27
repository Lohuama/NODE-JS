/*PACOTE É A JUNÇÃO DE UM OU MAIS MODULOS */

const operacoesBasicas = require('../operacoesBasicas');
const areas = require('./areas');

module.exports = {...operacoesBasicas, ...areas};