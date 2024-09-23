//import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { store, persistor } from './redux/store.js'
import { Provider } from 'react-redux'; 
import { PersistGate } from 'redux-persist/integration/react';


createRoot(document.getElementById("root")).render(
  <PersistGate persistor={persistor}>
  <Provider store={store}>
    <ToastContainer />
    <App />
  </Provider>
  </PersistGate>
);
