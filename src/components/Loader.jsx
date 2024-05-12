import { Puff } from "react-loader-spinner";

function Loader() {
  return (
    <div className="w-full h-96 flex justify-center items-center">
      <Puff color="#ff11008f" />
    </div>
  );
}

export default Loader;
