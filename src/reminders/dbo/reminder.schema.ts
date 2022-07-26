import * as mongoose from 'mongoose';

export const ReminderSchema = new mongoose.Schema({
    titulo: String,
    descricao: String,
    status: String,
    user: String,
    created_at: Date,
    updated_at: Date
})