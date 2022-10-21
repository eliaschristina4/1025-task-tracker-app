// CLIENT SIDE JS

window.addEventListener('load', ()=> {
    const form = document.querySelector('#new-task-form');
    const input = document.querySelector('#new-task-input');
    const list_el = document.querySelector('#tasks');

    form.addEventListener('submit', (e) => {
        e.preventDefault(); // prevents from refreshing pg on submit

        const task = input.value; // sets task to the value of the input

        if (!task) {
            alert('Please fill out the task.');
            return;
        }/* else {
            console.log('Success.'); // used to test
        } */; 

        // Below we are creating the tasks in the DOM/document (basically what we commented out in HTML, we are using JS to create below)
        const task_el = document.createElement('div');
        task_el.classList.add('task');

        const task_content_el = document.createElement('div');
        task_content_el.classList.add('content');

        task_el.appendChild(task_content_el);

        const task_input_el = document.createElement('input');
        task_input_el.classList.add('text');
        task_input_el.type = "text";
        task_input_el.value = task;
        task_input_el.setAttribute('readonly', "readonly");

        task_content_el.appendChild(task_input_el);


        const task_actions_el = document.createElement('div');
        task_actions_el.classList.add('actions');

        const task_edit_el = document.createElement('button');
        task_edit_el.classList.add('edit');
        task_edit_el.innerHTML = 'Edit';

        const task_delete_el = document.createElement('button');
        task_delete_el.classList.add('delete');
        task_delete_el.innerHTML = 'Delete';

        task_actions_el.appendChild(task_edit_el);
        task_actions_el.appendChild(task_delete_el);

        task_el.appendChild(task_actions_el);

        list_el.appendChild(task_el);

        input.value = ""; // ??? Does this reset the input value to an empty string so it doesn't stay as the task entered? He didn't explain

        // EDIT TASK BUTTON -- EVENT LISTENER
        task_edit_el.addEventListener('click', () => {
            if (task_edit_el.innerText.toLowerCase() == 'edit') {
                task_input_el.removeAttribute('readonly');
                task_input_el.focus();
                task_edit_el.innerText = "Save"; // When you hit edit and are editing, the button changes to say "Save"
            } else {
                // console.log('Save'); // used to test
                task_input_el.setAttribute('readonly', 'readonly');
                task_edit_el.innerText = 'Edit';
            };
        });

        // DELETE TASK BUTTON -- EVENT LISTENER
        task_delete_el.addEventListener('click', () => {
            list_el.removeChild(task_el);
        });
    });
});