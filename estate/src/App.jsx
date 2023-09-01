import React from "react";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./app/store";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Create from "./pages/Create";
import SearchResults from "./components/SearchResults";
import SearchResultsDetails from "./pages/SearchResultsDetails";
import CategoryPage from "./pages/CategoryPage";
import StatePage from "./pages/StatePage";
import Login from "./pages/Login";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="create" element={<Create />} />
      <Route path="search-results" element={<SearchResults />} />
      <Route path="/estate/:id" element={<SearchResultsDetails />} />
      <Route path="/category/:category" element={<CategoryPage />} />
      <Route path="/state/:state" element={<StatePage />} />
      <Route path="login" element={<Login />} />
    </Route>
  )
);

export default function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}
