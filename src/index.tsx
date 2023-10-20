// Import necessary modules and components
import { createRoot } from "react-dom/client"; 
import { Provider } from 'react-redux'; 
import axios from 'axios'; 
import GlobalDataContext from "./Context/global"; 
import store from "./store/index";
import App from "./App"; // Import the main App component
import "./index.css"; 

// Set the base URL for Axios requests
axios.defaults.baseURL = 'https://13.232.102.80';
// axios.defaults.baseURL = 'http://127.0.0.1:8000';

// Check if the browser supports service workers
console.log("Registering a service worker")
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./background-worker.js', { scope: "./" })
    .then(registration => {
      console.log('Service Worker registration successful', registration);
    })
    .catch(error => {
      console.error('Service Worker registration failed:', error);
    });
}

// Get the container element with the ID "root"
const container = document.getElementById("root");
const root = createRoot(container!);

// Render the main application component within a Redux Provider and GlobalDataContext
root.render(
  <Provider store={store}>
    <GlobalDataContext>
      <App />
    </GlobalDataContext>
  </Provider>
);
