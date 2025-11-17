import React, { useRef, useState } from "react";
import Container from "@mui/material/Container";
import Hero1 from "../img/banner_Hero1.jpg";
import Hero2 from "../img/banner_Hero2.jpg";
import Hero3 from "../img/banner_Hero3.jpg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
// import TransitionPage from "./TransitionPage";
// ===============
// import "./styles.css";

const Slider = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
      {/* <TransitionPage> */}
      <Container style={{ width: "65%" }}>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          className="mySwiper introswiper"
        >
          <SwiperSlide className="introswiper">
            <img src={Hero1} alt="logo" />
            <div className="swiper-content">
              <p>introducing the new</p>
              <h1>microsoft xbox 360 controller</h1>
              <p>window xbox 1/2/2/w/kkd</p>
              <button>show now</button>
            </div>
          </SwiperSlide>
          <SwiperSlide className="introswiper">
            <img src={Hero2} alt="logo" />
            <div className="swiper-content">
              <p>introducing the new</p>
              <h1>microsoft xbox 360 controller</h1>
              <p>window xbox 1/2/2/w/kkd</p>
              <button>show now</button>
            </div>
          </SwiperSlide>
          <SwiperSlide className="introswiper">
            <img src={Hero3} alt="logo" />
            <div className="swiper-content">
              <p>introducing the new</p>
              <h1>microsoft xbox 360 controller</h1>
              <p>window xbox 1/2/2/w/kkd</p>
              <button>show now</button>
            </div>
          </SwiperSlide>

          <div className="autoplay-progress" slot="container-end">
            <svg viewBox="0 0 48 48" ref={progressCircle}>
              <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span ref={progressContent}></span>
          </div>
        </Swiper>
      </Container>
      {/* </TransitionPage> */}
    </>
  );
};

export default Slider;
