const orders = [
    { product: "Ноутбук", price: 50000, quantity: 1 },
    { product: "Мышь", price: 1500, quantity: 2 },
    { product: "Клавиатура", price: 3000, quantity: 1 }
];

function calculateOrders(orders) {
    return orders.reduce((total, order) => {
        return total + (order.price * order.quantity);
    }, 0);
}

module.exports = calculateOrders;
