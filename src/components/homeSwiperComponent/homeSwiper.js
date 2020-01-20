import React from 'react';
import Swiper from 'react-id-swiper';
// Version >= 2.4.0
import 'swiper/css/swiper.css';

const imgPath = process.env.PUBLIC_URL + '/assets/images/'

function HomeSwiper() {
    const params = {
        loop: true,
          autoplay: {
             delay: 2500,
             disableOnInteraction: true,
             },
      
          // If we need pagination
          pagination: {
            el: '.swiper-pagination'
        }
    }
    return (
        <Swiper {...params}>
            <div className="swiper-slide">
                <div className="hero-text">
                    <p>Quieres compartir tus asientos?
                        <span style={{color: '#6c63ff'}}> acola.me</span> te ayuda
                    </p>
                    <a href="/sharedride.html">Comenzar</a>
                </div>
                <div className="hero-img">
                    <img src={`${imgPath}hero.svg`} alt="hero"/>
                </div>
            </div>
            <div className="swiper-slide sl2">
                <div className="hero-text">
                    <p>No te arriesgues a sufrir un accidente
                        <span style={{color: '#6c63ff'}}> Consulta el estado de las vías</span>
                    </p>
                    <a href="/vias.html">Comenzar</a>
                </div>
                <div className="hero-img">
                    <img src={`${imgPath}towing.svg`} alt="hero"/>
                </div>
            </div>
            <div className="swiper-slide">
                <div className="hero-text">
                    <p>Consulta tus obligaciones con la ANT
                        <span style={{color: '#6c63ff'}}> Gratis!</span>
                    </p>
                    <a href="/ant.html">Comenzar</a>
                </div>
                <div className="hero-img">
                    <img src={`${imgPath}ant.svg`} alt="hero"/>
                </div>
            </div>
        </Swiper>
    );
}

export default HomeSwiper;

