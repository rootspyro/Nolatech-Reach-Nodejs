import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Header from './components/header.tsx'
import './index.css'
import Footer from './components/footer.tsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import NotFound from './NotFound.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App /> 
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
