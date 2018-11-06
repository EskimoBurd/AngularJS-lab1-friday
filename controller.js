"use strict";

function TodoCtrl (){
    const vm = this;

    vm.tasks = [
        {task: "Walk the Rocket", completed: true},
        {task: "Go for a jog", completed: false},
        {task: "Get groceries", completed: true},
        {task: "Go to the store", completed: false},

    ]

    // vm.textToDisplay = [];
    
    vm.addTask = (newToDo) => {
        console.log(newToDo)
        vm.tasks.push(angular.copy({task: newToDo, completed: false }));
        //completed = false;
    }

    vm.removeTask = (index) => {
        console.log(index)
        vm.tasks.splice(index, 1)
    }

    vm.completeTask = (complete) => {
        vm.tasks[index].complete = true;

    }


}

angular
.module("todoApp")
.controller("TodoCtrl", TodoCtrl)