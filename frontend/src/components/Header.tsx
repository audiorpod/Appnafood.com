import { Link } from "react-router-dom";

const Header = () => {
  return(
    <div className=" border-b-2 border-orange-500 py-6">
        <div className="container mx-auto flex justify-between items-centre">
            <Link to='/'  // where this link gose to 
            className="text-3xl font tracking-tight text-orange-500">
                AppnaFood.Zon
            </Link>
        </div>   
    </div>
  )
}

export default Header;