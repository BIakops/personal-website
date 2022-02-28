import FootComp from "./FootComp";
import HeaderComp from "./HeaderComp";

const layout = ({props}: any) => {
    return ( <div>
        <HeaderComp/>
            {props}
        <FootComp/>
    </div>);
}
export default layout;