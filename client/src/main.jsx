import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { OrderContextProvider } from "./context/OrderContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <OrderContextProvider>
      <App />
    </OrderContextProvider>
  </React.StrictMode>
);
