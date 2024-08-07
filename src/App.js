import './App.css';
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import { Outlet } from 'react-router-dom';
import AuthDataContext from './context/authContext/AuthDataContext';
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


