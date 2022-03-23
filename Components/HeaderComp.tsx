/* eslint-disable @next/next/no-html-link-for-pages */
import React, {Component} from 'react';
import NavBar from './Navbar';
import SideBarIcon from './SideBarIcon';
import {BsList, BsPlus} from 'react-icons/bs';
export default class HeaderComp extends Component {
    
        render(): React.ReactNode {
            return <div className = " px-6 bg-secondary-default  text-whiteIsh-default align-top w-screen h-16 bg-fixed flex" >
                
                <a className='menu-Icon top-0 left-0' href='/'>Sean Lai</a>
              
                
                <a className = "menu-Icon top-0 right-24" href='/about-me'>About Me</a>
                <button className = "menu-Icon top-0 right-0  group">
                    <p className='group-hover:scale-0 scale-100 transition-all duration-300 '>Projects</p>
                    <div className = "flex fixed top-0 right-0 h-screen w-auto m-0 flex-col  shadow-lg bg-opacity-70 group-hover:scale-100 group-only scale-0 transition-all duration-300">
                        <SideBarIcon props={<BsList size = "32"/>} data="/projects"/>
                        <SideBarIcon props={<BsPlus size = "32"/>} />
                        <SideBarIcon props={<BsPlus size = "32"/>} />
                        <SideBarIcon props={<BsPlus size = "32"/>} />
                        <SideBarIcon props="ATIS" text = "Automatic Therapy Indentification System"/>
                    </div> 
                </button>
            </div>
            
        }
    }