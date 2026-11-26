// Подключение функций
const { calculatePrice, addToCart, cart } = require('./calculatePrice');
const factorial = require('./factorial');
const processNumbers = require('./processNumbers');
const calculateOrders = require('./calculateOrders');
const multiply = require('./multiply');

// Задача 1. Чистые и нечистые функции
console.log('Задача 1:');

console.log('Цена с налогом:', calculatePrice(1000, 0.2));

addToCart('Ноутбук');
addToCart('Мышь');

console.log('Корзина:', cart);

// Задача 2. Факториал
console.log('\nЗадача 2:');

console.log('Факториал 5:', factorial(5));
console.log('Факториал 0:', factorial(0));
console.log('Факториал -3:', factorial(-3));

// Задача 3. Map и Filter
console.log('\nЗадача 3:');

const numbers = [5, 12, 8, 130, 44, 3];

console.log(processNumbers(numbers));

// Задача 4. Reduce
console.log('\nЗадача 4:');

const orders = [
    { product: "Ноутбук", price: 50000, quantity: 1 },
    { product: "Мышь", price: 1500, quantity: 2 },
    { product: "Клавиатура", price: 3000, quantity: 1 }
];

console.log('Общая стоимость:', calculateOrders(orders));

// Задача 5. Каррирование
console.log('\nЗадача 5:');

console.log(multiply(2)(3)());
console.log(multiply(2)(3)(4)());
