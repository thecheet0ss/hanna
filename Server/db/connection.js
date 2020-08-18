const monk = require('monk')
// const connectionString = 'mbadmin:qwe123@localhost/messageboard'
const connectionString = 'taskmanager:qwe123@localhost/taskManager'
const db = monk(connectionString)

module.exports = db