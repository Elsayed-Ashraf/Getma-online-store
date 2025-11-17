import Product from "./Product";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect } from "react";
// import { v4 as uuidv4 } from "uuid";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";
import { SettingsSystemDaydream } from "@mui/icons-material";
import SlideProductsloading from "./SlideProductsloading";

const Slideproducts = ({ category }) => {
  const [items, setItems] = useState();
  useEffect(() => {
    fetch(`https://dummyjson.com/products/category/${category.title}`)
      .then((res) => res.json())
      .then((data) => {
        setItems(data.products); //
      })
      .catch((error) => console.log(error));
  }, [category]);

  if (!items) {
    return <SlideProductsloading />;
  }

  return (
    <Swiper
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      spaceBetween={10}
      loop={items.length > 5}
      pagination={{ clickable: true }}
      navigation={true}
      modules={[Autoplay, Navigation]}
      className="mySwiper"
      breakpoints={{
        320: { slidesPerView: 1 },
        480: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        1024: { slidesPerView: 4 },
        1280: { slidesPerView: 5 },
      }}
    >
      {items.map((itemproduct) => (
        <SwiperSlide key={itemproduct.id}>
          <Product key={itemproduct.id} itemproduct={itemproduct} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
// else{
//   console.log('loading')
// }

// };

export default Slideproducts;
