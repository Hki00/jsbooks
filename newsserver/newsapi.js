// const express = require('express');
// const app = express();
// const axios = require('axios').default;
// const domesticRoute = require('./controller/domestic');
// const rootRoute = require('./controller/root');
// const testRoute = require('./controller/test');


// app.use('/test', testRoute);
// app.use('/domestic', domesticRoute);
// app.use('/', rootRoute);

// const API_KEY = '3f7142544c5b444782d34874d56f7592';
// const getApiData = async (countryCode, category = 'business') => {
//     return await axios.get(`https://newsapi.org/v2/top-headlines?country=${countryCode}&category=${category}&apiKey=${API_KEY}`)
//                     .then(function(response) {
//                         console.log(response.data.articles);
//                         return response.data.articles;
//                     });
// }


// const port = 8000;
// app.listen(port, () => {
//     console.log(`server listening on port ${port}`);
// })

const express = require('express');
const app = express();

const testRoute = require('./controller/test');
const domesticRoute = require('./controller/domestic');
const rootRoute = require('./controller/root');

app.use('/test', testRoute);
app.use('/domestic', domesticRoute);
app.use('/', rootRoute);

app.set('view engine', 'ejs');
app.set('views', './views');

const port = 8000;
app.listen(port, () => {
    console.log(`server listening on port ${port}`);
})