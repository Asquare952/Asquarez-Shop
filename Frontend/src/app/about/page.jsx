import AboutHero from "./AboutHero";
import KeyMetrics from "./KeyMetrics";
import OurServices from "../Component/OurServices";

const page = () => {
  return (
    <div className="container  pb-20">
      <AboutHero />
      <KeyMetrics/>
      <OurServices/>
    </div>
  );
};

export default page;
