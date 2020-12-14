import mongoose from 'mongoose';
import { UsersSchema } from '../models/Users'
const Users = mongoose.model('Users', UsersSchema);
export const addNewUser = (req, res) => {
    let NewUser = new Users(req.body);
    NewUser.save((err, user) => {
        if (err) {
            res.send(err)
        }
        res.json(user)
    })
}
export const getUsers = (req, res) => {
    Users.find({}, (err, user) => {
        if (err) {
            res.send(err)
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
    Users.deleteOne({ _id: req.params.userId }, (err, user) => {
        if (err) {
            res.send(err)
        }
        res.json({ message: "successfully deleted user" })
    })
}