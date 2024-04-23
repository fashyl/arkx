const contactRouter = require("express").Router();
const Contact = require("../models/contact");
const { errorHandler, NotFoundError } = require("../helpers/handlers");
const { isAuth } = require("../helpers/auth");

// contactRouter.use("/", isAuth);

contactRouter.get("/", async (req, res, next) => {
  try {
    const contacts = await Contact.find({});
    res.json(contacts.map((contact) => contact));
  } catch (error) {
    errorHandler(error, res);
  }
});

contactRouter.get("/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const contact = await Contact.findById(id);
    if (!contact) throw new NotFoundError("Contact not found :ç");
    res.json(contact);
  } catch (error) {
    errorHandler(error, res);
  }
});

contactRouter.post("/", async (req, res, next) => {
  try {
    const newContact = new Contact(req.body);
    const created = await newContact.save();
    res.status(201).json({ message: "Contact created.", data: created });
  } catch (error) {
    errorHandler(error, res);
  }
});

contactRouter.patch("/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const contact = await Contact.findByIdAndUpdate(
      id,
      { name: req.body.name, number: req.body.number},
      { new: true },
    );
    if (!contact) throw new NotFoundError(`Contact not found.`);
    res.json({ message: "Contact updated.", data: contact });
  } catch (error) {
    errorHandler(error, res);
  }
});

contactRouter.delete("/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const contact = await Contact.findByIdAndDelete(id);
    if (!contact) throw new NotFoundError(`Contact not found.`);
    res.json({ message: "Contact deleted.", data: contact });
  } catch (error) {
    errorHandler(error, res);
  }
});

module.exports = contactRouter;
