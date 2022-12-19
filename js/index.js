const user = {id: 11, name: 'Amir khan', job: 'actor'};
const stringified = JSON.stringify(user);
console.log(user);
console.log(stringified);

//another
const shop = {
  name: 'alia store',
  address: 'ranbir road',
  profit: 25000,
  products: ['laptop', 'mobile', 'pepsi'],
  isExpensive: false
}
const shopStrigifier = JSON.stringify(shop);
//console.log(shop);
console.log(shopStrigifier);
const converted = JSON.parse(shopStrigifier);
console.log(converted);
console.log(converted.products);