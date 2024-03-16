import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AddProduct from './components/AddProduct';
import WelcomePage from "./components/WelcomePage";
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import AboutCreator from './components/AboutCreator' ;
import RemoveProduct from './components/RemoveProduct';
import UserProfile from './components/UserProfile';
import SignupPage from './components/SignUp';
import SignIn from './components/SignIn';

const router = createBrowserRouter([
  {
    path: "",
    element: <App/>,
    children: [
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/aboutcreator",
        element: <AboutCreator />,
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
      },{
        path: "/userprofile",
        element: <UserProfile/>,
      },{
        path: "/signup",
        element: <SignupPage/>,
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
