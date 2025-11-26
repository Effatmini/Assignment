/**
 * @param {number} init
 * @return {{increment: function(): number, decrement: function(): number, reset: function(): number}}
 */
var createCounter = function(init) {
    let current = init;

    return {
        increment: () => {
            current += 1;
            return current;
        },
        decrement: () => {
            current -= 1;
            return current;
        },
        reset: () => {
            current = init;
            return current;
        }
    };
};
const counter = createCounter(5);

console.log(counter.increment()); // 6
console.log(counter.increment()); // 7
console.log(counter.decrement()); // 6
console.log(counter.reset());     // 5
