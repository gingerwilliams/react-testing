class DataManager {
    getTasks = () => {
        // localStorage.setItems('')
        //must use seperate method becasue its strigify so you have to parse
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        // console.log('get tasks', tasks);
        return tasks
        //dev tools > application >  storage > local storage 
    }

    addTasks = (name) => {
        const tasks = this.getTasks();
        tasks.push(name);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        // console.log('add a tasks', tasks);
    }

    removeTasks = (name) => {
        const tasks = this.getTasks();
        tasks.filter(n => n !== name);
    }
}

export default DataManager;