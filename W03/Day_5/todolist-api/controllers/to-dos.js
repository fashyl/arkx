//const todos = require("../models/to-dos");

const { viewToDosApi, createToDoApi, viewToDoApi } = require("../api/to-dos");

// CRUD Operations
exports.viewToDos = async (req, res, next) => {
  const todos = await viewToDosApi();
  res.json(todos).status(200);
};

exports.viewToDo = async (req, res, next) => {
  const todo = await viewToDoApi(req.params.id);
  res.json(todo).status(200);
};

exports.createToDo = async (req, res, next) => {
  const created = await createToDoApi(req.body);
  res
    .status(201)
    .send(`New item added successfuly \n\n ${JSON.stringify(req.body)}`);
};

exports.editToDo = async (req, res, next) => {};
exports.deleteToDo = async (req, res, next) => {};
