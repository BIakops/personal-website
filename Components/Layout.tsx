import FootComp from "./FootComp"
import HeaderComp from "./HeaderComp"

const Layout = ({ children } : any) => {
    return (
        <div>
            <HeaderComp/>
            <div>
                {children}
            </div>
            <FootComp/>
        </div>
    )
    }
    
export default Layout