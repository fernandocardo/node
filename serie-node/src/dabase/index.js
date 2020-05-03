const mongoose = require('mongoose')

mongoose.set('useUnifiedTopology', true)
mongoose.set('useCreateIndex', true)

mongoose.connect('mongodb://root:example@localhost:27017/noderest', {useNewUrlParser: true })
mongoose.Promise = global.Promise
module.exports = mongoose