import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const DepartmentsSchema = new Schema({
    departmentName: String,
    shifts:[{type: Schema.Types.ObjectId, ref: 'Shifts'}],
    isDisable: {
        type: Boolean,
        default: false
    }
},
{timestamps:true});