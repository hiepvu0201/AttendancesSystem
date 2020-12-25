import mongoose, { Types } from 'mongoose';

const Schema = mongoose.Schema;
export const PayslipsSchema = new Schema({
    payDate: Date,
    workingSalary: Number,
    publicSalary: Number,
    otherSalary: Number,
    anualLeaveSalary: Number,
    overtimeSalary: Number,
    allowance: Number,
    bonus: Number,
    tax: Number,
    deductionSalary: Number,
    users: [{type: Schema.Types.ObjectId, ref: 'Users'}],
    isDisable: {
        type: Boolean,
        default: false
    }
},
{timestamps:true});