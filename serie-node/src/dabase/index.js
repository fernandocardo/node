const mongoose = require('mongoose')

mongoose.connect('mongodb://root:example@localhost:27017/noderest', {useNewUrlParser: true})
mongoose.Promise = global.Promise
module.exports = mongoose