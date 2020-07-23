setTimeout(() => {
  console.log("2 seconds later");
}, 2000);
const geocode = (address, callback) => {
  setTimeout(() => {
    const data = {
      lat: 0,
      long: 0,
    };
    callback(data);
  }, 2000);
};
geocode("India", (data) => {
  console.log(data);
});

const add = (a, b, sum) => {
  setTimeout(() => {
    s = a + b;
    sum(s);
  }, 2000);
};
add(1, 4, (sum) => console.log(sum));
