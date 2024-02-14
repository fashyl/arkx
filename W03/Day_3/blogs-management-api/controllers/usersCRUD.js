const { getAllUsersApi, getUserByIdApi, addUserApi, deleteUserApi, updateUserApi } = require("../api/usersAPI");

exports.getAllUsers = async (req, res) => { 
    try {
        const users = await getAllUsersApi()
        console.log(users.data)
        res.status(200).json(users.data);
    } catch (error) {
        res.status(500).send(`Error on Server End : \n ${error}`);
    }
}

exports.getUserById = async (req, res) => { 
    try {
        const user = await getUserByIdApi(req.params.id)
        console.log(user.data);
        res.status(200).json(user.data)
    } catch (error) {
        res.status(500).send(`Error on Server end : \n ${error}`)
    }
}


exports.addUser = async (req, res) => { 
    try {
        await addUserApi(req.body)
        res.status(201).send(`User ${req.body.username} Added Successfully.`)
    } catch (error) {
        res.status(500).send(`Error on Server end : \n ${error}`)
    }
}

exports.updateUser = async (req, res) => { 
    try {
        await updateUserApi(req.params.id, req.body);
        res.status(202).send(`User id: ${req.params.id} Updated Successfully.`)
    } catch (error) {
        // res.status(500).send(`Error on Server end : \n ${error}`)
        res.status(500).send(error.message);
    }
}

exports.deleteUser = async (req, res) => { 
    try {
        const user = await deleteUserApi(req.params.id);
        res.status(202).send(`User ${user.data.username} Deleted Successfully.`)
    } catch (error) {
        // res.status(500).send(`Error on Server end : \n ${error}`)
        res.status(500).send(error.message);
    }
}