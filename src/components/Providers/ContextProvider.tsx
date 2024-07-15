"use client";
import { TeaProduct } from "@/types/tea-product.type";

import { createContext, useState, useContext } from "react";

const ProductContext = createContext<any>(null);

export const ProductProvider = ({
  children,
  products,
}: {
  children: React.ReactNode;
  products: TeaProduct[];
}) => {
  const [productsList, setProducts] = useState<TeaProduct[]>(products);

  return (
    <ProductContext.Provider value={{ productsList, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => useContext(ProductContext);
