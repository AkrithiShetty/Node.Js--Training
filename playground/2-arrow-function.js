// const square = function (a) {
//   return a * a;
// };
// const square = (x) => {
//   return x * x;
// };
// const square = (x) => x * x;
// console.log(square(5));
// console.log(square(5));
const event = {
	name: 'Birthday Party',
	guests: ['Akrithi', 'Suraksa', 'Anvitha'],
	printGuestList() {
		console.log('Welcome to ' + this.name);
		this.guests.forEach((guest) => {
			console.log(guest + ' Welcome to the ' + this.name);
		});
	}
};
event.printGuestList();
