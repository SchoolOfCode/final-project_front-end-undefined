import Image from "next/image";
import logo from "../public/logo.png";

const Logo = () => {
    console.log('this is saerch status....')
    
    // if (smallSearch === true ) {
        return ( 
        
        <>

       <Image src={logo} alt={"logo"} width={"150px"} height={"50px"} style={{zIndex:99}}/>        </>


     ) 
}
 
export default Logo;