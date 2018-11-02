"use strict";

function TodoCtrl (){
    const vm = this;

    vm.tasks = [
        {task: "Walk the Rocket", completed: true},
        {task: "Go for a jog", completed: false},
        {task: "Get groceries", completed: true},
        {task: "Go to the store", completed: false},

    ]



}

angular
.module("todoApp")
.controller("TodoCtrl", TodoCtrl)