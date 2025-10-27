
let lists = [];

addToList = () => {

    const input = document.getElementById('textInput');

    if(input.value.trim() === '') {
        alert('Please enter a task');
        return;
    }

    lists.push(input.value);
    input.value = '';

    showList();
}

showList = () => {

    const todolist = document.getElementById('todoList');
    todolist.innerHTML = '';

    lists.map((item, key) => {
        const li = document.createElement('li');
        console.log(key);
        li.textContent = item;
        const delBtn = document.createElement('button');
        delBtn.textContent = 'Delete';
        delBtn.onclick = () => removeFromList(key);
        li.appendChild(delBtn);
        const updBtn = document.createElement('button');
        updBtn.textContent = 'Update';
        updBtn.onclick = () => updatethisFromList(key);
        li.appendChild(updBtn);
        todolist.appendChild(li);

    });

}

updatethisFromList = (index) => {

    let thisTask = lists[index];

    removeFromList(index);

    const input = document.getElementById('textInput');
    input.value = thisTask;
    
}

removeFromList = (index) => {

    console.log(lists);

    lists = lists.filter((item, key) => {
        if(key != index){
            return item;
        }
    });

    console.log(lists);

    showList();
}