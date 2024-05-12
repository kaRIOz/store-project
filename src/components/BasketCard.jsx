import { shortenText } from "../helpers/helper";

import { MdDeleteOutline } from "react-icons/md";
import { IoMdRemove } from "react-icons/io";
import { IoMdAdd } from "react-icons/io";

function BasketCard({ data, clickHandler }) {
  const { image, title } = data;
  return (
    <div className="basket  mx-auto  flex justify-between items-center border-2 border-gray-200 rounded-3xl p-2 mb-2">
      <img className="w-20 h-20 object-contain" src={image} alt={title} />
      <p className="font-semibold">{shortenText(title)}</p>

      <div>
        {data.quantity === 1 && (
          <button onClick={() => clickHandler("REMOVE_ITEM", data)}>
            <MdDeleteOutline />
          </button>
        )}
        {data.quantity > 1 && (
          <button onClick={() => clickHandler("DECREASE", data)}>
            <IoMdRemove />
          </button>
        )}
        <span>{data.quantity}</span>
        <button onClick={() => clickHandler("INCREASE", data)}>
          <IoMdAdd />
        </button>
      </div>
    </div>
  );
}

export default BasketCard;
