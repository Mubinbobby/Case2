document.addEventListener("DOMContentLoaded", function () {
    const todoList = document.getElementById('todoList');
    let completedCount = 0;

    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(todos => {
            todos.forEach(todo => {
                const listItem = document.createElement('li');
                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.checked = todo.completed;
                
                checkbox.addEventListener('change', function () {
                    if (this.checked) {
                        completedCount++;
                    } else {
                        completedCount--;
                    }

                    checkTaskCompletion(completedCount).then(message => {
                        alert(message);
                    }).catch(err => {
                        console.log(err);
                    });
                });

                listItem.appendChild(checkbox);
                listItem.appendChild(document.createTextNode(todo.title));
                todoList.appendChild(listItem);
            });
        })
        .catch(error => console.error('Error fetching todos:', error));
});

function checkTaskCompletion(count) {
    return new Promise((resolve, reject) => {
        if (count === 5) {
            resolve('Congrats. 5 Tasks have been Successfully Completed');
        } else {
            reject('Less than 5 tasks completed.');
        }
    });
}