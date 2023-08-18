import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers";
import { addCharacterById, removeCharacterById } from "./actions";
import "./index.css";

const store = createStore(rootReducer);

console.log("store", store.getState());
store.subscribe(() => console.log("store:", store.getState()));

const rootElement = document.getElementById("root");

const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
