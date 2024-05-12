import React from "react";
import { Link } from "react-router-dom";

import { shortenText, productQuantity } from "../helpers/helper";
import { useCart } from "../context/CartContext";
// icons
import { TbListDetails } from "react-icons/tb";
import { TbShoppingBag } from "react-icons/tb";
import { MdDeleteOutline } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import { IoMdRemove } from "react-icons/io";
import { FaStar } from "react-icons/fa6";

function Card({ data }) {
  const {
    id,
    image,
    title,
    price,
    rating: { rate },
  } = data;

  // console.log(data);

  const [state, dispatch] = useCart();

  // console.log(state);

  const clickHandler = (type) => {
    dispatch({ type, payload: data });
  };

  const quantity = productQuantity(state, id);

  // console.log(quantity);

  return (
    <div className="card w-64 bg-white p-6 flex flex-col justify-end items-start border-2 border-gray-200 rounded-2xl hover:shadow-md transition ease-in">
      <img src={image} alt={title} className="w-60 h-60 p-5 mb-5 bg-white" />
      <h3 className="font-bold text-red-500">{shortenText(title)}</h3>
      <div className="w-full flex justify-between my-1">
        <p className="font-bold text-blue-950">{price}</p>
        <p className="flex items-center font-bold text-blue-950">
          {rate}
          <FaStar className="text-yellow-400 ml-1" />
        </p>
      </div>
      <div className="w-full flex justify-between items-center mt-1">
        <Link to={`/products/${id}`}>
          <TbListDetails className="text-red-500 text-xl" />
        </Link>
        <div>
          <div>
            {quantity === 1 && (
              <button onClick={() => clickHandler("REMOVE_ITEM")}>
                <MdDeleteOutline />
              </button>
            )}
            {quantity > 1 && (
              <button onClick={() => clickHandler("DECREASE")}>
                <IoMdRemove />
              </button>
            )}
            {!!quantity && (
              <span className="font-bold text-lg ml-2 border-b-2 border-gray-500">
                {quantity}
              </span>
            )}
            {quantity === 0 ? (
              <button onClick={() => clickHandler("ADD_ITEM")}>
                <TbShoppingBag />
              </button>
            ) : (
              <button onClick={() => clickHandler("INCREASE")}>
                <IoMdAdd />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
