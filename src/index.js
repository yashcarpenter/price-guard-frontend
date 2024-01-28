import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AddProduct from './components/addProduct';
import WelcomePage from "./components/WelcomePage";
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import AboutUs from './components/aboutCreator';
import RemoveProduct from './components/removeProduct';

const router = createBrowserRouter([
  {
    path: "",
    element: <App/>,
    children: [
      {
        path: "/aboutus",
        element: <AboutUs />,
      },
      {
        path: "/addproduct",
        element: <AddProduct />,
      },
      {
        path: "",
        element: <WelcomePage />,
      },{
        path: "/removeproduct",
        element: <RemoveProduct/>,
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
