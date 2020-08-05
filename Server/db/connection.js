const monk = require('monk')
const connectionString = 'mbadmin:qwe123@192.168.0.3/messageboard'
const db = monk(connectionString)

module.exports = db