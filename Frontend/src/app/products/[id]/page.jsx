"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { Products } from "../../utils/productsData";
import { FaRegHeart } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { GrCycle } from "react-icons/gr";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/app/context/CartContext";
import { useWish } from "@/app/context/WishListContext";

const page = () => {
  const { addToCart } = useCart();
  const { addToWishList } = useWish();
  const [quantity, setQuantity] = useState(1);

  const increase = () => {
    setQuantity((prev) => prev + 1);
  };
  const decrease = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };
  const { id } = useParams();
  const product = Products.find((item) => item.id.toString() === id);
  if (!product) {
    return <p>Product not found</p>;
  }
  return (
    <section className="container">
      <section className="pt-[50px]">
        <div className="md:flex gap-9">
          {/* product image */}
          <div className=" bg-greyShades-400 w-full max-w-lg rounded h-[410px] py-5">
            <div className="flex justify-center items-center pt-[30px]">
              <Image
                src={product.images}
                width={446}
                height={180}
                alt={product.name}
                className=""
              />
            </div>
          </div>

          {/* descriptions */}
          <div className="flex flex-col gap-5">
            {/*  */}
            <div className="flex flex-col gap-2">
              <h2 className="font-semibold text-2xl">{product.name}</h2>
              <span className="font-normal text-2xl text-redShades-200">₦{product.price}</span>
              <p className="font-normal text-sm">{product.description}</p>
            </div>
            {/*  */}
            <hr />
            {/*  */}
            <div className="flex items-center gap-5">
              <div className="flex items-center border text-blackShades-200 rounded overflow-hidden">
                <button
                  onClick={decrease}
                  className="w-full hover:bg-redShades-200 hover:text-white-200 py-2 md:py-[12px] px-[13px] md:px-[20px] rounded"
                >
                  <FaMinus />
                </button>
                <div className="w-[1px] h-[40px] bg-[#ccc]"></div>
                <div className="px-2  md:px-10">{quantity}</div>
                <div className="w-[1px] h-[40px] bg-[#ccc]"></div>
                <button
                  onClick={increase}
                  className="w-full hover:bg-redShades-200 hover:text-white-200 py-2 md:py-[12px] px-[13px] md:px-[20px] rounded"
                >
                  <FaPlus />
                </button>
              </div>
              <div>
                <button
                  className="bg-redShades-200 text-white-200 rounded px-12 py-2 inline-flex"
                  onClick={() => addToCart(product)}
                >
                  Add to cart
                </button>
              </div>
              <div
                onClick={() => addToWishList(product)}
                className=" cursor-pointer border text-blackShades-200 rounded p-2"
              >
                <FaRegHeart />
              </div>
            </div>
            {/*  */}
            <div className="flex flex-col gap-3 border text-blackShades-200 rounded">
              <div className="flex gap-3 items-center p-3">
                <div>
                  <TbTruckDelivery className="text-4xl" />
                </div>
                <div>
                  <h4>Free Delivery</h4>
                  <Link href="#" className=" underline">
                    Enter your postal code for Delivery Availability
                  </Link>
                </div>
              </div>
              <hr className="w-full" />
              <div className="flex gap-3 items-center p-3">
                <div>
                  <GrCycle className="text-4xl" />
                </div>
                <div>
                  <h4>Return Delivery</h4>
                  <p>
                    Free 30 Days Delivery Returns.{" "}
                    <Link href="#" className="underline">
                      Details
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-14 mt-44 mb-40">
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-4">
            <div className="bg-redShades-200 w-5 h-10 rounded"></div>
            <p className="font-semibold text-base text-redShades-200">
              Related Items
            </p>
          </div>
          <h2 className="font-semibold text-xl lg:text-4xl"></h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {Products.slice(1, 5).map((item) => {
            const { id, name, images, price } = item;
            return (
              <Link
                href={`/products/${item.id}`}
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
                      addToWishList(product);
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
      </section>
    </section>
  );
};

export default page;
