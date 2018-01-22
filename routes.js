var crypto = require('crypto');
var express = require('express');
var sql = require('mysql');

var dbConfig = {
    server:'localhost',
    database:'max_DB',
    user:'maxapp',
    password:'bowers321',
    port:3306,
    multipleStatements: false // prevent certain types of SQL injection
};

// additional control and query functions
//var controller = require('./controllers/controller');

// send 404 response:
function send404Response(res){
    res.render('error.html');
};

module.exports = function(app) {
	
    app.use('/static', express.static('./static'));
    app.get('/', function (req, res) {
        res.render('About.html', {results: null, attrs: [] });
    });
	
	app.get('/projects', function(req, res) {
		res.render('Projects.html');
	});
	
	app.get('/resume', function(req, res) {
		res.render('Resume.html');
	});
	
	app.get('/guides', function(req, res) {
		res.render('Guides.html');
	});
	
	app.get('/blog', function(req, res) {
		res.render('Blog.html');
	});
	
	app.get('/about', function(req, res) {
		res.render('about.html');
	});
}