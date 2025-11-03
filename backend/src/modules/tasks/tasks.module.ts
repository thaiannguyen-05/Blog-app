import { Module } from '@nestjs/common';
import { TaskService } from './tasks.service';
@Module({
  providers: [TaskService],
  imports: [],
})
export class TasksModule {}
