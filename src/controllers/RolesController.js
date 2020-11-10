import mongoose from 'mongoose';
import { RolesSchema } from '../models/Roles'
const Roles = mongoose.model('Roles', RolesSchema);
export const addNewRole = (req, res) => {
    let newRole = new Roles(req.body);
    newRole.save((err, role) => {
        if (err) {
            res.send(err)
        }
        res.json(role)
    })
}
export const getRoles = (req, res) => {
    Roles.find({}, (err, role) => {
        if (err) {
            res.send(err)
        }
        res.json(role)
    })
}
export const getRoleWithId = (req, res) => {
    Roles.findById(req.params.roleId, (err, role) => {
        if (err) {
            res.send(err)
        }
        res.json(role)
    })
}
export const updateRole = (req, res) => {
    Roles.findOneAndUpdate({ _id: req.params.roleId }, req.body, { new: true, useFindAndModify: false }, (err, role) => {
        if (err) {
            res.send(err)
        }
        res.json(role)
    })
}
export const deleteRole = (req, res) => {
    Roles.deleteOne({ _id: req.params.roleId }, (err, role) => {
        if (err) {
            res.send(err)
        }
        res.json({ message: "successfully deleted role" })
    })
}