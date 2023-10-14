import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import axios from 'axios';
import GlobalDataContext from "./Context/global";
import { Provider } from 'react-redux';
import store from "./store/index";

axios.defaults.baseURL = 'https://13.232.102.80';
// axios.defaults.baseURL = 'http://127.0.0.1:8000';
// axios.defaults.baseURL = 'http://192.168.1.111:8000';

//check if browser supports service worker
console.log("registering a service worker")
if('serviceWorker' in navigator){
  navigator.serviceWorker.register('./background-worker.js', {scope:"./"})
        .then(registration => {
            console.log('Service Worker registration successful', registration)
        })
        .catch(error => {
            console.error('Service Worker registration failed:', error);
        });
}

const container = document.getElementById("root");
const root = createRoot(container!);

root.render(
  <Provider store={store}>
    <GlobalDataContext>
      <App />
    </GlobalDataContext>
  </Provider>
);
