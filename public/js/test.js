

const reduce = (reducer, init, arr) => {
    let acc = init;
    for(let i = 0,{ length } = arr; i < length; i++) {
        acc = reducer(acc, arr[i]);
    }
    return acc;
};
console.log(reduce((acc, curr) => acc + curr, 0, [1, 2, 3]));    // 6


const func = (fn, arr) => {
    return reduce((acc, curr) => fn(curr) ? acc.concat([curr]) : acc, [], arr);
};

const words = ['foo', 'bar', 'test', 'some'];
console.log(func(word => word.length !== 4, words));