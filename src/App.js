import './App.css';
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import { Outlet } from 'react-router-dom';
import AuthDataContext from './context/authContext/AuthDataContext';
import AuthContext from './context/authContext/AuthContext';
import { useContext } from 'react';

function App() {
  return (
    <>
    <AuthDataContext>
      <Header/>
      <Outlet/>
      {/* <Footer/> */}
    </AuthDataContext>
    </>
  );
}

export default App;


