const SideBarIcon = ({props,text,data}:any) => {
    return(
        <a className="sideBar-Icon group" href={data} >
            {props}
            {text !=null && <span className="sidebar-tooltip group-hover:scale-100 transition-all duration-300">
                {text}
            </span>}
        </a>
    )
    }
export default SideBarIcon