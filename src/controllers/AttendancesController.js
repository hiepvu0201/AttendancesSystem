import mongoose from 'mongoose';
import { AttendancesSchema } from '../models/Attendances'
const Attendances = mongoose.model('Attendances', AttendancesSchema);
export const addNewAttendance = (req, res) => {
    let newAttendance = new Attendances(req.body);
    newAttendance.save((err, attendance) => {
        if (err) {
            res.send(err)
        }
        res.json(attendance)
    })
}
export const getAttendances = (req, res) => {
    Attendances.find({}, (err, attendance) => {
        if (err) {
            res.send(err)
        }
        res.json(attendance)
    })
}
export const getAttendanceWithId = (req, res) => {
    Attendances.findById(req.params.attendanceId, (err, attendance) => {
        if (err) {
            res.send(err)
        }
        res.json(attendance)
    })
}
export const updateAttendance = (req, res) => {
    Attendances.findOneAndUpdate({ _id: req.params.attendanceId }, req.body, { new: true, useFindAndModify: false }, (err, attendance) => {
        if (err) {
            res.send(err)
        }
        res.json(attendance)
    })
}
export const deleteAttendance = (req, res) => {
    Attendances.deleteOne({ _id: req.params.attendanceId }, (err, attendance) => {
        if (err) {
            res.send(err)
        }
        res.json({ message: "successfully deleted attendance" })
    })
}