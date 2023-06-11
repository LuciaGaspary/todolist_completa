//Seleção de elementos
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");

//Funções
const saveTodo = (text) => {
    const todo = document.createElement("div")
    todo.classList.add("todo")

    const todoTitle = document.createElement("h3")
    todoTitle.innerText = text
    todo.appendChild(todoTitle)
    // console.log(todo);

    const doneBtn = document.createElement("button")
    doneBtn.classList.add("finish-todo")
    doneBtn.innerHTML = '<i class="fa fa-check" aria-hidden="true"></i>'
    todo.appendChild(doneBtn)

    const deleteBtn = document.createElement("button")
    deleteBtn.classList.add("delete-todo")
    deleteBtn.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>'
    todo.appendChild(deleteBtn)

    todoList.appendChild(todo)

    todoInput.value = "";
    todoInput.focus();
}

//Eventos
todoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    // console.log("Enviou form")

    const inputValue = todoInput.value
    console.log(inputValue);

    let input = document.getElementById('todo-input')
    input.style.border = ''

    if (inputValue) 
    {
        saveTodo(inputValue)
    }

    if (!inputValue) 
    {    
        input.style.border = '2px solid red';
    }
});

document.addEventListener("click", (e) => {
    const targetEl = e.target;
    const parentEl = targetEl.closest("div");
    let todoTitle;

    if (parentEl && parentEl.querySelector("h3")) 
    {
        todoTitle = parentEl.querySelector("h3").innerText;
    }

    if (targetEl.classList.contains("finish-todo")) 
    {
        parentEl.classList.toggle("done")
        //console.log("Clicou para finalizar");
    }

    if (targetEl.classList.contains("delete-todo")) 
    {
        parentEl.remove();
    }
});

// background change
// function background1() {
//     document.querySelector('body').style.background = "url('/images/background.jpg') center center / cover";
// }
// function background2() {
//     document.querySelector('body').style.background = "url('/images/background2.jpg') center center / cover";
// }
// function background3() {
//     document.querySelector('body').style.background = "url('/images/background3.jpg') center center / cover";
// }
// function background4() {
//     document.querySelector('body').style.background = "url('/images/background4.jpg') center center / cover";
// }
// function background5() {
//     document.querySelector('body').style.background = "url('/images/background5.jpg') center center / cover";
// }

//refazendo com arrow function e passando background por parametro
const handleChangeBackground = ((backgroundName) => {
    document.querySelector('body').style.background = `url('/images/${backgroundName}.jpg') center center / cover `
});

//tema
const toggle = document.getElementById('toggleDark');
const container = document.getElementById('todo-container');
const background = document.getElementById('background-change')

toggle.addEventListener('click', function() {
    this.classList.toggle('fa-moon-o');

    if(this.classList.toggle('fa-sun-o')) {
        container.style.background = 'rgba(255, 255, 255, 0.3)';
        container.style.color = 'black';
        container.style.transition = '2s';

        background.style.background = 'rgba(255, 255, 255, 0.3)';
        background.style.transition = '2s';
    } else {
        container.style.background = 'rgba(13, 13, 13, 0.3)';
        container.style.color = 'white';
        container.style.transition = '2s';

        background.style.background = 'rgba(13, 13, 13, 0.3)';
        background.style.transition = '2s';
    }
});

// icone da lua
// <i class="fa fa-moon-o" aria-hidden="true"></i>
