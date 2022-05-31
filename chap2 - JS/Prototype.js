function Person(name) {
	this.name = name;
}

function Student(name) {
	this.__proto__.constructor(name);
}

Person.prototype.greet = function greet() {
	return `HI, ${this.name}!`;
};

Object.setPrototypeOf(Student.prototype, Person.prototype);

Student.prototype.study = function study() {
	return `${this.name} is studying`;
};

const me = new Student("Pig_mon");
console.log(me.greet());
console.log(me.study());
