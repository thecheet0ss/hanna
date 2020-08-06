const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const Joi = require('joi')
const messages = require('./db/messages')

const app = express()

const port = process.env.PORT || 9000
app.use(morgan('tiny'))
app.use(cors())
app.use(bodyParser.json())


app.get('/', (req, res) => {
  res.json({
    "message" : "Hello World!! 🌞"
  })
})

app.get('/messages', (req, res) => { 
  // res.send("message")
  messages.getAll().then((messages) => {
    res.json(messages)
  })
})

app.post('/messages', (req, res) => {
  message = req.body
  messages.create(req.body).then((message) => {
    // console.log('message : ' + message.message) // undefined
    // console.log('req.body : ' + req.body.subject) // done
    res.json(message)
  }).catch((error) => {
    console.log('error catched in a post function: ')
    res.status(500)
    res.json(error)
  })
})

app.get('/messages/:id', (req, res) => {
  // res.send(req.params.id)
  messages.getOne(req.params.id).then((docs) => {
    console.log(docs)
    res.json(docs)
  }).catch((error) => {
    console.log('error catched in a post function: ')
    res.status(500)
    res.json(error)
  })
})

app.listen(port, () => {
  console.log(`Server is running on ${port}`)
})