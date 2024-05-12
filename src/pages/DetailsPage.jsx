import Loader from "./../components/Loader";

import { useProdectDetails } from "../context/ProductContext";
import { Link, useParams } from "react-router-dom";

import { IoArrowBack } from "react-icons/io5";

function DetailsPage() {
  const { id } = useParams();
  const productDetails = useProdectDetails(+id);

  console.log(productDetails);

  if (!productDetails) return <Loader />;

  return (
    <div className="w-9/12 mx-auto flex flex-col md:flex-row  gap-2">
      <img
        className="w-full md:w-64 object-contain bg-white rounded-3xl border-2 border-gray-200 p-3"
        src={productDetails.image}
        alt={productDetails.title}
      />
      <div className="border-2 gap-3 border-gray-200 rounded-3xl p-2">
        <h3 className="font-bold text-xl mb-12 mt-2">{productDetails.title}</h3>
        <p className="text-slate-500 font-semibold my-6">
          {productDetails.description}
        </p>
        <p className="text-slate-500 mb-2">
          category : {productDetails.category}
        </p>
        <div className="flex justify-between">
          <span className="font-semibold">
            price : {productDetails.price} $
          </span>
          <Link
            className="bg-red-500 hover:bg-red-400 text-white p-2 rounded-3xl font-semibold flex items-center"
            to="/products"
          >
            <IoArrowBack />
            back to main page
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DetailsPage;
