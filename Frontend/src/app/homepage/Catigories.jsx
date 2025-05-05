"use client";

import { catigories } from "./utils/cartigoriesData";
import { useState } from "react";
import Image from "next/image";

const Catigories = () => {
  const [catigory, setCatigories] = useState(catigories);
  return (
    <>
      <section className="mb-44 flex flex-col gap-14">
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-4">
            <div className="bg-redShades-200 w-5 h-10 rounded"></div>
            <p className="font-semibold text-base text-redShades-200">
              Categories
            </p>
          </div>
          <h2 className="font-semibold text-xl lg:text-4xl">
            Browse By Category
          </h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 justify-between gap-3 items-center">
          {catigory.map((cati) => {
            const { id, image, text } = cati;
            return (
              <div
                key={id}
                className="flex flex-col items-center justify-center gap-2 border text-blackShades-200 rounded "
              >
                <Image
                  src={image}
                  width={700}
                  height={500}
                  alt={text}
                  className="h-48 object-fit "
                />
                <div className="bg-black w-full text-white-200 p-3">
                  <p className="text-center text-xs md:text-sm lg:text-lg">{text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Catigories;
