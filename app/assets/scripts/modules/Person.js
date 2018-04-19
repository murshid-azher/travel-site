fucntion Person (fullName, favColor) {

	this.name = fullName;
	this.color = favColor;
	this.greet = function() {
		console.log('Hello! There...' + this.name);
	}
}

module.exports = Person;
