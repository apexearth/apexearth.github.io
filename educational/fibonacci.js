module.exports = fibonacci

function fibonacci(n) {
    if (n <= 0) throw new Error('n must be greater than 0');
    if (n === 1) return 0;
    if (n === 2) return 1;
    return fibonacci(n - 2) + fibonacci(n - 1);
}
