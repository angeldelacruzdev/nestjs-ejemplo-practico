import { Injectable } from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';

import { Tasks } from './interfaces/tasks.interface';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TasksService {

    constructor(@InjectModel('Task') private taskModel: Model<Tasks>){}


    async getTask(){
        return await this.taskModel.find()
    }


    async getTaskId(id: string){
        return await this.taskModel.findById(id);
    }


    async createTask(task: CreateTaskDto){
      const newTask = await new this.taskModel(task);
      console.log(newTask);
      return newTask.save();
    
    }

    async deleteTasks(id: string){
        return await this.taskModel.findByIdAndDelete(id);
      }

}
