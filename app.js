var list = document.getElementById("list");
var input_item = document.getElementById("input-item");
var btn_add_todo = document.getElementById("btn-add-todo");

var todo_list = [];

const storageName = 'todo_list';
var storage = {
    lsName: storageName,

    save: function(data) {
        localStorage.setItem(this.lsName, JSON.stringify(data));
    },
    read: function(index) {
        let data = localStorage.getItem(this.lsName);
        return JSON.parse(data);
    }
};

function renderToDos(todo_list) {
    list.innerHTML = "";
    for (todo of todo_list) {
        let li = document.createElement('li');
        let item = document.createTextNode(todo);
        li.appendChild(item);
        list.appendChild(li);
    }
}

function addTodo(todo) {
    todo_list.push(todo);
    storage.save(todo_list);
    renderToDos(todo_list);
}


renderToDos(todo_list);
btn_add_todo.onclick = function() {
    addTodo(input_item.value);
    input_item.value = "";
}