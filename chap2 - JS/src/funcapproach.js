// @ts-check
// eslint-disable no-restricted-syntax

/**
 * @typedef Person
 *
 * @property {number} age
 * @property {string} city
 * @property {string | string[]} [pet]
 **/

/**@type {Person[]} */
const people = [
	{
		age: 20,
		city: "서울",
		pet: ["cat", "dog"],
	},
	{
		age: 40,
		city: "부산",
	},
	{
		age: 31,
		city: "대구",
		pet: ["cat", "dog"],
	},
	{
		age: 36,
		city: "서울",
	},
	{
		age: 27,
		city: "부산",
		pet: "cat",
	},
	{
		age: 24,
		city: "서울",
		pet: "dog",
	},
];

function solveA() {
	/** @type {string[]} */
	const cities = [];
	for (const person of people) {
		if (person.age < 30) {
			if (!cities.find((city) => person.city === city)) {
				cities.push(person.city);
			}
		}
	}
	return cities;
}

function solveAModern() {
	const allCities = people
		.filter((person) => person.age < 30)
		.map((person) => person.city);
	const set = new Set(allCities);
	return Array.from(set);
}
console.log("SolveA", solveA());
console.log("SolveAModern", solveAModern());
