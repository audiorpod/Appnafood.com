import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";
import MainNav from "./MainNav";

const Header = () => {
  return(
    <div className=" border-b-2 border-orange-500 py-6">
        <div className="container mx-auto flex justify-between items-centre">
            <Link to='/'  // where this link gose to 
            className="text-3xl font tracking-tight text-orange-500">
                AppnaFood.Zone
            </Link>
            <div className="md:hidden">   
              <MobileNav/>
            </div>
            <div className="hidden md:block">
              <MainNav />
            </div>
        </div>   
    </div>
  )
}

export default Header;