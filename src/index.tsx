import React from "react";
import ReactDom from "react-dom";
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from "./components/App";
import reducer from './reducer';

const store = createStore(reducer);

ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);