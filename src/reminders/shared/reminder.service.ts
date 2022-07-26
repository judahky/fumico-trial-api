import { Injectable } from '@nestjs/common';
import { takeLast } from 'rxjs';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose'; 
import { Reminder } from './reminder';

@Injectable()
export class ReminderService {
    constructor(@InjectModel('Reminder') private readonly reminderModel: Model<Reminder>) {  }

    async getAll() {
        return await this.reminderModel.find().exec();
    }

    async getById(id: string) {
        return await this.reminderModel.findById(id).exec();
    }

    async create(reminder: Reminder) {
        const createdReminder = new this.reminderModel(reminder);
        return await createdReminder.save();
    }

    async update(id: string, reminder: Reminder) {
        await this.reminderModel.updateOne({ _id: id }, reminder).exec();
        return this.getById(id);
    }

    async delete(id: string) {
        await this.reminderModel.deleteOne({ _id: id }).exec();

        return "id " + id + " deletado com sucesso.";
    }
}
