const express = require('express');

const router = express.Router();

const logger = require('../config/winston.js');

/* GET home page. */
router.get('/', (req, res) => {
  /*const myJson = {
    one: {
      two: {
        three: 3,
      },
    },
  };*/
  logger.info('Render Title page');
  res.render('index', { title: 'Express' });
});

module.exports = router;
