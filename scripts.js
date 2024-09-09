document.addEventListener('DOMContentLoaded', () => {
    const inputTask = document.getElementById('inputTask');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const editBtn = document.getElementById('editBtn');
    const delBtn = document.getElementById('delBtn');
    const taskList = document.getElementById('taskList');
    let selectedTask = null; 

    
    addTaskBtn.addEventListener('click', () => {
        const taskText = inputTask.value.trim();
        if (taskText !== "") {
            const li = document.createElement('li');
            li.textContent = taskText;

            
            li.addEventListener('click', () => {
                
                if (selectedTask) {
                    selectedTask.classList.remove('selected');
                }
                
                selectedTask = li;
                selectedTask.classList.add('selected');
            });

            taskList.appendChild(li);
            inputTask.value = ''; 
        }
    });

    
    editBtn.addEventListener('click', () => {
        if (selectedTask) {
            const newTaskText = prompt("Edit task:", selectedTask.textContent);
            if (newTaskText !== null && newTaskText.trim() !== "") {
                selectedTask.textContent = newTaskText.trim();
            }
        } else {
            alert("Please select a task to edit.");
        }
    });


    delBtn.addEventListener('click', () => {
        if (selectedTask) {
            taskList.removeChild(selectedTask);
            selectedTask = null; 
        } else {
            alert("Please select a task to delete.");
        }
    });

    inputTask.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTaskBtn.click();
        }
    });
});