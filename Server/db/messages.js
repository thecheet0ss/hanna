const Joi = require('joi')
const db = require('./connection')

const shcema = Joi.object().keys({
  username: Joi.string().alphanum().required(),
  subject: Joi.string().required(),
  message: Joi.string().max(500).required(),
  imageURL: Joi.string().uri({
    scheme: [
      'http',
      'https',
    ]
  })
})

const messages = db.get('messages')

function getAll() {
  return messages.find()
}

function create(message) {
  if (!message.username) {
    message.username = 'Anonymous'
  }
  const result = shcema.validate(message)
  if(result.error == null) {
    result.created = new Date()
    return messages.insert(result)
  } else {
    return Promise.reject(result.error)
  }
}

function getOne(messageId) {
  return messages.findOne({_id: messageId})
}

module.exports = {
  create,
  getAll,
  getOne,
}