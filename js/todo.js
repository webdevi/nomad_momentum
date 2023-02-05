const $todoForm = document.querySelector('#todoForm');
const $todoInput = document.querySelector('#todoForm input');
const $todoList = document.querySelector('.todoList');


function handleTodoSubmit(event){
    event.preventDefault();
    console.log("handleTodoSubmit---call "); 
    const newTodo = $todoInput.value;
    $todoInput.value = '';
    // const $newTodo = document.createElement('li');
    // $newTodo.innerText = newTodo;
    // $todoList.appendChild($newTodo);
}

$todoForm.addEventListener('submit', handleTodoSubmit); 