const mongoose = require('mongoose');
const plm = require('passport-local-mongoose')

// DataBase  Connect
// mongoose.connect("mongodb://127.0.0.1:27017/pinterest")
mongoose.connect("mongodb+srv://sanjusharma:8102140440@zomato.da61qzn.mongodb.net/?retryWrites=true&w=majority")

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        
    },
    posts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    }],
    dp: {
        type: String,
        default: 'default.jpg' // Default display picture
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    fullname: {
        type: String,
        required: true
    }
});

userSchema.plugin(plm)

module.exports = mongoose.model('User', userSchema);


