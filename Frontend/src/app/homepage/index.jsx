'use client';

import Hero from './Hero'
import BestSellingProducts from './BestSellingProducts'
import Catigories from './Catigories'
import ExploreProducts from './ExploreProducts'
import OurServices from '../Component/OurServices'
const HomePage = () => {
  return (
    <div className="">
      <Hero />
      <div className="container">
        <Catigories />
        <BestSellingProducts />
        <ExploreProducts />
        <OurServices />
      </div>
    </div>
  );
}

export default HomePage;
