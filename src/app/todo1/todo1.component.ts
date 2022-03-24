import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

export interface Task{
  name:string;
  isUpdated:boolean;
  isVisible:boolean;
}

enum SortOptions{
  ASC = 'asc',
  DESC = 'desc',
  NONE = 'none'
}

@Component({
  selector: 'app-todo1',
  templateUrl: './todo1.component.html',
  styleUrls: ['./todo1.component.css']
})
export class Todo1Component implements OnInit {

  tasks:Task[] = [];

  SortEnum = SortOptions;
  sort:SortOptions = SortOptions.NONE;
  readonly TASK_KEY = 'tasks';
  constructor() {
   
   }

  ngOnInit(): void {
    let savedTasksJson = localStorage.getItem(this.TASK_KEY);

    if(savedTasksJson != null){
      this.tasks = JSON.parse(savedTasksJson);
    }
    this.handleSearch("");
  }

  handleRemove(task : string){
    this.tasks = this.tasks.filter(t => t.name != task);
  }

  handleSubmit(addForm:NgForm){
    let newTask = { name:addForm.value.task , isUpdated:false, isVisible:true};
    this.tasks.push(newTask);
    addForm.resetForm();
  }

  handleUpdate(t:Task){
    t.isUpdated = true;
  }

  handleFinishUpdate(oldName:string,newName:string){
    let task = this.tasks.filter(t => t.name === oldName)[0];
    task.name = newName;
    task.isUpdated = false;
  }

  handleSort(sortDirection:SortOptions){

    if(sortDirection == this.sort){
      this.sort = SortOptions.NONE;
      return;
    }

    this.sort = sortDirection;

    switch(sortDirection){
      case SortOptions.ASC:
        this.tasks = this.tasks.sort((a,b) => {
            let aLower = a.name.toLowerCase();
            let bLower = b.name.toLowerCase();

            if(aLower < bLower){
              return -1;
            }
            if(aLower > bLower){
              return 1;
            }
            return 0;
        })
        break;
      case SortOptions.DESC:
        this.tasks = this.tasks.sort((a,b) => {
          let aLower = a.name.toLowerCase();
          let bLower = b.name.toLowerCase();

          if(aLower < bLower){
            return 1;
          }
          if(aLower > bLower){
            return -1;
          }
          return 0;
      })
        break;
      case SortOptions.NONE:
        default:
        break;
    }
  }
  
  handleSearch(searchStr : string){
    let filteredTaske = this.tasks.map(t => {
      t.isVisible = t.name.includes(searchStr);
    })
  }

  handleSave() : void{
    localStorage.setItem(this.TASK_KEY,JSON.stringify(this.tasks))
  }
}
