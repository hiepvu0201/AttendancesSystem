import mongoose from 'mongoose';
import { PayslipsSchema } from '../models/Payslips.js'
const Payslips = mongoose.model('Payslips', PayslipsSchema);

export const addNewPayslip = (req, res) => {
    let newPayslip = new Payslips(req.body);
    newPayslip.save((err, payslip) => {
        if (err) {
            res.send(err)
        }
        res.json(payslip)
    })
}
export const getPayslips = (req, res) => {
    Payslips.find({}, (err, payslip) => {
        if (err) {
            res.send(err)
        }
        res.json(payslip)
    })
}
export const getPayslipWithId = (req, res) => {
    Payslips.findById(req.params.departmentId, (err, payslip) => {
        if (err) {
            res.send(err)
        }
        res.json(payslip)
    })
}
export const updatePayslip = (req, res) => {
    Payslips.findOneAndUpdate({ _id: req.params.payslipId }, req.body, { new: true, useFindAndModify: false }, (err, payslip) => {
        if (err) {
            res.send(err)
        }
        res.json(payslip)
    })
}
export const deletePayslip = (req, res) => {
    Payslips.deleteOne({ _id: req.params.payslipId }, (err, payslip) => {
        if (err) {
            res.send(err)
        }
        res.json({ message: "successfully deleted payslip" })
    })
}