const express = require('express');
const app = express();
const axios = require('axios').default;

const API_KEY = '3f7142544c5b444782d34874d56f7592';
const getApiData = async (countryCode) => {
    return await axios.get(`https://newsapi.org/v2/top-headlines?country=${countryCode}&category=business&apiKey=${API_KEY}`)
                    .then(function(response) {
                        console.log(response.data.articles);
                        return response.data.articles;
                    });
}

app.get('/', async (req, res) => {
    const data = await getApiData('us');
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



app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/domestic', async (req, res) => {
    const data = await getApiData('kr');
    const result = data.map((object) => {
        if(object.urlToImage !== null && object.urlToImage.endsWith('/')) {
            object.urlToImage = object.urlToImage.slice(0, -1);
            return object;
        } else {
            return object;
        }
    });
    res.render('domestic', {
        one: "this is one",
        two: "this is two",
        data: result
    });
});



const port = 8001;
app.listen(port, () => {
    console.log(`server listening on port ${port}`);
})