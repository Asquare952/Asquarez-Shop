"use client";

import { useState } from "react";
import { Products } from "../utils/productsData";
import Image from "next/image";
import Link from "next/link";
import { FaRegHeart } from "react-icons/fa";
import { useWish } from "@/app/context/WishListContext";

const ExploreProducts = () => {
  const { addToWishList } = useWish();
  const [product, setProduct] = useState(Products);
  return (
    <>
      <section className="flex flex-col gap-14 mb-44">
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-4">
            <div className="bg-redShades-200 w-5 h-10 rounded"></div>
            <p className="font-semibold text-base text-redShades-200">
              Our Products
            </p>
          </div>
          <h2 className="font-semibold text-xl lg:text-4xl">
            Explore Our Products
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {product.slice(1, 9).map((item) => {
            const { id, name, images, price } = item;
            return (
              <Link
                href={`/products/${id}`}
                key={id}
                className="flex flex-col gap-4"
              >
                <div className=" relative  bg-greyShades-400  rounded h-52">
                  <div className="flex justify-center items-center mt-14">
                    <Image
                      src={images}
                      width={120}
                      height={180}
                      alt={name}
                      className="w-[150] object-cover"
                    />
                  </div>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      addToWishList(item);
                    }}
                    className=" absolute bg-white-200 p-2 rounded-full top-2 right-2"
                  >
                    <FaRegHeart />
                  </button>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="font-medium text-base ">{name}</p>
                  <span className="font-medium text-base text-redShades-200">
                    ₦{price}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="text-center">
          <button className="border-none bg-redShades-200 py-4 px-12 text-white-200 rounded">
            <Link href="/products" className="font-medium text-base">
              View All Products
            </Link>
          </button>
        </div>
      </section>
    </>
  );
};

export default ExploreProducts;
