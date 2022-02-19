import React from 'react'
import './App.css';
import {Routes,Route} from 'react-router-dom';
import LoginForm from './Components/LoginForm';
import ProductPage from './Components/ProductListing';
import SelectedProduct from './Components/SelectedProduct';
import ProtectRoute from './ProtectedRoute/ProtectRoute';


function App() {
  return (
    <div className="App">
    <Routes>
    <Route path="/"  element={<ProductPage/>} />
    <Route path='/login'  element={<LoginForm/>} />
    <Route element={<ProtectRoute/>}>
    <Route path='/dashboard'  element={<SelectedProduct/>} />
    </Route>
   
    </Routes>  
    </div>
  );
}
export default App;
