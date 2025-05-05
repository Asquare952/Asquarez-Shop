"use client";

import Modal from "../Component/Modal";
import Image from "next/image";
import Link from "next/link";
import { FaRegHeart } from "react-icons/fa";
import { IoFilterOutline } from "react-icons/io5";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import { useFilter } from "@/app/context/FilterContext";
import { useWish } from "@/app/context/WishListContext";



const Product = () => {
  const {
    product,
    filterVisibility,
    clearFilters,
    filters,
    toggleFilter,
    handleFilterChange,
  } = useFilter();
  const { addToWishList } = useWish();
  const [modal, setModal] = useState(false);

  const handleModal = () => {
    setModal(!modal);
  };
  return (
    <>
      <section className="pt-[30px]">
        <section className="flex gap-6">
          <div className="hidden md:flex md:flex-col gap-5">
            <h1>Filters</h1>
            <div>
              <button
                className="border-none bg-redShades-200 py-4 px-12 text-white-200 rounded text-left"
                onClick={clearFilters}
              >
                Clear All Filters
              </button>
            </div>

            <div className="flex flex-col gap-4">
              <div
                className={
                  filterVisibility.brands
                    ? "flex flex-col gap-4 shadow-md bg-white-200 p-3 w-52 h-60"
                    : "flex flex-col gap-4 shadow-md bg-white-200 p-3 w-52 h-12"
                }
              >
                <button
                  className="flex justify-between items-center"
                  onClick={() => toggleFilter("brands")}
                >
                  Brands Filter
                  {filterVisibility.brands ? (
                    <IoIosArrowUp />
                  ) : (
                    <IoIosArrowDown />
                  )}
                </button>
                {/* </div> */}
                {filterVisibility.brands && (
                  <div className="flex flex-col gap-4">
                    {["Dell", "Hp", "Lenovo", "Asus"].map((brand) => (
                      <label key={brand}>
                        <input
                          type="checkbox"
                          value={brand}
                          checked={filters.brand.includes(brand)} // Ensure React tracks state
                          onChange={() => handleFilterChange("brand", brand)}
                          className="pr-1"
                        />
                        {brand}
                      </label>
                    ))}
                  </div>
                )}
              </div>

              {/* categories filter container */}
              <div
                className={
                  filterVisibility.categories
                    ? "flex flex-col gap-4 shadow-md bg-white-200 p-3 w-52 h-52"
                    : "flex flex-col gap-4 shadow-md bg-white-200 p-3 w-52 h-12"
                }
              >
                <button
                  className="flex justify-between items-center"
                  onClick={() => toggleFilter("categories")}
                >
                  Catigory Filter
                  {filterVisibility.categories ? (
                    <IoIosArrowUp />
                  ) : (
                    <IoIosArrowDown />
                  )}
                </button>
                {filterVisibility.categories && (
                  <div className="flex flex-col gap-4">
                    {["Business", "Gaming", "Student"].map((category) => (
                      <label key={category} className="p-2">
                        <input
                          type="checkbox"
                          value={category}
                          checked={filters.category.includes(category)}
                          onChange={() =>
                            handleFilterChange("category", category)
                          }
                        />
                        {category}
                      </label>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <div className="pb-6 flex justify-between items-center">
              <h1>Products</h1>
              <button
                className="flex gap-4 items-center md:hidden border text-greyShades-400 rounded p-2 py-1 px-5"
                onClick={handleModal}
              >
                <span className=" text-blackShades-200">Filter</span>
                <IoFilterOutline className=" text-blackShades-200" />
              </button>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {product.length > 0 ? (
                product.map((item) => {
                  const { id, name, images, price } = item;
                  return (
                    <Link
                      href={`/products/${item.id}`}
                      key={id}
                      className="flex flex-col gap-4"
                    >
                      <div className=" relative  bg-greyShades-400  rounded  h-52">
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
                })
              ) : (
                <div className=" flex justify-center items-center">
                  <p>No matching products found.</p>
                </div>
              )}
            </div>
          </div>
        </section>
      </section>

      {modal && <Modal openModal={modal} toggleModal={handleModal} />}
    </>
  );
};

export default Product;
