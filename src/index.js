import React from "react";
import { Provider as StoreProvider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./component/App/App";
import store from "./store/store";
import ServiceContext from "./component/context/ServiceContext";
import NewsService from "./service/NewsService";
import Layout from "./component/Layout/Layout";

const newsService = new NewsService();

ReactDOM.render(
  <React.StrictMode>
    <ServiceContext.Provider value={newsService}>
      <StoreProvider store={store}>
        <BrowserRouter basename="/hacker-news">
          <Layout>
            <App />
          </Layout>
        </BrowserRouter>
      </StoreProvider>
    </ServiceContext.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
