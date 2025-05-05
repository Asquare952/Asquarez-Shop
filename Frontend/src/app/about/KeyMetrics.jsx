"use client";

import { OurMetrics } from "./utils/metricsData";
import { useState } from "react";
import Image from "next/image";

const KeyMetrics = () => {
  const [metrics, setMerics] = useState(OurMetrics);
  return (
    <>
      <section className="my-20">
        <div className="flex flex-col gap-3 md:flex-row md:justify-between">
          {metrics.map((items) => {
            const { id, image, description, metric } = items;
            return (
              <div
                key={id}
                className="flex flex-col  items-center gap-5 border text-blackShades-200 p-6 hover:bg-redShades-200 hover:text-white-200"
              >
                <div className="text-center bg-blackShades-200 p-3 rounded-full">
                  <span className="text-5xl text-greyShades-300">{image}</span>
                </div>
                
                  <h3 className="font-bold text-3xl">{metric}</h3>
                  <p className="font-normal text-base">{description}</p>
                
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default KeyMetrics;
