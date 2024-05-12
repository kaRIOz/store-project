import { FaListUl } from "react-icons/fa";

import { createQueryObject } from "../helpers/helper";

const categories = [
  { id: 1, type: "All" },
  { id: 2, type: "men's clothing" },
  { id: 3, type: "women's clothing" },
  { id: 4, type: "jewelery" },
  { id: 5, type: "electronics" },
];

function Sidebar({ query, setQuery }) {
  const categoryHandler = (e) => {
    const { tagName } = e.target;
    if (tagName !== "LI") return;

    const category = e.target.innerText.toLowerCase();

    setQuery((query) => createQueryObject(query, { category }));
  };

  return (
    <div className="bg-white rounded-2xl h-fit p-6 ml-2 border-2 border-gray-200 sticky top-8 w-60 hover:shadow-lg">
      <div className=" flex  items-center gap-x-2 mb-2 ">
        <FaListUl className="text-red-500" />
        <p className="font-semibold">categoreis</p>
      </div>
      <ul onClick={categoryHandler} className="text-base">
        {categories.map((item) => (
          <li
            className={
              item.type.toLowerCase() === query.category
                ? "bg-red-300  rounded-xl transition duration-200"
                : null
            }
            key={item.id}
          >
            {item.type}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
