import { Injectable } from "@angular/core";
import { NewTaskData } from "./task/task.model";

@Injectable({providedIn: 'root'})
 export class TasksService{
    private tasks =[
        {
          id: 't1',
          userId: 'u1',
          title: 'Master TypeScript',
          sumarry: 'Aprenda todas las caracteristicas de TipyScript y como aplicarlas',
          dueDate: '2025-12-31'
        },
        {
          id: 't2',
          userId: 'u1',
          title: 'Master TypeScript 5',
          sumarry: 'Aprenda todas las caracteristicas de TipyScript y como aplicarlas',
          dueDate: '2025-12-31'
        },
        {
          id: 't2',
          userId: 'u2',
          title: 'Master html',
          sumarry: 'Aprenda todas las caracteristicas de html y como aplicarlas',
          dueDate: '2025-12-31'
        },
        {
          id: 't3',
          userId: 'u3',
          title: 'Master javascript',
          sumarry: 'Aprenda todas las caracteristicas de javascript y como aplicarlas',
          dueDate: '2025-12-31'
        },
      ];

      constructor(){
        const tasks = localStorage.getItem('tasks');
        if(tasks){
            this.tasks = JSON.parse(tasks);
        }
      }
getUserTasks(userId: string){
    return this.tasks.filter(task => task.userId === userId);

}
addTask(taskData: NewTaskData , userId: string){
    this.tasks.unshift({
        id: new Date().getTime().toString(),
        userId: userId,
        title: taskData.title,
        sumarry: taskData.sumarry,
        dueDate: taskData.date
      })
      this.saveTasks();
}
removeTask(taskId: string){
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
    this.saveTasks();
}
private saveTasks(){
    localStorage.setItem('tasks', JSON.stringify(this.tasks));

  }

}