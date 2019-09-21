const initialData = {
tasks: {
    "task-1": {id: 'task-1', content: 'Проснуться'},
    "task-2": {id: 'task-2', content: 'Умыться'},
    "task-3": {id: 'task-3', content: 'Почистить зубы'},
    "task-4": {id: 'task-4', content: 'Попить кофе'},
    "task-5": {id: 'task-5', content: 'Кайфовать'}
},
    columns: {
    'column-1': {
        id: 'column-1',
        title: 'Сделать',
        taskIds: ['task-1', 'task-2', 'task-3', 'task-4', 'task-5',],
    },
    },
    columnOrder: ['column-1'],
};
export default initialData;