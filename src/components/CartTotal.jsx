import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function CartTotal({product}) {
  const [total,setTotal] = useState(0);
  
  const navigate = useNavigate();
 const handleNavigate = () => {
    navigate("/checkout");
  };



  useEffect(()=>{
    setTotal((product.reduce((acc,curr)=> acc + Number(curr.price*curr.qty) ,0)).toFixed(2))
  },[product])

  return (
    <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
      <div className="mb-2 flex justify-between">
        <p className="text-gray-700">Subtotal</p>
        <p className="text-gray-700">$ {total} USD</p>
      </div>

      <hr className="my-4" />
      <div className="flex justify-between">
        <p className="text-lg font-bold">Total</p>
        <div className="">
          <p className="mb-1 text-lg font-bold">${total} USD</p>
          <p className="text-sm text-gray-700">including GST</p>
        </div>
      </div>
     
      <button disabled={Number(total) === 0 ? true:false} onClick={handleNavigate} className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600 disabled:bg-slate-500">
        Check out
      </button>
    </div>
  );
}

export default CartTotal;
