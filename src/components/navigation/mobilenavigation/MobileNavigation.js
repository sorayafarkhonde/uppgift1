//import React from 'react'
import './MobileNavigation.css'
import {HamburgerButton} from './hamburgerbutton/HamburgerButton'
import {SideBar} from './sidebar/SideBar'
import {BackDrop} from '../../backdrop/BackDrop'
import {useState} from 'react'

export const MobileNavigation = () => {
    const[openDrawer, setOpenDrawer]= useState(false)
 
    return (
        <div>
            <HamburgerButton drawerHandler={setOpenDrawer}/>
            <SideBar drawerIsOpen={openDrawer} drawerHandler={setOpenDrawer}/>
            {!openDrawer || <BackDrop drawerHandler={setOpenDrawer}/>}
        </div>
    )
}
