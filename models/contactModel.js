const mongoose = require('mongoose')

const contactSchema = mongoose.Schema({
    user_id :{
        type: mongoose.Schema.Types.ObjectId,
        requires: true,
        ref: "User",
    },

    name:{
        type:String,
        required:[true, 'Please add the contact name']
    },
    
    email :{
        type:String,
        required:[true, 'Please add the contact email address']
    },

    phone:{
    type:String,
        required:[true, 'Please add the Phone Number']
    },

},
{
    timestamp : true,
}
)

module.exports = mongoose.model("Contact", contactSchema)