import { useContext } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import {Cart} from '../context/CartContext';
import { useNavigate } from 'react-router-dom';


function CartBtn() {
  const navigate = useNavigate();
 const handleNavigate = () => {
    navigate("/cart");
  };

  const {state:{cart}} = useContext(Cart);

  return (
    <button className="cart p-2 relative" onClick={handleNavigate}>
    <span className="p-1 rounded-full bg-red-600 font-bold absolute md:left-7 md:bottom-5 left-6 bottom-4 text-sm h-7 w-7">
     {cart.length}
    </span>
    <FaShoppingCart className="md:text-2xl text-[1.4rem]" />
  </button>
  )
}

export default CartBtn