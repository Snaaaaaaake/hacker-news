import React from "react";
import { Switch, Route } from "react-router-dom";
import MainPage from "../MainPage/MainPage";
import NewsPage from "../NewsPage/NewsPage";
import ErrorComponent from "../ErrorComponent/ErrorComponent";

const App = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <MainPage />
      </Route>
      <Route path="/:id" exact>
        <NewsPage />
      </Route>
      <Route path="/:id">
        <ErrorComponent error={new Error("404: Нет такой страницы!")} />
      </Route>
    </Switch>
  );
};

export default App;
