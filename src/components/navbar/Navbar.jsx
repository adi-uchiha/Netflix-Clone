import { ArrowDropDown, Notifications, Search } from '@mui/icons-material'
import React, { useState } from 'react'
import "./navbar.scss"
function Navbar() {
    const[isScrolled, setIsScrolled] = useState(false);
    
    window.onscroll= () => {
        setIsScrolled(window.scrollY === 0)
        return() => window.onscroll = null
    }
    console.log(isScrolled)

  return (
    <div className={isScrolled?"navbar scrolled": "navbar"}>
        <div className="container">
            <div className="left">
                <img src="https://static.cdnlogo.com/logos/n/82/netflix.png" alt="" />
                <span>Home</span>
                <span>Series</span>
                <span>Movies</span>
                <span>Popular</span>
                <span>My list</span>

            </div>


            <div className="right">
                <Search className='icon'/>
                <span>KIDS</span>
                <Notifications className='icon'/>

                <img src="https://as2.ftcdn.net/v2/jpg/00/64/67/63/1000_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg" alt="" />
                
                <div className="profile">
                <ArrowDropDown className='icon'/>
                <div className="options">
                    <span>Settings</span>
                    <span>Logout</span>
                </div>
                </div>
            </div>
        </div>


    
    </div>
  )
}

export default Navbar