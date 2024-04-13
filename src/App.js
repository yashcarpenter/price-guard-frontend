import './App.css';
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import { Outlet } from 'react-router-dom';
import AuthDataContext from './context/authContext/AuthDataContext';
import Header2 from './components/header-2/header-2';
function App() {
  return (
    <>
    <AuthDataContext>
      <Header/>
      {/* <Header2/> */}
      <Outlet/>
      <Footer/>
    </AuthDataContext>
    </>
  );
}

export default App;


