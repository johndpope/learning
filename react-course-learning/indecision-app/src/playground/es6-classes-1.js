class Person {
	constructor(name = 'anon', age = 0) {
		this.name = name;
		this.age = age;
	}

	getGreeting(){
		return `Hi. I am ${this.name}.`;
	}

	getDescription(){
		return `${this.name} is ${this.age} year(s) old.`
	}
}

class Student extends Person {
	constructor(name, age, major) {
		super(name, age);
		this.major = major;
	}
	hasMajor() {
		return !!this.major;
	}
	getDescription() {
		let description = super.getDescription();
		if(this.hasMajor) {
			description += ` Their major is ${this.major}.`;
		}
		return description;
	}
} 

class Traveller extends Person {
	constructor(name, age, homeLocation) {
		super(name, age);
		this.homeLocation = homeLocation;
	}
	getGreeting() {
		let greeting = super.getGreeting();
		if(this.homeLocation) {
			greeting += ` I am visiting from ${this.homeLocation}.`;
		}
		return greeting;
	}
}

const me = new Student('Khalil Chatoo', 24, 'Computer Engineering & Management');
const you = new Traveller('Khalil',25,'Toronto');
console.log(me);
console.log(me.getDescription());
console.log(me.hasMajor());


console.log(you);
console.log(you.getGreeting());