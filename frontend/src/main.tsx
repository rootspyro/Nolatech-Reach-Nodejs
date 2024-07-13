import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Header from './components/header.tsx'
import './index.css'
import SideMenu from './components/sideMenu.tsx'
import Footer from './components/footer.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header />
    <SideMenu />
    <App />
    <Footer />
  </React.StrictMode>,
)
