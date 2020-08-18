const db = require('./connection')

const Joi = require('joi')

// const shcema = Joi.object().keys({
//   username: Joi.string().alphanum().required(),
//   subject: Joi.string().required(),
//   message: Joi.string().max(500).required(),
//   imageURL: Joi.string().uri({
//     scheme: [
//       'http',
//       'https',
//     ]
//   })
// })

const schema = Joi.object().keys({
  clientName: Joi.string().required()
})


const tasks = db.get('tasks')

function getAll() {
  return tasks.find()
}

function create(task) {
  // if (!message.username) {
  //   message.username = 'Anonymous'
  // }
  // const result = shcema.validate(message)
  // if(result.error == null) {
  //   result.created = new Date()
  //   return messages.insert(result)
  // } else {
  //   return Promise.reject(result.error)
  // }
  task.createdAt = new Date()

  return tasks.insert(task)
}

function getOne(taskId) {
  console.log(taskId)
  return tasks.findOne({_id: taskId})
}

module.exports = {
  getAll,
  create,
  getOne,
}