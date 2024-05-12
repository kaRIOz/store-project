import { createContext, useContext, useEffect, useState } from "react";
import api from "../services/config";

const ProductContext = createContext();

function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setProducts(await api.get("/products"));
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchProducts();
  }, []);
  return (
    <ProductContext.Provider value={products}>
      {children}
    </ProductContext.Provider>
  );
}

const useProducts = () => {
  const product = useContext(ProductContext);
  return product;
};

const useProdectDetails = (id) => {
  const product = useContext(ProductContext);

  const result = product.find((product) => product.id === id);

  return result;
};

export default ProductsProvider;

export { useProducts, useProdectDetails };
