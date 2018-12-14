
console.log("-index.js-");

//-----------------------------------------
// using DOM API
//-----------------------------------------

let alertBox = document.querySelector('.alert')
let greetBtn = document.querySelector('.btn-primary')
let hideBtn = document.querySelector('.btn-danger')
let showBtn = document.querySelector('.btn-success')

greetBtn.addEventListener('click', e => {
    alertBox.innerHTML = "good noon"
});
hideBtn.addEventListener('click', e => {
    alertBox.style.display = 'none'
});
showBtn.addEventListener('click', e => {
    alertBox.style.display = ''
});


//-----------------------------------------
// using XHR API
//-----------------------------------------

let todosBtn = document.getElementById('todos-btn')
todosBtn.addEventListener('click', e => {
    let apiUrl = "https://jsonplaceholder.typicode.com/todos?_limit=5";
    let promise = fetch(apiUrl)
    promise
        .then(response => response.json())
        .then(todos => {
            let arr = todos.map((todo, idx) => {
                return `
                    <li class="list-group-item ${todo.completed ? 'bg-success' : ''}">
                        ${todo.id} - ${todo.title} - ${todo.completed}
                    </li>
                `
            })
            document.getElementById('todo-list').innerHTML = arr.join(' ');
        })
})


//-----------------------------------------
// using Timer API
//-----------------------------------------

let timEle = document.getElementById('time');
setInterval(() => {
    timEle.innerHTML = new Date().toLocaleTimeString();
}, 1000)


//----------------------------------------