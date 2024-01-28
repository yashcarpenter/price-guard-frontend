import './App.css';
import Header from './components/header'
import AboutUs from './components/aboutCreator'
import Footer from './components/footer'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import { Outlet } from 'react-router-dom';
import { DropdownDivider } from 'react-bootstrap';

function App() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  );
}

export default App;
