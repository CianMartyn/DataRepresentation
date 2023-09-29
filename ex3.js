let MyTasks = [];

// Create addTask function
let addTask = (task) => {
    let length = MyTasks.push(task);
    console.log("Task: " + task + " added to Tasks.")
    return length;
}
// Create listAllTasks function
let listAllTasks = (task) => {
    MyTasks.forEach((item) => {
        console.log(item);
    })
}

// Create deleteTask function
let deleteTask = (task) => {
    let index = MyTasks.indexOf(task);
    if (index > -1) {
        MyTasks.splice(index, 1);
        console.log("Task: " + task + " removed from Tasks");
    } else {
        console.log("Task: " + task + " not in Tasks!");
    }
}

addTask("Learn JS!");
addTask("Learn React!");
listAllTasks();
deleteTask("Learn JS!");
deleteTask("fsohi");