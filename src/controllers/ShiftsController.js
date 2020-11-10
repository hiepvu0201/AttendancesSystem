import mongoose from 'mongoose';
import { ShiftsSchema } from '../models/Shifts'
const Shifts = mongoose.model('Shifts', ShiftsSchema);
export const addNewShift = (req, res) => {
    let NewShift = new Shifts(req.body);
    NewShift.save((err, shift) => {
        if (err) {
            res.send(err)
        }
        res.json(shift)
    })
}
export const getShifts = (req, res) => {
    Shifts.find({}, (err, shift) => {
        if (err) {
            res.send(err)
        }
        res.json(shift)
    })
}
export const getshiftWithId = (req, res) => {
    Shifts.findById(req.params.shiftId, (err, shift) => {
        if (err) {
            res.send(err)
        }
        res.json(shift)
    })
}
export const updateshift = (req, res) => {
    Shifts.findOneAndUpdate({ _id: req.params.shiftId }, req.body, { new: true, useFindAndModify: false }, (err, shift) => {
        if (err) {
            res.send(err)
        }
        res.json(shift)
    })
}
export const deleteshift = (req, res) => {
    Shifts.deleteOne({ _id: req.params.shiftId }, (err, shift) => {
        if (err) {
            res.send(err)
        }
        res.json({ message: "successfully deleted shift" })
    })
}