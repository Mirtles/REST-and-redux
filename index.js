const express = require('express')
const db = require('./db')
const Event = require('./event/model')

const eventRouter = require('./event/router')

const cors = require('cors')
const corsMiddleware = cors()

const bodyParser = require('body-parser')
const parserMiddleware = bodyParser.json()

const app = express()
const port = 4000

app.use(corsMiddleware)
app.use(parserMiddleware)
app.use(eventRouter)

app.listen(port, () => { console.table({ "Awesome!": `Events server listening on port ${port}!` }) })
