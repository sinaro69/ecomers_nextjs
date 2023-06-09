"use client";
import React from "react";
import CardProduct from "@/components/CardProduct";
import {
  fetchProducts,
  selectAllProducts,
  selectProductStatus,
} from "@/redux/features/product/productSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  // fetch data from API using redux
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts({ limit: 21, offset: 0 }));
  }, []);

  const products = useSelector(selectAllProducts);
  const productsStatus = useSelector(selectProductStatus);
  console.log("productsStatus", productsStatus);
  console.log("products", products);

  if (productsStatus === "loading") {
    return (
      <main className="flex min-h-screen flex-wrap items-center justify-start p-24">
        <div className="flex w-full items-center justify-center">
          <div className="flex h-12 w-12 animate-spin items-center justify-center rounded-full border-t-2 border-gray-900"></div>
        </div>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen flex-wrap items-center justify-center p-24">
      {products.map((product, key) => (
        <CardProduct key={product?.id || key} {...product} />
      ))}
    </main>
  );
}
