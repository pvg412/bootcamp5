import React, {Component} from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
import {about} from './script.js';
// import {keys} from './script.js';
import registerServiceWorker from './registerServiceWorker';

    // компонент Hello
// const Hello = () => {
//     return <div>Hello!</div>
// };

    // компонент HelloClass - созданный через class
// class HelloClass extends Component{
//     render() {
//         return <div>Hello Class!</div>
//
//     }
// }

// for (let keys in about) {
//     console.log(keys);
// }


const Inform = (props) => {


    return (
        <div>
            <table>
                <tbody>
                <tr>
                    <td>Index</td>
                    <td>Value</td>
                </tr>
                <tr>
                    <td>Name:</td>
                    <td>{props.name}</td>
                </tr>
                <tr>
                    <td>Descr:</td>
                    <td>{props.descr}</td>
                </tr>
                <tr>
                    <td>Age:</td>
                    <td>{props.age}</td>
                </tr>
                </tbody>
            </table>
        </div>
    )
};


ReactDOM.render(<Inform name={about.name}
                        descr={about.descr}
                        age={about.age}
    />,
    document.getElementById('root'));
registerServiceWorker();

// ReactDOM.render(<App />,
//     document.getElementById('root'));
// registerServiceWorker();

console.log(about);
console.table(about);
