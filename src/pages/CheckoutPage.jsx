import BasketCard from "../components/BasketCard";
import { useCart } from "../context/CartContext";

import bag from "../assets/bag.png";
import BasketSidebar from "../components/BasketSidebar";

function CheckoutPage() {
  const [state, dispatch] = useCart();

  const clickHandler = (type, payload) => dispatch({ type, payload });
  // console.log(state);

  return (
    <>
      <div className="w-4/5 mx-auto grid md:grid-cols-3 gap-5">
        <BasketSidebar state={state} clickHandler={clickHandler} />
        <div className="md:col-span-2">
          {!state.selectedItems.length && (
            <div className="flex justify-center p-10">
              <img src={bag} />
            </div>
          )}
          {state.selectedItems.map((product) => (
            <BasketCard
              key={product.id}
              data={product}
              clickHandler={clickHandler}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default CheckoutPage;
