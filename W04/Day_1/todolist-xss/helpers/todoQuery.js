const { viewToDoApi } = require("../api/to-dos");

exports.ToDo = {
    async findTodo(id) {
        return await viewToDoApi(id);
    },
    matchTodo(todo_id, original_id) {
        return todo_id === original_id;
    }
}