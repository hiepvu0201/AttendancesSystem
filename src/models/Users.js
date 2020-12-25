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
    departments: [{type: Schema.Types.ObjectId, ref: 'Departments'}],
    roles: [{type: Schema.Types.ObjectId, ref: 'Roles'}],
    shifts: [{type: Schema.Types.ObjectId, ref: 'Shifts'}],
    isDisable: {
        type: Boolean,
        default: false
    }
},
{timestamps:true});