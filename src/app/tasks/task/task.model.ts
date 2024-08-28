export interface Task  {
    id: string;
    userId: string;
    title: string;
    sumarry: string;
    dueDate: string;
  };

  export interface NewTaskData {
    title: string; 
    sumarry: string; 
    date:string;
  }