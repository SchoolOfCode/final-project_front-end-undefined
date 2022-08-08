import Image from "next/image";
import logo from "../public/logo.png";

const Logo = () => {
    return ( 
    <Image src={logo} alt={"logo"} width={"150px"} height={"50px"} />

     );
}
 
export default Logo;