let express = require('express');
let router = express.Router();
let models = require('../../../models/index');
let randomstring = require("randomstring");

/* GET home page. */
router.get('/', function(req, res, next) {
  models.Item.findAll({}).then(function(items) {
    res.json(items);
  });
});

router.post('/search_item', function(req, res, next) {
  let search_hash = JSON.parse(JSON.stringify(req.body));
  let search_text = search_hash.search_text;

  models.Item.findAll({ where: { name: {$like: "%" + search_text + "%"}}}).then(function(items) {
    res.json(items);
  });
});

router.get('/generate_random_item', function(req, res, next) {
  let randomName = randomstring.generate({
    length: 10,
    charset: 'alphabetic'
  });
  let randomPrice = randomstring.generate({
    length: 3,
    charset: 'numeric'
  });

  models.Item.create({
    category: 'Electronics',
    price: randomPrice,
    name: randomName,
    stocked: false
  }).then(function(item) {
    res.json(item);
  });
});

module.exports = router;
