const { getUsersApi } = require("../api/users");

exports.User = {
    async findUser(username) {
        const users = await getUsersApi();
        return users.data.find( user => user.username === username);
    },
    async findAuthor(uuid) {
        const users = await getUsersApi();
        return users.data.find( user => user.uuid === uuid);
    },
}