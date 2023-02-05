const $todoForm = document.querySelector('#todoForm');
const $todoInput = document.querySelector('#todoForm input');
const $todoList = document.querySelector('.todoList');


function handleTodoSubmit(event){
    event.preventDefault();
    const newTodo = $todoInput.value;
    $todoInput.value = '';
    addToDo(newTodo);
}

function deleteTodo(event){
    event.target.parentElement.parentElement.remove();
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
    
} 

$todoForm.addEventListener('submit', handleTodoSubmit); 