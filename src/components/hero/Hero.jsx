import React from 'react';
import './Hero.css'

import Slider from "react-slick";
import Button from '../Shared/Button';
import Image1 from "../../assets/hero/headphone.png";
import Image2 from "../../assets/category/vr.png";
import Image3 from "../../assets/category/macbook.png";
import Image4 from "../../assets/category/earphone.png";
import Image5 from "../../assets/category/watch.png";
import Image6 from "../../assets/category/speaker.png";
import Footer from '../Footer/Footer';

const HeroData = [
  {
    id: 1,
    img: Image1,
    subtitle: 'Beats Solo',
    title: 'Wireless',
    title2: 'Headphone',
  },
  {
    id: 2,
    img: Image2,
    subtitle: 'Virtual Reality',
    title: 'Wireless',
    title2: 'Virtual',
  },
  {
    id: 3,
    img: Image3,
    subtitle: 'Apple',
    title: 'Branded',
    title2: 'Laptops',
  },
];

const Hero = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: true,
    pauseOnFocus: true,
  };

  return (
    <div className='container'>
      <div className='overflow-hidden rounded-3xl min-h-[550px] sm:min-h-[650px] hero-bg-color flex justify-center items-center'>
        <div className='container pb-8 sm:pb-0'>
          <Slider {...settings}>
            {HeroData.map((data) => (
              <div key={data.id}>
                <div className='grid grid-cols-1 sm:grid-cols-2 items-center'>
                  {/* Text content section */}
                  <div className='flex flex-col justify-center gap-4 sm:pl-3 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10'>
                    <h1 className='text-2xl sm:text-6xl lg:text-2xl font-bold'>
                      {data.subtitle}
                    </h1>
                    <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold'>
                      {data.title}
                    </h1>
                    <h1 className='text-5xl uppercase text-white dark:text-white/5 sm:text-[80px] md:text-[100px] xl:text-[150px] font-bold'>
                      {data.title2}
                    </h1>
                    <Button text="Shop Now" bgcolor="bg-phlox" textcolor="text-white" width="w-20" />
                  </div>

                  {/* Image section */}
                  <div className="order-1 sm:order-2">
                    <img
                      src={data.img}
                      alt={data.title2}
                      className='w-[300px] h-[300px] sm:h-[450px] sm:scale-105 lg:scale-110 object-contain mx-auto drop-shadow-[-8px_4px_6px_rgba(0,0,0,0.4)] relative z-40'
                    />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* Grid section below the hero */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
        <div className='py-10 pl-5 bg-gradient-to-br from-black/90 to-black/70 text-white rounded-3xl relative h-[320px] flex items-end'>
          <div>
            <div className='mb-4'>
              <p>Enjoy</p>
              <p>With</p>
              <p>Earphone</p>
              <Button text="Browse" bgcolor="bg-primary" textcolor="text-white" />
            </div>
          </div>
          <img src={Image4} alt="Earphone" className='w-[320px] absolute bottom-0' />
        </div>
        <div className='py-10 pl-5 bg-gradient-to-br from-black/90 to-black/70 text-white rounded-3xl relative h-[320px] flex items-end'>
          <div>
            <div className='mb-4'>
              <p>Enjoy</p>
              <p>With</p>
              <p>VR Headset</p>
              <Button text="Browse" bgcolor="bg-primary" textcolor="text-white" />
            </div>
          </div>
          <img src={Image2} alt="VR Headset" className='w-[320px] absolute bottom-0' />
        </div>
        <div className='py-10 pl-5 bg-gradient-to-br from-black/90 to-black/70 text-white rounded-3xl relative h-[320px] flex items-end'>
          <div>
            <div className='mb-4'>
              <p>Explore</p>
              <p>Our</p>
              <p>Watches</p>
              <Button text="Browse" bgcolor="bg-primary" textcolor="text-white" />
            </div>
          </div>
          <img src={Image5} alt="Watch" className='w-[320px] absolute bottom-0' />
        </div>
        <div className='py-10 pl-5 bg-gradient-to-br from-black/90 to-black/70 text-white rounded-3xl relative h-[320px] flex items-end'>
          <div>
            <div className='mb-4'>
              <p>Discover</p>
              <p>More</p>
              <p>Products</p>
              <Button text="Browse" bgcolor="bg-primary" textcolor="text-white" />
            </div>
          </div>
          <img src={Image6} alt="Macbook" className='w-[320px] absolute bottom-0' />
        </div>
      </div>


    </div>
    
    
  );
};

export default Hero;
