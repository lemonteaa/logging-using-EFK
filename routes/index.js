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

  let q = req.query.q || 'none';

  logger.info('Render Title page', { q: q });
  res.render('index', { title: 'Express', question: q });
});

module.exports = router;
