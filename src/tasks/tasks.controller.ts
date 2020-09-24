import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';

import { CreateTaskDto } from './dto/create-task.dto';
import { TasksService } from './tasks.service';
import { Tasks } from './interfaces/tasks.interface';
 
 
@Controller('tasks')
export class TasksController {

    constructor(private taskService: TasksService){}

    //Get All Tasks
    @Get()
    getTasks(): Promise<Tasks[]> {
        return this.taskService.getTask();
    }

    
    @Get(':taskId')
    getTask(@Param('taskId') taskId: string){
        return this.taskService.getTaskId(taskId);
    }


    //Create Task
    @Post()
    createTasks(@Body() task: CreateTaskDto): Promise<Task> | string{
        this.taskService.createTask(task);
        return "Guardado con exito";
  
    }

    //Delete Tasks
    @Delete(':id')
    deleteTask( @Param('id') id ): Promise<Task> | string{
       this.taskService.deleteTasks(id);
       return "Eliminado con éxito."

    }
    //Update Tasks
    @Put(':id')
    updateTask( @Body() task: CreateTaskDto, @Param('id') id): string{
      console.log(  `Updating Tasks  - ${id}`);
      console.log(task);
      return `Updating Tasks`;
    }  
}
