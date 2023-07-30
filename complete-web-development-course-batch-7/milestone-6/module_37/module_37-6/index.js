// (advanced) Closure, encapsulation, private variable



function kitchen () {
    let roast = 0;
    return function () {
        roast++;
        return roast;
    }
}
const firstServer = kitchen();
const secondServer = kitchen();
console.log('first', firstServer());
console.log('first', firstServer());
console.log('first', firstServer());
console.log('first', firstServer());
console.log('first', firstServer());
console.log('first', firstServer());
console.log('second', secondServer());
console.log('second', secondServer());
console.log('second', secondServer());