import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const UsersSchema = new Schema({
    fullName: String,
    imgPath: String,
    pin: String,
    dob: Date,
    homeAddress: String,
    grossSalary: Number,
    netSalary: Number,
    note: String,
    departmentId: Number,
    roleId: Number,
    createAt: { type: Date, default: Date.now },
    isDisable: {
        type: Boolean,
        default: false
    }
});