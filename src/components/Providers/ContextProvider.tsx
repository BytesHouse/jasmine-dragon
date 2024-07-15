"use client";
import { prisma } from "../../../db";

import { createContext, useState, useContext, useEffect } from "react";

const ProductContext = createContext<any>(null);

export const ProductProvider = ({ children, products }: any) => {
  const [productsList, setProducts] = useState([]);
  useEffect(() => {
    setProducts(products);
  }, [products]);

  return (
    <ProductContext.Provider value={{ productsList, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => useContext(ProductContext);
