// Object destructuring
const person = {
	name: 'James',
	age: 16,
	location: {
		city: 'Manchester',
		temp: 10
	}
};

const { name:firstName = 'Anonymous', age } = person;
console.log(`${firstName} is ${age}`);

const { city: City, temp: temperature } = person.location;
if (city && typeof temperature === 'number') {
	console.log(`It's ${temperature} degrees celsius in ${City}`);
}

// Array destructuring 
const address = ['1299 S Juniper Street', 'San Francisco', 'California', '19147'];
const [ , city, state] = address;
console.log(`You are in ${city}, ${state}`);

