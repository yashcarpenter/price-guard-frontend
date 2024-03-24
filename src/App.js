import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom';
import UserDataContext from './context/userDataContext';

function App() {
  return (
    <>
    <UserDataContext>
      <Header/>
      <Outlet/>
      <Footer/>
    </UserDataContext>
    </>
  );
}

export default App;
