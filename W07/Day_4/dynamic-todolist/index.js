const inputField = document.getElementById('field-text');
const todolist = document.getElementById('list-container');
const button = document.getElementById('submit-btn');

button.addEventListener('click', () => {
    if( inputField.value === "" ) {
        alert("Dir chi 7araka a LA7YA..");
    } else {
        let li = document.createElement('li')
        li.innerHTML = inputField.value;
        todolist.appendChild(li);

        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputField.value = ''; // reset input.
}, false);

todolist.addEventListener('click', function(event) {
    if(event.target.tagName === "LI"){
        event.target.classList.toggle('checked');
    } else if(event.target.tagName === "SPAN") {
        event.target.parentElement.remove();
    }
}, false); // Dyalach had false ?