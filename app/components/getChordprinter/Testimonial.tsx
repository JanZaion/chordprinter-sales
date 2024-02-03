'use client';

import Image from 'next/image';
import React, { useCallback, useRef } from 'react';
import { Autoplay, Pagination } from 'swiper/modules';
import type { SwiperRef } from 'swiper/react';
import { Swiper, SwiperSlide } from 'swiper/react';

import styles from './Testimonial.module.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Testimonial = () => {
  const sliderRef = useRef<SwiperRef>(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);
  return (
    <div className={styles.container}>
      <button
        className={styles.navigationButton}
        onClick={handlePrev}
        type="button"
      >
        <Image
          alt="Arrow"
          className={styles.prevIcongImage}
          height={40}
          quality={10}
          src="./arrow.svg"
          width={40}
        />
      </button>
      <div className={styles.swiperContainer}>
        <Swiper
          ref={sliderRef}
          autoplay={{ delay: 10_000, pauseOnMouseEnter: true }}
          className={styles.mySwiper}
          loop
          modules={[Autoplay, Pagination]}
          pagination={{ clickable: true }}
          slidesPerView={1}
          spaceBetween={100}
          speed={1400}
        >
          <SwiperSlide>
            <div className={styles.slideBox}>Slide 1</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.slideBox}>Slide 2</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.slideBox}>Slide 3</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.slideBox}>Slide 4</div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="next">
        <button
          className={styles.navigationButton}
          onClick={handleNext}
          type="button"
        >
          <Image
            alt="Arrow"
            className={styles.nextIcongImage}
            height={40}
            quality={10}
            src="./arrow.svg"
            width={40}
          />
        </button>
      </div>
    </div>
  );
};

export default Testimonial;
