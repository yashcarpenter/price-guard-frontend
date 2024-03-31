import './App.css';
import Header from './components/header/Header'
// import Footer from './components/footer/Footer'
import { Outlet } from 'react-router-dom';
import UserDataContext from './context/userDataContext';

function App() {
  return (
    <>
    <UserDataContext>
      <Header/>
      <Outlet/>
      {/* <Footer/> */}
    </UserDataContext>
    </>
  );
}

export default App;


