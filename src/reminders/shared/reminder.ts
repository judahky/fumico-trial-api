import { Document } from "mongoose";

export class Reminder extends Document {
    titulo: string;
    descricao: string;
    status: string;
    user: string;
    created_at: string;
    updated_at: string;
}
