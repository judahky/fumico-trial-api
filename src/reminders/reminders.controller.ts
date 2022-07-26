import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { Reminder } from './shared/reminder';
import { ReminderService } from './shared/reminder.service';
import { JwtAuthGuard } from 'src/auth/shared/jwt-auth.guard';

@Controller('reminders')
export class RemindersController {
    constructor(private reminderService: ReminderService) {}

    @UseGuards(JwtAuthGuard)
    @Get()
    async getAll() : Promise<Reminder[]> {
        return this.reminderService.getAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    async getById(@Param('id') id: string) : Promise<Reminder> {
        return this.reminderService.getById(id);
    }

    @UseGuards(JwtAuthGuard)
    @Post()
    async create(@Body() reminder: Reminder) : Promise<Reminder> {
        return this.reminderService.create(reminder);
    }

    @UseGuards(JwtAuthGuard)
    @Put(':id')
    async update(@Param('id') id: string, @Body() reminder: Reminder) : Promise<Reminder> {
        return this.reminderService.update(id, reminder);
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    async delete(@Param('id') id: string) {
        return this.reminderService.delete(id);
    }
}
