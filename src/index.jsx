import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
//import Counter from './components/Counter'
//import counter from './reducers'

import App from './components/App.jsx'

import style from './scss/style.scss';

//const store = createStore(counter)
const rootEl = document.getElementById('root')

const render = () => ReactDOM.render(
    (
        <App />
    ),
    rootEl
);

render()
//store.subscribe(render)
