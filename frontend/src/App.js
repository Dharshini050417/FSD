import Registration from './components/Registration';
// import './App.css';

// function App() {
//   return (
//     <>
//     <Registration/>
    
//     </>
//   );
// }

// export default App;

import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => (
  <div>
    <ToastContainer />
    <Registration />
  </div>
);

export default App;
