const form = document.querySelector("[data-form]");
const list = document.querySelector("[data-lists]");
const input = document.querySelector("[data-input]");



class Storage {
    static addTodoStorage(todoArr) {
      const storage = localStorage.setItem("todos", JSON.stringify(todoArr));
      return storage;
    }
  
    static getStorage() {
      const storage =
        localStorage.getItem("todos") === null
          ? []
          : JSON.parse(localStorage.getItem("todos"));
      return storage;
    }
  }




let todos = Storage.getStorage()

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!input.value) {
    alert("Input Required Value!");
    return;
  }

  let id = Date.now();
  const todo = new Todo(id, input.value);
  todos = [...todos, todo];
  UI.displayData();
  UI.clearInput();
  UI.removeTodoUI();
  Storage.addTodoStorage(todos);
});

class Todo {
  constructor(id, todo) {
    this.id = id;
    this.todo = todo;
  }
}

class UI {
  static displayData() {
    let displayData = todos.map((item) => {
      return `<div class="todo">
          <p>
           ${item.todo}
          </p>
          <span class='remove' dataId=${item.id}>🗑️</span>
        </div>`;
    });
    list.innerHTML = displayData.join(" ");
  }

  static clearInput() {
    input.value = "";
  }

  static removeTodoUI() {
    list.addEventListener("click", (e) => {
      if (e.target.classList.contains("remove")) {
        e.target.parentElement.remove();

        const todoId = e.target.attributes[1].value;
        this.removeTodoFromArray(todoId);
      }
    });
  }

  static removeTodoFromArray(id) {
    todos = todos.filter((item) => item.id !== +id);
  }
}



window.addEventListener('DOMContentLoaded',() => {
    UI.displayData()
    UI.removeTodoUI()
})
