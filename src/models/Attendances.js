import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const AttendancesSchema = new Schema({
    dateCheck: String,
    status: Boolean,
    note: String,
    workingHours: Number,
    checkInAt: Date,
    checkOutAt: Date,
    users: [{type: Schema.Types.ObjectId, ref: 'Users'}],
    isDisable: {
        type: Boolean,
        default: false
    }
},
{timestamps:true});