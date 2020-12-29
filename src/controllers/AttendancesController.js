import mongoose from 'mongoose';
import { AttendancesSchema } from '../models/Attendances.js'
const Attendances = mongoose.model('Attendances', AttendancesSchema);
import {UsersSchema} from '../models/Users.js'
const Users = mongoose.model('Users', UsersSchema)

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
    Attendances.find({}).populate({
        path:"user"
    }).then((value)=>res.json(value)).catch(error=>res.send(error))
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
export const checkIn = (req, res) => {
    let newAttendance = new Attendances(req.body);
    Attendances.findByDateCheck(req.params.dateCheck, (err, attendance) =>{
        if(!err){
            res.send("User has already checked in!");
        }
    });
    newAttendance.save((err, attendance) => {
        if (err) {
          res.send(err);
        }
        res.json(attendance);
      });
}
export const checkOut = (req, res) => {
    // Attendances.findOneAndUpdate({
    //     _id: req.params.attendanceId
    // },
    // req.body,
    // {
    //     new: true, useFindAndModify: false, 
    // },
    // (err, attendance) => {
    //     if(err){
    //         res.send(err);
    //     }
    //     res.json(attendance);
    // });
    Attendances.findByIdAndUpdate(req.params.id,{
        checkOut:Date.now()
    },{new: true, useFindAndModify: false, }).then(result=>{
        
        res.json(result);
    }).catch(error=>console.log(error))
};