import React from "react";
import ReactDom from "react-dom";

import { Provider } from "react-redux";
import { store } from './redux/store';

import App from "./components/App";
import { Apphook } from "./components/App_hook";
const ishook = true;
ReactDom.render(
    <Provider store={store}>
        {
            ishook ?
                <Apphook />
                : <App dispatch={store.dispatch} />
        }
    </Provider>,
    document.getElementById("root")
);