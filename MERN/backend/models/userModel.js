const mongoose = require('mongoose')
const bcrypt = require('bcrypt');
const validator = require('validator');

const Schema = mongoose.Schema

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

userSchema.statics.signup = async function (email, password) {

    if(!email || !password){
        throw Error('All fields are require')
    }
    if(!validator.isEmail(email)){
        throw Error('Email is not valid')
    }
    if(!validator.isStrongPassword(password)){
        throw Error('Password is not strong enough')
    }

    const exsist = await this.findOne({ email })
    if (exsist) {
        throw Error('Email already existed')
    }
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    const user = await this.create({ email, password: hash })
    return user

}

userSchema.statics.login= async function (email, password) {

    if(!email || !password){
        throw Error('All fields are require')
    }
    const user = await this.findOne({email});
    if(!user){
        throw Error('No such Email are found')
    }

    const match = await bcrypt.compare(password,user.password);

    if(!match){
        throw Error('You password is incorrect');
    }
    return user
}


module.exports = mongoose.model('User', userSchema)