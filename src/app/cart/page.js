"use client";
import {
  decreaseQuantity,
  increaseQuantity,
  selectCart,
  selectTotal,
} from "@/redux/features/cart/cartSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector(selectCart);
  const total = useSelector(selectTotal);

  const onIncrease = (item) => {
    dispatch(increaseQuantity(item));
  };

  const onDecrease = (item) => {
    dispatch(decreaseQuantity(item));
  };

  return (
    <main className="flex min-h-screen flex-wrap items-center justify-center p-24">
      <div className="flex w-full flex-col items-center justify-center">
        <h1 className="text-2xl font-bold">Cart</h1>
        <div className="flex w-full flex-col items-center justify-center ">
          {cart.map((item, key) => (
            <div
              key={item?.id || key}
              className="flex w-full flex-col items-center justify-center "
            >
              <div className="flex w-full flex-row items-center justify-between rounded-md hover:bg-slate-200">
                <div className="flex w-full items-start justify-start">
                  <img
                    className="h-24 w-24 object-cover"
                    src={item?.image}
                    alt={item?.name}
                  />
                  <div className="mx-3 ">
                    <h1 className="mb-2 text-lg font-bold">{item?.name}</h1>
                    <p className="mb-2 w-1/2 truncate text-sm text-gray-500">
                      {item?.description}
                    </p>
                    <h1 className="text-sm text-red-500 ">{item?.price}$</h1>
                  </div>
                </div>
                <div className="flex w-full flex-row items-center justify-center">
                  <div className="flex">
                    <button
                      onClick={() => onDecrease(item)}
                      className="mx-5 rounded-full bg-red-500 px-3 text-xl font-medium text-white hover:opacity-75"
                    >
                      -
                    </button>
                    <h1 className="text-lg font-medium ">{item?.quantity}</h1>
                    <button
                      onClick={() => onIncrease(item)}
                      className="mx-5 rounded-full bg-red-500 px-3 text-xl font-medium text-white hover:opacity-75"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
              <hr className="border-1 mb-3 w-full border-gray-300" />
            </div>
          ))}
        </div>
        <h1 className="text-2xl font-bold">Total: {total}</h1>
      </div>
    </main>
  );
}
