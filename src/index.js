import React from 'react';
import ReactDOM from 'react-dom';
import Apple from './components/app';

import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './reducer';



const App=()=>{
    return (
        <div className="container" style={{textAlign:'center',justifyContent: 'center',display: 'flex',}}>
           <Apple/>
        </div>
    )
}

ReactDOM.render(
    <Provider store={createStore(reducer)}>
    <App/>
 </Provider> 
     , document.querySelector("#root"))
