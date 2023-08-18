
import { useSelector } from "react-redux";
import playbtn from "../assets/demo.svg";
import { useNavigate , useLocation } from "react-router-dom";



const Navbar = () => {
  const navigate =useNavigate();
const location = useLocation();
const Cartlength = useSelector(state=>state?.Cart?.cartItems?.length);

  

const Data = useSelector(state=>state.Cart?.cartItems);
console.log(Data);

const showme =()=>{
navigate("/cart")
}


  return (
    <div>

    
   
<div className="bg-gradient-to-r from-purple-600 to-blue-400">
  <div className="max-w-[85rem] px-4 py-4 sm:px-6 lg:px-8 mx-auto">
   
    <div className="grid justify-center md:grid-cols-2 md:justify-between md:items-center gap-2">
      <div className="text-center md:text-left md:order-2 md:flex md:justify-end md:items-center">
        <p className="mr-5 inline-block text-sm font-semibold text-white">
          Ready to get started?
        </p>
        
       {
        location.pathname=="/cart" ? null:  <button onClick={showme} className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border-2 border-white font-medium text-white hover:bg-white hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 transition-all text-sm" >
       item  <span className="flex rounded-full bg-red-700 uppercase px-2 py-1 text-xs font-bold mr-3">{Cartlength}</span>
      </button>
       }
      
      </div>
     

      <div className="flex items-center">
        <p className="cursor-pointer py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md font-medium text-white hover:bg-white/[.1] focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 transition-all text-sm" >
  
        <img  src={playbtn} alt="play-btn" />
   
          Watch demo
        </p>
        <span className="inline-block border-r border-white/[.3] w-px h-5 mx-2"></span>
        <p className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md font-medium text-white hover:bg-white/[.1] focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 transition-all text-sm" >
          Explore what new
        </p>
      </div>
    
    </div>

  </div>
</div>

    
    </div>
  )
}

export default Navbar