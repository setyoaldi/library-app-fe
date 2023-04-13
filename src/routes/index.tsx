import {
  Navigate,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { useState, useEffect, useMemo, Profiler } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";

import LandingPage from "../pages/LandingPage";
import Profile from "../pages/Profile";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import AddBook from "../pages/AddBook";
import DetailBook from "../pages/DetailBook";
import EditBook from "../pages/EditBook";
import History from "../pages/History";
import ListAllBook from "../pages/ListAllBook";
import MyBook from "../pages/MyBook";

axios.defaults.baseURL = "http://54.169.5.251:8080/";

const App = () => {
  const [cookie] = useCookies(["token", "username"]);
  const checkToken = cookie.token;
  const router = createBrowserRouter([
    { path: "/", element: <LandingPage /> },
    { path: "/books", element: <ListAllBook /> },
    { path: "/addbook", element: <AddBook /> },
    { path: "/updatebook", element: <EditBook /> },
    { path: "/login", element: <Login /> },
    { path: "/register", element: <Register /> },
    { path: "/profile", element: <Profile /> },
    { path: "/mybooks", element: <MyBook /> },
    { path: "/detailbook", element: <DetailBook /> },
    { path: "/history", element: <History /> },
  ]);
  return <RouterProvider router={router} />;
};
export default App;
