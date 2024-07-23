import React from 'react';
import Hero from './Hero';
import './Home.css';
import HomeServices from './HomeServices';
import StepsToFollow from './StepsToFollow';
import HomeFeatures from './HomeFeatures';
import BannerImg from './BannerImg';
import TeamSlider from './TeamSlider';
import FAQ from './FAQ';
import Map from './Map';


 function Home() {


  return (<>
   <Hero/>
   <HomeServices/>
   <StepsToFollow/>
   <HomeFeatures/>
   <BannerImg/>
   <TeamSlider/>
   <FAQ/>
   <Map/>
   </>)
}
export default React.memo(Home)