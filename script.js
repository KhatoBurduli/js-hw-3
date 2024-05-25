// Exercise 1
console.log("Exercise 1")

function sumArray(...numbers) {
    if (numbers.length < 3) {
        throw new Error("The function requires at least three numbers.");
    }

    const firstElement = numbers[0] + numbers[1];
    const secondElement = numbers.slice(2).reduce((acc, curr) => acc + curr, 0);

    return [firstElement, secondElement];
}

const result = sumArray(1, 2, 3, 4, 5);
console.log(result);

// Exercise 2
console.log("Exercise 2")

function getCity(user) {
    return user?.banks?.[2]?.address?.city;
}

const user = {
    banks: [
        { address: { city: 'Kutaisi' } },
        { address: { city: 'Batumi' } },
        { address: { city: 'Tbilisi' } }
    ]
};

console.log(getCity(user));

// Exercise 3
console.log("Exercise 3")

const user1 = {
    name: "Khatuna",
    lastName: "Burduli",
    age: 18,
    address: {
        country: "Georgia",
        city: "Tbilisi",
    },
    education: {
        school: "BGA",
        university: "CU",
    }
}

const user2 = {
    ...user1,
    address: {
        ...user1.address
    },
    education: {
        ...user1.education
    }
}

console.log(user1)
console.log(user2)