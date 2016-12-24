var express = require('express');
var router = express.Router();

var newsController = require('../spider/news_spider');
var logisticsController = require('../spider/logistics_spider');
var testController = require('../spider/test');

router.get('/news', newsController.getNews);

router.get('/logistics', logisticsController.getItems);
router.get('/test', testController.test);


module.exports = router;
