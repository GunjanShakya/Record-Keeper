import mongoose from "mongoose";

import autoIncrement from 'mongoose-auto-increment'
const userSchema= mongoose.Schema({
name:String,
username: String,
Email: String,
Phone: String
})

autoIncrement.initialize(mongoose.connection)
userSchema.plugin(autoIncrement.plugin,'user')

const user= mongoose.model('user', userSchema)    // user is the name of collection and agar schema match hoga tabhi data validate hoga
export default user;