import Image from "next/image";

const AboutHero = () => {
  return (
    <>
      <section className="mt-16">
        <div className="flex flex-col-reverse gap-6 lg:flex-row lg:justify-between lg:items-center ">
          <div className="flex flex-col gap-8">
            <h3 className="font-semibold text-2xl">Our Story</h3>
            <p className="font-normal text-base lg:w-[500px]">
              Launced in 2025, Asquarez Tech is West Africa’s premier online
              shopping marketplace for laptops with an active presense in
              Nigeria. Supported by wide range of tailored marketing, data and
              service solutions, Asquarez Tech has 4 major laptop brands and
              serves 3 Million customers across the region.{" "}
            </p>
            <p className="font-normal text-base lg:w-[505px]">
              Asquarez Tech has more than 1 Million products to offer, growing
              at a very fast. Asquarez Tech offers a diverse assotment in
              categories ranging from consumer.
            </p>
          </div>
          {/* <div> */}
          <Image
            src="/Assets/about-hero-image.png"
            width={837}
            height={550}
            alt="name"
            // style={{ width: "100%", height: "auto" }}
            // className="responsive-img"
          />
          {/* </div> */}
        </div>
      </section>
    </>
  );
};

export default AboutHero;
