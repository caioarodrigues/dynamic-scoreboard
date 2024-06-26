import React from "react";
import ReactDOM from "react-dom/client";
import Index from "./pages/Index.module";
import { CardsProvider } from "./context/CardsContext";
import { Layout } from "./components/Layout/Index.module";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CardsProvider>
      <Layout>
        <Index />
      </Layout>
    </CardsProvider>
  </React.StrictMode>
);
