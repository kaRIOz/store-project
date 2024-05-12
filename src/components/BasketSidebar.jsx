function BasketSidebar({ state, clickHandler }) {
  return (
    <div className="p-2 h-fit md:col-span-1 max-w-64 border-2 border-gray-200 rounded-3xl space-y-2">
      <div className="flex font-medium">
        <p className="text-red-500 opacity-60">total : </p>
        <span className="ml-2">{state.total} $</span>
      </div>
      <div className="flex font-medium">
        <p className="text-red-500 opacity-60">quantity : </p>
        <span className="ml-2">{state.itemsCounter}</span>
      </div>
      <div className="flex font-medium">
        <p className="text-red-500 opacity-60">status : </p>
        <span className="ml-2">
          {!state.checkout ? "pending ..." : "checkout"}
        </span>
      </div>
      <button
        className="bg-red-500 text-white w-full  font-medium px-2 py-1 rounded-2xl hover:bg-red-600"
        onClick={() => clickHandler("CHECKOUT")}
      >
        checkout
      </button>
    </div>
  );
}

export default BasketSidebar;
