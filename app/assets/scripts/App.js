//var Person = require('./modules/Person'); //this is the Node way of importing
import Person from './modules/Person'; //ES6 way of importing

alert('Abc123dss');

class Adult extends Person {
  payTaxes() {
    console.log(this.name + " now owes $0 in taxes.");
  }
}

var john = new Person('John Doe', 'blue');
john.greet();

var jane = new Adult('Jane Smith', 'Orange');
jane.greet();
jane.payTaxes();
