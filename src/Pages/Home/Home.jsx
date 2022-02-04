import React from 'react';
import Components from './AllComponent/Components';
import HeroSection from "./HeroSection/Index";
import HowCanWeHelp from "./HowCanWeHelp/Index";

const Home = () => {
  return <div>
      <HeroSection />
      <HowCanWeHelp />
      <Components />
  </div>;
};

export default Home;
