console.log("-index.js-");


import 'bootstrap/dist/css/bootstrap.css';
import React from 'react'
import ReactDOM from 'react-dom'


//-----------------------------------------
// step-1: what UI =>  e.g greeting
//-----------------------------------------

/*
    <div class="alert alert-info">
        <p>good morning</p>
        <hr/>
        <p>time</p>
    </div>

*/


//-----------------------------------------
//  step-2 : define UI-component class
//-----------------------------------------
/* 
class Greeting extends React.Component {
    render() {
        let p1 = React.createElement('p', { key: 1 }, 'good morning')
        let p2 = React.createElement('p', { key: 2 }, 'time')
        let hr = React.createElement('hr', { key: 3 })
        let divEle = React.createElement('div',
            { className: 'alert alert-info' },
            [p1, hr, p2]
        )
        return divEle;
    }
} */

// or  - JSX 

class Greeting extends React.Component {
    render() {
        return (
            <div className="alert alert-info">
                <p>good morning</p>
                <hr />
                <p>time</p>
            </div>
        )
    }
}

//-----------------------------------------
//  step-3 : instantiate component & render to virtual DOM
//-----------------------------------------

// let greeting = React.createElement(Greeting, null, null);
//or
let greeting = <Greeting />
ReactDOM.render(greeting, document.getElementById('root'))

