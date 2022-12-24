// SELECTORS

const todoInput = document.querySelector('.todo-input')
const todoButton = document.querySelector('.todo-button')
const todoList = document.querySelector('.todo-list')
const filterOption = document.querySelector('.filter-todo')

// EVENTLISTENER

todoButton.addEventListener('click', addTodo)
todoList.addEventListener('click', checkDelete)
filterOption.addEventListener('click', filterTodo)


// FUNCTIONS

function addTodo(event) {
    event.preventDefault()
    
    const todoDiv = document.createElement('div')
    todoDiv.classList.add('todo-Div')

    const newTodo = document.createElement('li')
    newTodo.classList.add('todo-item')
    newTodo.innerText = todoInput.value
    todoDiv.appendChild(newTodo)

    const checkedBtn = document.createElement('button')
    checkedBtn.innerHTML = '<i class="fas fa-check"></i>'
    checkedBtn.classList.add('checked-btn')
    todoDiv.appendChild(checkedBtn)
    
    const trashBtn = document.createElement('button')
    trashBtn.innerHTML = '<i class="fas fa-trash"></i>'
    trashBtn.classList.add('trash-btn')
    todoDiv.appendChild(trashBtn)

    todoList.appendChild(todoDiv)

    todoInput.value = ""
}

function checkDelete(e) {
    const item = e.target

    if(item.classList[0] === 'trash-btn') {
        const todo = item.parentElement
        todo.classList.add('fall')
        todo.addEventListener('transitionend', function() {
            todo.remove();
        })
    }

    if(item.classList[0] === 'checked-btn') {
        const todo = item.parentElement
        todo.classList.toggle('completed')
    }

}

function filterTodo(e) {
    const todos = document.querySelectorAll('.todo-Div')
    todos.forEach(function (todo) {
        switch(e.target.value)  {
            case "all":
                todo.style.display = "flex";
                break;

            case "completed":
                if (todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;

            case "uncompleted":
                if (!todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }

        }
    })
}

