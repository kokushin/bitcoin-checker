const express = require('express')
const cors = require('cors')
const axios = require('axios')
const app = express()

app.use(cors())

app.get('/rate', (req, res, next) => {
  axios.get('https://coincheck.com/api/rate/btc_jpy')
    .then((response) => {
      res.send(response.data.rate)
    })
    .catch((error) => {
      console.log(error)
    })
})

app.listen(7777, () => {
  console.log('CORS-enabled web server listening on port 7777')
})
