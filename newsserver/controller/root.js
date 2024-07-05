const express = require('express');
const router = express.Router();

const sportsService = require('../service/sportsService');




app.get('/', async (req, res) => {
    const data = await sportsService.getApiData('us');
    const result = data.map((object) => {
        if(object.urlToImage !== null && object.urlToImage.endsWith('/')) {
            object.urlToImage = object.urlToImage.slice(0, -1);
            return object;
        } else {
            return object;
        }
    });
    res.render('index', {
        one: "this is one",
        two: "this is two",
        data: result
    });
});
module.exports = router;