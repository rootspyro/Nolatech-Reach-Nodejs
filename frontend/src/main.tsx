import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// Components 
import Footer from './components/footer.tsx'
import Header from './components/header.tsx'

// Pages 
import NotFound from './pages/NotFound.tsx'
import SignUp from './pages/SignUp.tsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App /> 
  },
  {
    path: "/signup",
    element: <SignUp />
  },
  {
    path: "*",
    element: <NotFound />
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header />
    <RouterProvider router={router} />
    <Footer />
  </React.StrictMode>,
)
