class ToDoList {
    constructor() {
        this.todos = []
    }
    addTodo(task){
        this.todos.push(task)
    }
    removeTodo(id){
        this.todos = this.todos.filter(function(listItem){
           return listItem.id !== id;
        })
    }
    showCompletedTasks () {
      return this.todos.filter(function(listItem){
        return listItem.status === true;
     })
    }
    showInProgressTask () {
      return this.todos.filter(function(listItem){
        return listItem.status === false;
     })
    }
    changeStatus(id) {
        let result = this.todos.find(function(task){
            return task.id === id;
        })
        result.status = !result.status;
    } 
    findTasks(text) {
        return this.todos.filter(function (toDo){
            return toDo.task.includes(text)
            })
        }
    moveDown(id) {
        let itemIndex = this.todos.findIndex(function (listItem) {
            return listItem.id === id;
        });
        let findTask = this.todos[itemIndex];
        let nextTask = this.todos[itemIndex + 1];
        this.todos.splice(itemIndex, itemIndex + 1, nextTask, findTask, );  
    }
    moveUp(id) {
        let itemIndex = this.todos.findIndex(function (listItem) {
            return listItem.id === id;
        });
        let findTask = this.todos[itemIndex];
        let previousTask = this.todos[itemIndex - 1];
        if (itemIndex - 1 >= 0) {
            this.todos.splice(itemIndex - 1, itemIndex, findTask, previousTask);
        }
    }
  }
  
  let toDoList = new ToDoList()

  class Task {
      constructor(task, status, id){
          this.task = task
          this.status = status
          this.id = id
      }
  }
  let task1 = new Task('to buy milk', true, 'task1')
  let task2 = new Task('to buy bread', true, 'task2')
  let task3 = new Task('to buy salt', false, 'task3')
  let task4 = new Task('to buy sugar', false, 'task4')
        
  
  toDoList.addTodo(task1)
  toDoList.addTodo(task2)
  toDoList.addTodo(task3)
  toDoList.addTodo(task4)
  console.log(toDoList.showCompletedTasks());
  console.log(toDoList.showInProgressTask());
  console.log(toDoList.changeStatus('task1'));
  console.log(toDoList);
  console.log(toDoList.findTasks('to buy sugar'));
  console.log(toDoList.moveUp('task4'));
  console.log(toDoList.moveDown('task2'));
  console.log(toDoList);

