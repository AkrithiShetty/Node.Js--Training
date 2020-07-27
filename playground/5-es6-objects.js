const name = 'Akrithi';
const age = 22;
const user = {
	name, // Property shorthand
	uage: age,
	location: 'NITK'
};
console.log(user);

//object destructuring

const product = {
	label: 'Chocolate',
	stock: 50,
	price: 5,
	saleprice: undefined,
	rating: 4.8
};
// const label = product.label;
// const stock = product.stock;
const { label: p, stock, rating = 5 } = product;
console.log(p, stock, rating);

//destructuring in function

const transaction = (type, { label, stock }) => {
	console.log(type, label, stock);
};
transaction('order', product);

// const transaction = (type, { label = "Chocolate", stock = 10 } = {}) => {
//   console.log(type, label, stock);
// };

// tranc("order");
