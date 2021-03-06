import * as mongoose from 'mongoose'

const userSchema = new mongoose.Schema({

  id:{
    type: String
  },  
  _id:{
    type: String
  },
  name: {
    type: String
  },
  email: {
    type: String,
    unique: true
  },
  password: {
    type: String,
    select: false
  }
})
 export const User = mongoose.model('User', userSchema)
