class Person {

	constructor(fullName, favColor) {
		this.name = fullName;
		this.color = favColor;
	}

	greet() {
		console.log('Hi! dThere...' + this.name + this.color);
	}
}

// module.exports = Person; //Node way of exporting

export default Person; //ES6 way of exporting
