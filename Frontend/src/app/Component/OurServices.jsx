"use client";
import { Services } from "./utils/servicesData";
import { useState } from "react";
import Image from "next/image";

const OurServices = () => {
  const [service, setService] = useState(Services);
  return (
    <>
      <section className="container-2 mb-44">
        <div className="flex flex-col gap-9 md:flex-row justify-between md:items-center">
          {service.map((items) => {
            const { id, title, description, image } = items;
            return (
              <div key={id} className="flex flex-col items-center gap-6">
                <div className="bg-blackShades-200 rounded-full p-3">
                  <Image src={image} width={40} height={40} alt="services" />
                </div>
                <div className="flex flex-col gap-2 items-center">
                  <h3 className="font-semibold text-sm lg:text-xl">{title}</h3>
                  <p className="font-normal text-sm">{description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default OurServices;
