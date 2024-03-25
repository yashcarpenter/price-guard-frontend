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

// App.js

// import React, { useState } from 'react';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import WelcomePage from './components/welcomePage/WelcomePage';
// import AddProduct from './components/AddProduct';
// import AboutCreator from './components/AboutCreator';
// import SignIn from './components/SignIn';
// import SignupPage from './components/SignUp';
// import UserProfile from './components/UserProfile';
// import RemoveProduct from './components/RemoveProduct';

// const App = () => {
//   const [currentPage, setCurrentPage] = useState('welcome');

//   const renderPage = () => {
//     switch (currentPage) {
//       case 'addproduct':
//         return <AddProduct />;
//       case 'aboutcreator':
//         return <AboutCreator />;
//       case 'signin':
//         return <SignIn />;
//       case 'signup':
//         return <SignupPage />;
//       case 'userprofile':
//         return <UserProfile />;
//       case 'removeproduct':
//         return <RemoveProduct />;
//       default:
//         return <WelcomePage />;
//     }
//   };

//   return (
//     <div>
//       <Header />
//       {renderPage()}
//       <Footer />
//     </div>
//   );
// };

// export default App;


