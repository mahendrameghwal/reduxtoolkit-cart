import { useDispatch, useSelector } from "react-redux";
import { FetchProduct, Addcart } from "../slices/Cartslice";
import { useEffect } from "react";
import { motion } from "framer-motion";


const Hero = () => {
  const dispatch = useDispatch();
  const product = useSelector(state => state?.Cart);
  const productdata = useSelector(state => state?.Cart?.data);

   
console.log(product);
  const items = {
    hidden: {
      opacity: 0,
      pathLength: 0,
      fill: "rgba(255, 255, 255, 0)"
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      fill: "rgba(255, 255, 255, 1)"
    }
  };



  useEffect(() => {
    dispatch(FetchProduct());
  }, [dispatch]);


  const HandleCart =(item)=>{
  

    dispatch(Addcart(item))

  }

   
  return (
    <motion.div  

    className="flex  flex-wrap gap-1 justify-around ">
      {product?.isloading || !productdata  ?  (
        <span className="grid text-4xl text-white-700 place-items-center text-center backdrop-blur-sm bg-white/75 z-50 absolute w-full h-screen">loading please wait..</span>
      ) : (
       
          productdata.products.map((item)=>(
            <motion.div   initial="hidden"
            animate="visible"
            transition={{
              default: { duration: 1, ease: "easeInOut" },
              fill: { duration: 1, ease: [1, 0, 0.8, 1] }
            }}  key={item.id}  variants={items}  className=" cursor-pointer flex w-72 my-9 flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
            <img  
           className="items-stretch object-cover h-56 m-1 rounded-t-xl" src={item.thumbnail} alt="Image Description" />
            <div className=" md:p-5">
              <h3 className="text-lg font-bold text-gray-800 dark:text-white">
               {item.title}
              </h3>
              <p className="mt-1 text-gray-800 dark:text-gray-400">
              {
                item.description 
              }
              </p>
              <button onClick={()=>{HandleCart(item)}} className="mt-2 py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800" href="#">
               Add to cart 
              </button>
            </div>
          </motion.div>
          )
          )
    
      )
    }
    </motion.div>
  );
};

export default Hero;
