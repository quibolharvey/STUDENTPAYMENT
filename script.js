document.addEventListener('DOMContentLoaded', () => {

    const inputTask = document.getElementById('inputTask');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    addTaskBtn.addEventListener('click', () => {
        const taskText = inputTask.value.trim();

        if(taskText !== " "){
            const li = document.createElement('li');

            if(taskText !== " "){
                const li = document.createElement('li');
                li.textContent = taskText;
                taskList.appendChild(li);
                inputTask.value = '';
            }
        }
    })
    inputTask.addEventListener('keypress', (e) => {
        if(e.key == 'Enter'){
            addTaskBtn.click();
        }
    })
});