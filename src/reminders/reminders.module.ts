import { Module } from '@nestjs/common';
import { RemindersController } from './reminders.controller';
import { ReminderService } from './shared/reminder.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ReminderSchema } from './dbo/reminder.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'Reminder', schema: ReminderSchema }])
    ],
    controllers: [RemindersController],
    providers: [ReminderService]
})

export class RemindersModule {}
