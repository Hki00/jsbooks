const axios = require('axios').default;

const API_KEY = '3f7142544c5b444782d34874d56f7592';
const obj = {
    getLog: (str1) => {
        console.log(str1);
    },
    getApiData: async (countryCode, category = 'business') => {
        return await axios.get(`https://newsapi.org/v2/top-headlines?country=${countryCode}&category=${category}&apiKey=${API_KEY}`)
                        .then(function(response) {
                            console.log(response.data.articles);
                            return response.data.articles;
                        });
    }
};

module.exports = obj;