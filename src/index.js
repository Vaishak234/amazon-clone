import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import reducer,{ initialState }  from "./reducer";
import { StateProvider } from "./StateProvider";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
    <StateProvider reducer={reducer} initialState={initialState} >
      <App />
    </StateProvider>
    </Router>
  </React.StrictMode>,
);
