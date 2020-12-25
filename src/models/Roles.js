import mongoose from 'mongoose';

const Schema = mongoose.Schema;
export const RolesSchema = new Schema({
    roleName: String,
    note: String,
    description: String,
    fixedSalary: Number,
    isDisable: {
        type: Boolean,
        default: false
    }
},
{timestamps:true});