import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./app/store.jsx";

import App, { practicecontext } from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <practicecontext.Provider value={{ count: "mohan" }}>
      <Provider store={store}>
        <App />
      </Provider>
    </practicecontext.Provider>
  </StrictMode>,
);
