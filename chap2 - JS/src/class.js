class Person {
	constructor(name) {
		this.name = name;
	}

	greet() {
		return `HI, ${this.name}!`;
	}
}

class Student extends Person {
	constructor(name) {
		super(name);
	}

	study() {
		return `${this.name} is studying`;
	}
}

const me = new Student("Pig_mon");
console.log(me.study());
console.log(me.greet());

const me2 = new Person("Pig_mon");
console.log(me2.greet());
