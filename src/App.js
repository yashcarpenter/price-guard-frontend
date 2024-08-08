import './App.css';
import React, { useContext } from 'react';
import Header from './components/header/Header';
import { Outlet } from 'react-router-dom';
import AuthDataContext from './context/authContext/AuthDataContext';
import AuthContext from './context/authContext/AuthContext';

function App() {
  return (
    <AuthDataContext>
      <AuthContent />
    </AuthDataContext>
  );
}

function AuthContent() {
  const { data } = useContext(AuthContext);

  return data.isLoggedIn ? (
    <>
      <Header />
      <Outlet />
    </>
  ) : (
    <Outlet />
  );
}

export default App;
