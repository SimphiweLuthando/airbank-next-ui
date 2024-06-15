import * as React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AmountProvider } from "./contextProvider";




ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
     <BrowserRouter>
      <AmountProvider>
      <main className="dark text-foreground bg-background">
        <App />
      </main>
      </AmountProvider>
      </BrowserRouter>
  </React.StrictMode>
);
