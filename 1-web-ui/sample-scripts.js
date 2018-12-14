
//--------------------------------------------------

// //#1

// function foo(){
// }
// function bar(){
//     foo()
// }
// function baz(){
//     bar();
// }
// baz();

//--------------------------------------------------


//#2

// function foo() {
//     throw new Error('oops')
// }
// function bar() {
//     foo()
// }
// function baz() {
//     bar();
// }
// baz();

//--------------------------------------------------


// #3


// function foo(){
//     foo()
// }
// foo();

//--------------------------------------------------


// #4

// function longRunning() {
//     var i = 0;
//     while (i < 10) {
//         console.log("im long..");
//         i++;
//     }
// }


// function shortRunning() {
//     console.log("im short..");
// }

// longRunning();
// shortRunning();

//--------------------------------------------------


// #5


/*

<button class="veg">veg-1</button>
<button class="veg">veg-2</button>
<button class="non-veg">non-veg</button>

*/

// console.log("init....");

// $.on('.veg', 'click', function vegHandler(e) {
//     console.log("handling event on .veg elements");
// });
// $.on('.non-veg', 'click', function nonVegHandler(e) {
//     console.log("handling event on .non-veg elements");
// });
// console.log('cont...with other work...')

//--------------------------------------------------


// #6


console.log("init...");

// IO
setTimeout(function timeout() {
    console.log("after timeout event, processing event");
}, 3000);  // IO

console.log('cont..with other work..')

function longRunning() {
    var i = 0;
    while (i < 10) {
        console.log("im long..");
        i++;
    }
}
longRunning();

//--------------------------------------------------