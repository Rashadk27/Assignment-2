var express = require('express');
var router = express.Router();

/* GET home page (single-page) */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* Optional: redirect other routes to '/' with anchors */
router.get('/home', (req, res) => res.redirect('/#home'));
router.get('/about', (req, res) => res.redirect('/#about'));
router.get('/projects', (req, res) => res.redirect('/#projects'));
router.get('/contact', (req, res) => res.redirect('/#contact'));

module.exports = router;
