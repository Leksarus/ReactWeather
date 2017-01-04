var names = ['andrew', 'jopsep-f', 'jogn', 'sam'];

/*names.forEach(function(name) {
	console.log('forEach', name);
});

names.forEach((name) => console.log('arrowFunc', name));

var returnMe = (name) => name + '!';
console.log(returnMe('Kamil'));*/

/*var person = {
	name: 'Andrew',
	greet: function() {
		names.forEach((name) => {
			console.log(this.name + 'says hi to' + name);
		});
	}
}
person.greet();*/

// Challenge area

function add (a, b) {
	return a + b;
}

//addStatement 
var addStatement = (a, b) => {
	return a + b;	
}

// addExpression 
var addExpression = (a, b) => a + b;

console.log('1. addStatement ===', addStatement(2, 3), '2. addExpression ===', addExpression(2, 3))