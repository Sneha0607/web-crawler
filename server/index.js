const express = require("express");
const http = require("http");
const app = express();
const server = http.createServer(app);
const axios = require('axios')
const cheerio = require('cheerio')
const cors = require('cors')
app.use(cors())

const PORT = process.env.PORT || 5000;

const url = 'https://www.india.gov.in/topics/agriculture'

app.get('/', function (req, res) {
    res.json('This is my webscraper')
})

app.get('/results', (req, res) => {
    axios(url)
        .then(response => {
            const html = response.data
            //console.log(html)
            const $ = cheerio.load(html)
            const articles = []

            $('.field-content', html).each(function () { //<-- cannot be a function expression
                const title = $(this).text()
                const url = $(this).find('a').attr('href')
                articles.push({
                    title,
                    url
                })
            })
            res.json(articles)
        }).catch(err => console.log(err))

})

server.listen(PORT, () => console.log(`Server listening on port ${PORT}`));