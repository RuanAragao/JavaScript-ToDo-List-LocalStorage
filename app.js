var list = document.getElementById("list");
var input_item = document.getElementById("input-item");
var btn_add_todo = document.getElementById("btn-add-todo");

const storageName = 'todo_list';
var storage = {
    lsName: storageName,

    save: function(data) {
        localStorage.setItem(this.lsName, JSON.stringify(data));
    },
    read: function(key) {
        let data = localStorage.getItem(this.lsName);
        return JSON.parse(data);
    }
};

var todo_list = storage.read() || [];

function renderToDos() {
    let todo_list = storage.read() || [];
    list.innerHTML = "";
    for (todo of todo_list) {
        let li = document.createElement('li');
        let item = document.createTextNode(todo);

        let btnDelete = document.createElement('a');
        btnDelete.setAttribute('href', '#');

        let indexToDo = todo_list.indexOf(todo);
        btnDelete.setAttribute('onclick', 'removeToDo(' + indexToDo + ')');
        let btnDeleteCaption = document.createTextNode('Remove'); 

        li.appendChild(item);       
        btnDelete.appendChild(btnDeleteCaption);
        li.appendChild(btnDelete);
        
        list.appendChild(li);

    }
}

function addToDo(todo) {
    todo_list.push(todo);
    storage.save(todo_list);
    renderToDos();
}

function removeToDo(index) {
    todo_list.splice(index, 1);
    storage.save(todo_list);
    renderToDos();
}


renderToDos(todo_list);
btn_add_todo.onclick = function() {
    addToDo(input_item.value);
    input_item.value = "";
}