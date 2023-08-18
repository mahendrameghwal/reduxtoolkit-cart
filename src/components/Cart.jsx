import { useDispatch , useSelector } from "react-redux"
import { Removecart,ClearCart } from "../slices/Cartslice";
import {useState } from "react";
import { useNavigate } from "react-router-dom";


const Cart = () => {
const navigate = useNavigate()
const dispatch = useDispatch();
const AddedCartdata = useSelector(state=>state?.Cart?.cartItems);
const [Counter,setCounter]= useState(1);
const [ShowPayment,setShowPayment]= useState(1);





const data =AddedCartdata.reduce((acc,curr)=>{
    return acc + curr.price;
  
},0)
console.log(data);


  return (
    <div className="container  mx-auto mt-10">
    {
      ShowPayment &&
    <div className="py-1 flex z-50 bg-green-400 w-1/3 mx-3 px-2 rounded-md"><svg className="fill-current  h-6 w-6 text-teal-800 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg>payment success</div>

    }
    <div className="flex shadow-md my-10">
      {
        AddedCartdata?.length <=0? <div className="w-3/4 min-h-screen  bg-white px-10 grid place-content-center"><h2 className="text-xl">No item for show</h2></div>:


        <div className="w-3/4 bg-white px-10 py-10">
        <div className="flex justify-between border-b pb-8">
          <button onClick={()=>{dispatch(ClearCart())}} className="font-semibold text-base px-2 py-1 rounded-lg text-yellow-50 bg-red-400">remove all items</button>
          <h2 className="font-semibold text-2xl">total item:{AddedCartdata?.length}</h2>
        </div>
        <div className="flex mt-10 mb-5">
          <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
          <h3 className="font-semibold  text-gray-600 text-xs uppercase w-1/5 text-center">Quantity</h3>
          <h3 className="font-semibold  text-gray-600 text-xs uppercase w-1/5 text-center">Price</h3>
          <h3 className="font-semibold  text-gray-600 text-xs uppercase w-1/5 text-center">Total</h3>
        </div>
        {
        AddedCartdata?.map(item=>(
   
          <div key={item.id} className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
          <div  className="flex w-2/5"> 
            <div className="w-20">
              <img className="h-24 object-contain" src={item.images[0]} alt="items"/>
            </div>
            <div className="flex flex-col justify-between ml-4 flex-grow">
              <span className="font-bold text-sm">{item.title}</span>
              <span className="text-red-500 text-xs">{item.brand}</span>
              <button onClick={()=>{dispatch(Removecart(Number(item.id)))}} className="font-semibold hover:text-red-500 text-gray-500 text-xs">Remove</button>
            </div>
          </div>
          <div className="flex justify-center w-1/5">
           {
            Counter >1 &&
            <button   onClick={()=>{setCounter(Counter-1)}}>
            <svg  className="fill-current text-gray-600 w-3" viewBox="0 0 448 512"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
            </svg>
            </button>
           }
          
            <span className="mx-2 border text-center w-8" type="text" >{Counter}</span>
          
           {
           Counter<5&& <svg onClick={()=>{setCounter(Counter+1)}} className="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
            <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
          </svg>
           }
          </div>
          <span className="text-center w-1/5 font-semibold text-sm">{item.price}</span>
          <span className="text-center w-1/5 font-semibold text-sm">{item.price*Counter}</span>
          </div>
        ))}

        

   

        <button onClick={()=>{navigate("/")}}  className="flex font-semibold text-indigo-600 text-sm mt-10">
      
          <svg className="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z"/></svg>
          Continue Shopping
        </button>
      </div>

      }
      <div  className="w-1/4 px-8 py-10">
        <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
        
        
        
        
        <div className="border-t mt-8">
          <div className="flex font-semibold justify-between py-6 text-sm uppercase">
            <span>Total cost</span>
            <span>{data*Counter}</span>
          </div>
          <button onClick={()=>{setShowPayment(!ShowPayment)}} className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">Checkout</button>
        </div>
      </div>

    </div>
  </div>
  )
}

export default Cart