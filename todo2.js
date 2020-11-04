const form = document.getElementById('list');
const input = form.querySelector('input');
const ul = document.getElementById('invitedList');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = input.value;
    input.value = '';
    const li = document.createElement("li");
    li.textContent = text;
    const label = document.createElement('label');
    label.textContent = '';
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    label.appendChild(checkbox);
    li.appendChild(label);

    const button = document.createElement('button');
    button.textContent = 'remove';
    li.appendChild(button);

    ul.appendChild(li)
});

ul.addEventListener('change', (e) => {
    const checkbox = event.target;
    const checked = checkbox.checked; 
    const listItem = checkbox.parentNode.parentNode;

    if (checked) {
listItem.className = listItem.style.textDecoration = 'line-through'
    } else {
listItem.className = listItem.style.textDecoration = "none"
    }
});

ul.addEventListener('click', (e) => {
    if(e.target.tagName === "BUTTON") {
        const li = e.target.parentNode;
        const ul = li.parentNode;
        ul.removeChild(li);
    }
});

function addToLocalStorage(li) {
    localStorage.setItem('li', JSON.stringify(li));
    renderTodos(li);
}

function getFromLocalStorage() {
    const reference = localStorage.getItem('li');
    if (reference) {
        li = JSON.parse(reference);
        renderTodos(li);
    }
}

getFromLocalStorage();