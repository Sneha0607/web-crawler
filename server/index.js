const express = require("express");
const http = require("http");
const app = express();
const server = http.createServer(app);
const axios = require('axios')
const cheerio = require('cheerio')
const cors = require('cors')
app.use(cors())

const PORT = process.env.PORT || 5000;

const url1 = 'https://www.india.gov.in/topics/agriculture'
const url2 = 'https://www.india.gov.in/topics/education'
const url3 = 'https://www.india.gov.in/topics/science-technology'

app.get('/', function (req, res) {
    res.json('This is my webscraper')
})

app.get('/agriculture', (req, res) => {
    axios(url1)
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

app.get('/education', (req, res) => {
    axios(url2)
        .then(response => {
            const html = response.data
            const $ = cheerio.load(html)
            const articles = []

            $('.item-list', html).each(function () { //<-- cannot be a function expression
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