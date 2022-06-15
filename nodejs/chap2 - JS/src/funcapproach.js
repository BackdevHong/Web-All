/* eslint-disable no-shadow */
/* eslint-disable no-restricted-syntax */
// @ts-check
// eslint-disable no-restricted-syntax

/**
 * @typedef Test
 *
 * @property {number} age
 * @property {string} city
 * @property {string | string[]} [pet]
 * */

/** @type {Test[]} */
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
        .filter(({ age }) => age < 30)
        .map(({ city }) => city);

    const set = new Set(allCities);

    return Array.from(set);
}

console.log("SolveA", solveA());
console.log("SolveAModern", solveAModern());

/** @typedef {Object.<string, Object.<string, number>>} PetsOfCities */
function solveB() {
    /** @type {PetsOfCities} */
    const result = {};
    for (const person of people) {
        const { city, pet: PetOrPets } = person;
        if (PetOrPets) {
            const PetsOfCity = result[city] || {};

            if (typeof PetOrPets === "string") {
                const pet = PetOrPets;

                PetsOfCity[pet] = PetsOfCity[pet] ? PetsOfCity[pet] + 1 : 1;
            } else {
                for (const pet of PetOrPets) {
                    PetsOfCity[pet] = PetsOfCity[pet] ? PetsOfCity[pet] + 1 : 1;
                }
            }

            result[city] = PetsOfCity;
        }
    }
    return result;
}

console.log("solveB", solveB());

function solveBModern() {
    return people
        .map(({ pet: PetOrPets, city }) => {
            const pet =
                typeof PetOrPets === "string" ? [PetOrPets] : PetOrPets || [];
            return {
                city,
                pet,
            };
        })
        .flatMap(({ city, pet }) => pet.map((pet) => [city, pet]))
        .reduce((/** @type {PetsOfCities} */ result, [city, pet]) => {
            if (!city || !pet) {
                return result;
            }

            return {
                ...result,
                [city]: {
                    ...result[city],
                    [pet]: (result[city]?.[pet] || 0) + 1,
                },
            };
        }, {});
}

console.log("solveBModern", solveBModern());
