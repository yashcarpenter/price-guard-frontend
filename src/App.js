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
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         {/* <Header/> */}
//         <Routes>
          // <Route path="/" element={<WelcomePage/>} />
          // <Route path="/aboutcreator" element={<AboutCreator />} />
          // <Route path="/signup" element={<SignupPage />} />
          // <Route path="/signin" element={<SignIn />} />
          // <Route path="/addproduct" element={<AddProduct />} />
          // <Route path="/userprofile" element={<UserProfile />} />
          // <Route path="/removeproduct" element={<RemoveProduct />} />
//         </Routes>
//         {/* <Footer/> */}
//       </div>
//     </Router>
//   );
// }

// export default App;


