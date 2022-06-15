const ary = [1, 2, 3, 4, 5];

const [head, ...rest] = ary;

console.log(head, rest);

// const personalData = {};

const publicData = {};

const overrides = {
	email: "fff@fff.com",
};

const user = {
	...{
		email: "abc@teak.com",
		password: "****",
	},
	...{
		nickname: "foo",
	},
	...{
		email: "fff@fff.com",
	},
};

console.log(user);

function foo(head, ...rest) {
	console.log(head);
	console.log(rest);
}

foo(1, 2, 3, 4);
