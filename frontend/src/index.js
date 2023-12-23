import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Register';
import { RouterProvider,createBrowserRouter, createRoutesFromElements,Route } from 'react-router-dom';
import ResetPassword from './components/ResetPassword';
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App/>}>
     <Route path="home" element={<Home/>}/>
     <Route path="" element={<Login/>}/>
     <Route path="register" element={<Signup/>}/><Route path="register" element={<Signup/>}/>
     <Route path="reset-password" element={<ResetPassword/>}/>


    
    
    
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
