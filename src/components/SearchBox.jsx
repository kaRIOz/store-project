import { ImSearch } from "react-icons/im";

import { createQueryObject } from "../helpers/helper";

function SearchBox({ search, setSearch, setQuery }) {
  const searchHandler = () => {
    setQuery((query) => createQueryObject(query, { search }));
  };

  return (
    <div className="mt-6 px-6 flex items-center">
      <input
        className="px-2 py-1 mr-2 focus:outline-none border-2 border-gray-300 rounded-2xl"
        type="text"
        placeholder="Search ..."
        value={search}
        onChange={(e) => setSearch(e.target.value.toLowerCase().trim())}
      />
      <button
        onClick={searchHandler}
        className="p-2  text-lg bg-red-500 text-white rounded-2xl cursor-pointer hover:bg-red-600"
      >
        <ImSearch />
      </button>
    </div>
  );
}

export default SearchBox;
