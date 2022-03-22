import React from 'react'
import Header from './Header'
import Footer from './Footer'


function Layout(props) {
  return (
    <div>

        <Header/>
       
        <div className='content'>
            {props.children}
        </div>
        

        <div>
        
        </div>
        



        
        
        </div>
        
  )
}

export default Layout