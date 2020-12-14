import mongoose from 'mongoose';
import { AttendancesSchema } from '../models/Attendances'
const Attendances = mongoose.model('Attendances', AttendancesSchema);
export const AddNewAttendance = (req, res) => {
    let newAttendance = new Attendances(req.body);
    newAttendance.save((err, attendance) => {
        if (err) {
            res.send(err)
        }
        res.json(attendance)
    })
}
export const GetAttendances = (req, res) => {
    Attendances.find({}, (err, attendance) => {
        if (err) {
            res.send(err)
        }
        res.json(attendance)
    })
}
export const GetAttendanceWithId = (req, res) => {
    Attendances.findById(req.params.attendanceId, (err, attendance) => {
        if (err) {
            res.send(err)
        }
        res.json(attendance)
    })
}
export const UpdateAttendance = (req, res) => {
    Attendances.findOneAndUpdate({ _id: req.params.attendanceId }, req.body, { new: true, useFindAndModify: false }, (err, attendance) => {
        if (err) {
            res.send(err)
        }
        res.json(attendance)
    })
}
export const DeleteAttendance = (req, res) => {
    Attendances.deleteOne({ _id: req.params.attendanceId }, (err, attendance) => {
        if (err) {
            res.send(err)
        }
        res.json({ message: "successfully deleted attendance" })
    })
}