const express = require('express')
const app = express()
const cors = require('cors')
const { urlencoded } = require('express')
const port = process.env.PORT || 3005
const routes = require('./routes/index')
const errorHandler = require('./middlewares/errorHandler')

app.use(cors())
app.use(express.json())
app.use(urlencoded({ extended: true}))

app.use('/', routes)
app.use(errorHandler.handle)

app.listen(port, () => {
    console.log(`bismillah ${port} x`)
})