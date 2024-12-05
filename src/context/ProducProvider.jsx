import { useState } from "react";
import { ProductContext } from "./ProductContext";

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const findProduct = (id) => {
    const product = products.find((product) => product.id === parseInt(id));
    return product;
  };

  return (
    <ProductContext.Provider value={{ products, setProducts, findProduct }}>
      {children}
    </ProductContext.Provider>
  );
};
