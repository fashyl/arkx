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
  const todos = await viewToDosApi();
  res.status(200).render("home", { todos: todos.data });
};

exports.viewToDo = async (req, res, next) => {
  const todo = await viewToDoApi(req.params.id);
  res.json(todo).status(200);
};

exports.createToDo = async (req, res, next) => {
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
  res.status(302).redirect("/home");
};

exports.editToDo = async (req, res, next) => {
  await updateToDoApi(req.params.id, req.body);
  res.status(200).send(`To-do Item Updated Successfuly.`);
};

exports.deleteToDo = async (req, res, next) => {
  await deleteToDoApi(req.params.id);
  res.status(410).send(`To-do Item Deleted Successfuly.`);
};
