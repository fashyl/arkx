let Arkadian = {
    _firstname: 'Souhail',
    _lastname: 'Faraji',
    _age: '22',
    get fullName() {
        return `${this._firstname} ${this._lastname}`
    },
    set fullName(newName) {
        [this._firstname, this._lastname] = newName.split(" ");
    }
}

Arkadian.fullName = 'John Doe'
console.log(Arkadian.fullName);