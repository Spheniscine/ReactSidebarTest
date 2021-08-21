import React, { Fragment, useState } from 'react'
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import { Link } from 'react-router-dom'
import { SidebarData } from './SidebarData'
import { NavbarStyles } from './NavbarStyles'
import { IconContext } from 'react-icons'

function Navbar() {
    const [sidebar, setSidebar] = useState(false)
    const showSidebar = () => setSidebar(true)
    const hideSidebar = () => setSidebar(false)

    return (
        <>
            <IconContext.Provider value={{color: '#fff'}}>
                <div className={NavbarStyles.navbar}>
                    <Link to="#" className={NavbarStyles.menuBars}>
                        <FaIcons.FaBars onClick={showSidebar} />
                    </Link> 
                </div>
                <nav className={sidebar ? NavbarStyles.navMenuActive : NavbarStyles.navMenu}>
                    <ul className={NavbarStyles.navMenuItems} onClick={hideSidebar}>
                        <li className={NavbarStyles.navbarToggle}>
                            <Link to="#" className={NavbarStyles.menuBars}>
                                <AiIcons.AiOutlineClose />
                            </Link>
                        </li>
                        {
                            SidebarData.map((item, index) => {
                                return (
                                    <li key={index} className={NavbarStyles.navText}>
                                        <Link to={item.path}>
                                            {item.icon}
                                            <span>{item.title}</span>
                                        </Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar