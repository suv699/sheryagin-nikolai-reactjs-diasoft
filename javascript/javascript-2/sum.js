export default function sum(a) {

    const _a = a || 0;

    const func = function(b) {
        return (b||b===0) ? sum(_a + b) : a ;
    }

    return func;
}

