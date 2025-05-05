"use client";

import Link from "next/link";
import Image from "next/image";
import { useWish } from "@/app/context/WishListContext";

const page = () => {
  const { wishItems, removeFromWishList, clearWishList } = useWish();

  return (
    <section className="container">
      <h1 className="pt-[30px]">
        My Wish List
      </h1>
      <section className="pt-[50px] grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {wishItems.length === 0 ? (
          <p>Your Wish List Is Empty</p>
        ) : (
          wishItems.map((item) => {
            return (
              <Link
                href={`/products/${item.id}`}
                key={item.id}
                className="flex flex-col gap-4"
              >
                <div className=" relative  bg-greyShades-400  rounded  h-52">
                  <div className="flex justify-center items-center mt-14">
                    <Image
                      src={item.images}
                      width={120}
                      height={180}
                      alt={item.name}
                      className="w-[150] object-cover"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="font-medium text-base ">{item.name}</p>
                  <span className="font-medium text-base text-redShades-200">
                    ₦{item.price}
                  </span>
                  <div
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      removeFromWishList(item.id);
                    }}
                  >
                    <button className="bg-redShades-200 text-white-200 rounded px-5 py-2">
                      Remove
                    </button>
                  </div>
                </div>
              </Link>
            );
          })
        )}
      </section>

      {wishItems.length > 0 && (
        <div onClick={clearWishList} className=" flex justify-center mt-5">
          <button className="bg-redShades-200 text-white-200 rounded px-12 py-2">
            Remove All
          </button>
        </div>
      )}
    </section>
  );
};

export default page;
