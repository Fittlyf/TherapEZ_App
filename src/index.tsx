import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import axios from 'axios';
import GlobalDataContext from "./Context/global";
import { Provider } from 'react-redux';
import store from "./store/index";

axios.defaults.baseURL = 'http://13.232.102.80:8000';
// axios.defaults.baseURL = 'http://127.0.0.1:8000';

//check if browser supports service worker
if('serviceWorker' in navigator){
  // registers the service worker file with the filename
  navigator.serviceWorker.register('background-worker.js');
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
