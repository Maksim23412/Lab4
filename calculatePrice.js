// Глобальный массив корзины
let cart = [];

// Чистая функция
function calculatePrice(price, tax) {
    return price + (price * tax);
}

// Нечистая функция
function addToCart(product) {
    cart.push(product);
    console.log(`Товар ${product} добавлен в корзину`);
}

// Экспортируем функции и массив
module.exports = {
    calculatePrice,
    addToCart,
    cart
};
