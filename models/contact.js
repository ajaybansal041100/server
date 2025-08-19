const mongoose = require('mongoose')
const conatctSchema = new mongoose.Schema({
    name:{
        type:String
    }
})

const ContactModel = mongoose.model('Contact',conatctSchema)
module.exports = ContactModel