import mongoose from 'mongoose';

const Schema = mongoose.Schema;
export const ShiftsSchema = new Schema({
    shiftName: String,
    timeStart: String,
    timeEnd: String,
    isDisable: {
        type: Boolean,
        default: false
    }
},
{timestamps:true});