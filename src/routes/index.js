const express = require('express');
const router = express.Router();

//Routes
router.get('/', (req, res) => {
  //res.sendFile(path.join(__dirname, '/views/index.html'));
  res.render('index.ejs', { tittle: 'First website' });
});

router.get('/contact', (req, res) => {
  res.render('contact.ejs', { tittle: 'Contact', name: 'Diego' });
});

router.get('/about', (req, res) => {
  res.render('about.ejs', { tittle: 'About'});
});

//Export
module.exports = router;
