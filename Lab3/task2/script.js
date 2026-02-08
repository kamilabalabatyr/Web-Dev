const form = document.getElementById('todoForm');
const input = document.getElementById('todoInput');
const list = document.getElementById('todoList');

function createTodoItem(textValue) {
  const li = document.createElement('li');
  li.className = 'item';

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.className = 'checkbox';

  const text = document.createElement('span');
  text.className = 'text';
  text.textContent = textValue;

  const delBtn = document.createElement('button');
  delBtn.type = 'button';
  delBtn.className = 'delete';
  delBtn.setAttribute('aria-label', 'Delete item');
  delBtn.textContent = '🗑';

  checkbox.addEventListener('change', () => {
    li.classList.toggle('done', checkbox.checked);
  });

  delBtn.addEventListener('click', () => {
    list.removeChild(li); // requirement: removeChild
  });

  li.appendChild(checkbox);
  li.appendChild(text);
  li.appendChild(delBtn);

  return li;
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const value = input.value.trim();
  if (!value) return;

  list.appendChild(createTodoItem(value)); // requirement: appendChild
  input.value = '';
  input.focus();
});
