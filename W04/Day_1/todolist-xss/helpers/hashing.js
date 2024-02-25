const bcrypt = require('bcrypt');

class Hash{
    async hashiL(password) {
        return await bcrypt.hash(password , 10) // 10 salt 
    }
    async checkiL(plain, hashed) {
        return await bcrypt.compare(plain, hashed);
    }
}

module.exports = new Hash; // To avoid having to call each time you want to use it