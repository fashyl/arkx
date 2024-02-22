//const todos = require("../models/to-dos");

const {
  viewToDosApi,
  createToDoApi,
  viewToDoApi,
  updateToDoApi,
  deleteToDoApi,
} = require("../api/to-dos");

// CRUD Operations
exports.viewToDos = async (req, res, next) => {
  try {
    const todos = await viewToDosApi();
    res.status(200).render("home", { todos: todos.data });
  } catch (error) {
    console.log("Problem on server's end.. \nERROR | " + error.message);
  }
};

exports.viewToDo = async (req, res, next) => {
  try {
    const todo = await viewToDoApi(req.params.id);
    res.render("todo", { todo: todo.data });
  } catch (error) {
    console.log("Problem on server's end.. \nERROR | " + error.message);
  }
};

exports.createToDo = async (req, res, next) => {
  try {
    const {
      title,
      description,
      due_date,
      completed,
      user_id,
      created_at,
      updated_at,
    } = req.body;
    await createToDoApi(req.body);
    res.status(302).redirect("/");
  } catch (error) {
    console.log("Problem on server's end.. \nERROR | " + error.message);
  }
};

exports.editToDo = async (req, res, next) => {
  try {
    await updateToDoApi(req.params.id, req.body);
    res.redirect("/", 302);
  } catch (error) {
    console.log("Problem on server's end.. \nERROR | " + error.message);
  }
};

exports.deleteToDo = async (req, res, next) => {
  try {
    await deleteToDoApi(req.params.id);
    res.redirect("/", 410);
  } catch (error) {
    console.log("Problem on server's end.. \nERROR | " + error.message);
  }
};

exports.renderEdit = async (req, res) => {
  try {
    const todo = await viewToDoApi(req.params.id);
    res.render("editToDo", { todo: todo.data });
  } catch (error) {
    console.log("Problem on server's end.. \nERROR | " + error.message);
  }
};

exports.RenderTodo = (req, res) => {
  res.render('form')
}