import mongoose from 'mongoose'
import { UsersSchema } from '../models/Users.js'
const Users = mongoose.model('Users', UsersSchema)
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'


export const addNewUser = (req, res) => {
    let NewUser = new Users(req.body)
    NewUser.save((err, user) => {
        if (err) {
            res.send(err)
        }
        res.json(user)
    })
}
export const getUsers = (req, res) => {
    Users.find().sort({createdAt:-1}).then((err,user)=>{
        if (err) {
            return res.send(err)
        }
        res.json(user)
    })
}
export const getUserWithId = (req, res) => {
    Users.findById(req.params.userId, (err, user) => {
        if (err) {
            res.send(err)
        }
        res.json(user)
    })
}
export const updateUser = (req, res) => {
    Users.findOneAndUpdate({ _id: req.params.userId }, req.body, { new: true, useFindAndModify: false }, (err, user) => {
        if (err) {
            res.send(err)
        }
        res.json(user)
    })
}
export const deleteUser = (req, res) => {
    try {
        Users.deleteOne({ _id: req.params.userId }, (err, user) => {
            if (err) {
                res.send(err)
            }
            res.json({ message: "successfully deleted user" })
        })
    } catch (err) {
        res.status(500).json({error: err.message})
    }
    
}
export const loginUser= async (req,res)=>{
    try {
        const {email, password} = req.body
        if (!email||!password) {
            return res.status(400).json({msg:"Not all fields have been entered!"})
        }
        const user = await Users.findOne({email:email});
        if(!user){
            return res.status(400).json({ msg: "User has not been registered!" })
        }
        const isMatch = await bcrypt.compare(password,user.password)
        if (!isMatch) {
            return res.status(400).json({msg: "Invalid credentials"})
        }
        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET)
        res.json({
            token,
            user: {
                id: user._id,
                email: user.email,
                fullName:user.fullName,
                job:user.job,
                department:user.department,
                phone:user.phone
            }
        })
    } catch (err) {
        res.status(500).json({error: err.message})
    }
    
}
export const registerUser = async(req, res)=>{
    try{
        let {email, password, passwordCheck, fullName, job, department, phone} = req.body

        //validate
        if(!email||!password||!passwordCheck){
            return res.status(400).json({msg: "Not all fields have been entered!"})
        }
        if(password.length<6){
            return res.status(400).json({mgs: "The password have to be at least 6 characters long!"})
        }
        if(password!==passwordCheck){
            return res.status(400).json({msg: "Enter the same password twice for verification!"})
        }
        const existingUser = await Users.findOne({email: email})
        if (existingUser) {
            return res.status(400).json({msg: "An account with this email has already existed!"})
        }
        if (!fullName) {
            fullName=email
        }
        const salt = await bcrypt.genSalt()
        const passwordHash = await bcrypt.hash(password, salt)
        const newUser = new Users({
            email,
            password: passwordHash,
            fullName,
            job,
            department,
            phone
        })
        const savedUser = await newUser.save()
        res.json(savedUser)
    }
    catch(err){
        res.status(500).json({error: err.message})
    }
}
export const tokenIsValid = async (req, res) =>{
    try{
        const token = req.header("x-auth-token")
        if (!token) {
            return res.json(false)
        }
        const verified = jwt.verify(token, process.env.JWT_SECRET)
        if (!verified) {
            return res.json(false)
        }
        const user = await Users.findById(verified.id)
        if (!user) {
            return res.json(false)
        }
        return res.json(true)
    }
    catch(err){
        res.status(500).json({error: err.message})
    }
}