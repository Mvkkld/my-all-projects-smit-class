var todo_input = document.getElementById('todo');
var add_todo_btn = document.getElementById('add_todo_btn');
var delete_all_btn = document.getElementById('delete_all_btn');
var todo_list = document.getElementById('todo_list');

add_todo_btn.addEventListener('click', function(){
    if(!todo_input.value ) return alert('Fill input box')
        var list_item = 
    `<li>
        <span>${todo_input.value}</span>
        <button onclick="edit(this)">Edit</button>
        <button onclick="deleteFun(this)">delete</button>
    </li>`
todo_list.innerHTML += list_item
todo_input.value=''    
})
function edit(element){
// console.log(element.previousElementSibling.innerText)
var previousValue = element.previousElementSibling.innerText
var updatedValue = prompt('Edit Value', previousValue)
element.previousElementSibling.innerText = updatedValue
}

function deleteFun(element){
element.parentElement.remove()
}