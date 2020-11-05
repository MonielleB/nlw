//importar dependencias
const express = require('express');
const path  = require('path');
const pages = require('./pages.js');

//iniciando o express
const server = express();

server
//utilizar body do req
.use(express.urlencoded({ extended: true }))
//utilizando os arquivos estáticos
.use(express.static('public'))

//configurar template engine
.set('views', path.join(__dirname, "views"))
.set('view engine', 'hbs')

//criar rotas da aplicação
.get('/', pages.index)
.get('/orphanage', pages.orphanage)
.get('/orphanages', pages.orphanages)
.get('/create-orphanage', pages.createOrphanage)
.post('/save-orphanage', pages.saveOrphanage)
//.get('/', (req, res) => {
//    console.log(path.join(__dirname, 'views', 'index.html'));
//    console.log(req.query);
//    return res.sendFile(path.join(__dirname, 'views', 'index.html'));
//    return res.render('index')
//});

//ligar o servidor
server.listen(5500);