const $todoForm = document.querySelector('#todoForm');
const $todoInput = document.querySelector('#todoForm input');
const $todoList = document.querySelector('.todoList');

const todo = []; 

loadTodo();

function handleTodoSubmit(event){
    event.preventDefault();
    const newTodo = $todoInput.value;
    $todoInput.value = '';
    addToDo(newTodo);
}

function deleteTodo(event){
    event.target.parentElement.parentElement.remove();
    const li = event.target.parentElement.parentElement;
    const span = li.querySelector('span');
    const newTodo = span.innerText;
    // console.log("newtodo:", newTodo);
    todo.splice(todo.indexOf(newTodo), 1);
    saveTodo(); 
}

function addToDo(newTodo){
    const li = document.createElement('li'); 
    const span = document.createElement('span'); 
    const trash = document.createElement('button');

    trash.innerHTML = '<img src="icon/trash.png" style="border:none">';
    trash.addEventListener('click', deleteTodo);
    li.appendChild(span);  
    li.appendChild(trash);  
    span.innerText = newTodo;
    $todoList.appendChild( li);

    todo.push(newTodo);  
    saveTodo();
} 
function saveTodo(){
    localStorage.setItem('todo', JSON.stringify(todo));
}

function loadTodo(){
    const savedTodo = localStorage.getItem('todo');
    if(savedTodo !== null){
        const parsedTodo = JSON.parse(savedTodo);
        parsedTodo.forEach((item) => addToDo(item));
    }
}

$todoForm.addEventListener('submit', handleTodoSubmit); 