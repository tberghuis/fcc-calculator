import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

// will this load index?
import reducer from './reducers/index.js'
import App from './components/App.jsx'

import style from './scss/style.scss';



// TODO
const store = createStore(reducer,
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
const rootEl = document.getElementById('root');

const render = () => ReactDOM.render(
    (
        <Provider store={store}>
            <App />
        </Provider>
    ),
    rootEl
);

render()
//store.subscribe(render)
