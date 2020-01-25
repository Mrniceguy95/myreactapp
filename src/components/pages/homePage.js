import React from 'react';

//components
import HomeSwiper from '../homeSwiperComponent/homeSwiper'

// const imgPath = process.env.PUBLIC_URL + '/assets/images/';

function HomePage() {
  return ( 
    <div className="home-hero">
      <div className="hero">
          <HomeSwiper />
      </div>
      </div>
  );
}

export default HomePage;
