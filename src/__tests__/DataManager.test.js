import DataManager from '../components/DataManager';

//test crud operations
it('DataManager gets tasks', () => {
    //create a new instance of datamanager
    const dataManager = new DataManager();
    const tasks = dataManager.getTasks();
    expect(tasks.length).toBe(0);
})

it('DataManager adds new tasks', () => {
    const dataManager = new DataManager();
    dataManager.addTasks('Get list of Rooms');
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    console.log(tasks);
    expect(tasks).toHaveProperty('length');
    expect(tasks.length).toBe(1);
    expect(tasks[0].name).toBe('Get list of Rooms');
})