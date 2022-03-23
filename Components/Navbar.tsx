
import React from 'react';
import {BsPlus,BsList} from 'react-icons/bs';
import SideBarIcon from './SideBarIcon';



export default class NavBar extends React.Component {
    constructor(props:any)
    {
        super(props)
        this.hide = this.hide.bind(this)
    }
    hide(){

    }
    render(): React.ReactNode {
        return (
        <React.Fragment>
            <div className = "flex fixed top-0 right-0 h-screen w-auto m-0 flex-col bg-secondary-default shadow-lg bg-opacity-70 group-hover:scale-100 group-only scale-0 transition-all duration-300">
                <SideBarIcon props={<BsList size = "32"/>} data="/projects"/>
                <SideBarIcon props={<BsPlus size = "32"/>} />
                <SideBarIcon props={<BsPlus size = "32"/>} />
                <SideBarIcon props={<BsPlus size = "32"/>} />
                <SideBarIcon props="ATIS" text = "Automatic Therapy Indentification System"/>
            </div>
        </React.Fragment>
    
        )
    }
}

