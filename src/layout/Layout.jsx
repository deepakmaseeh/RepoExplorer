import React from 'react'
import Header from '../Components/header'
import Footer from '../Components/Footer'
import SearchBar from '../Components/SearchBar'

function Layout({children}) {
  return (
    <>
    <Header/>
    <div className="container mx-auto">
      {children}
    </div>
    <Footer/>
    
    </>
  )
}

export default Layout