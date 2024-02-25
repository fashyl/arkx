const { getUsersApi } = require("../api/users");
const { checkiL } = require("./hashing");

exports.User = {
    async findUser(email) {
        const users = await getUsersApi();
        return users.find( user => users.email === email);
    },
    matchPassword(password, input) {
        return checkiL(password, input)
    }
}