import mongoose from 'mongoose';
import { UsersSchema } from '../models/Users'
const Users = mongoose.model('Users', UsersSchema);
export const addNewUser = (req, res) => {
    let NewUser = new Users(req.body);
    NewUser.save((err, shift) => {
        if (err) {
            res.send(err)
        }
        res.json(shift)
    })
}
export const getUsers = (req, res) => {
    Users.find({}, (err, shift) => {
        if (err) {
            res.send(err)
        }
        res.json(shift)
    })
}
export const getshiftWithId = (req, res) => {
    Users.findById(req.params.shiftId, (err, shift) => {
        if (err) {
            res.send(err)
        }
        res.json(shift)
    })
}
export const updateshift = (req, res) => {
    Users.findOneAndUpdate({ _id: req.params.shiftId }, req.body, { new: true, useFindAndModify: false }, (err, shift) => {
        if (err) {
            res.send(err)
        }
        res.json(shift)
    })
}
export const deleteshift = (req, res) => {
    Users.deleteOne({ _id: req.params.shiftId }, (err, shift) => {
        if (err) {
            res.send(err)
        }
        res.json({ message: "successfully deleted shift" })
    })
}