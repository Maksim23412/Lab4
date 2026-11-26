function factorial(n) {
    // Проверка отрицательного числа
    if (n < 0) {
        return null;
    }

    // Условие выхода из рекурсии
    if (n === 0 || n === 1) {
        return 1;
    }

    // Рекурсивный вызов
    return n * factorial(n - 1);
}

module.exports = factorial;
