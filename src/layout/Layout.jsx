import { Link } from "react-router-dom";

import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { useCart } from "../context/CartContext";

function Layout({ children }) {
  const [state] = useCart();
  return (
    <>
      <header className="bg-red-500 text-white my-4 p-4 rounded-2xl flex justify-between items-center">
        <Link to="/products" className="font-bold tracking-wide">
          online shop
        </Link>
        <div className="relative">
          <Link to="/checkout">
            <PiShoppingCartSimpleBold className="text-2xl mr-4" />
            {!!state.itemsCounter && (
              <span className="absolute text-black font-bold w-6 h-6 bottom-2 left-6  bg-white rounded-full grid place-items-center">
                {state.itemsCounter}
              </span>
            )}
          </Link>
        </div>
      </header>
      {children}
      <footer className="bg-red-500 text-white my-4 p-4 rounded-2xl text-center">
        <p>developed by 🤍</p>
      </footer>
    </>
  );
}

export default Layout;
