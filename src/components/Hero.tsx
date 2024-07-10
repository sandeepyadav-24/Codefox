import React from "react";
import ShimmerButton from "./magicui/shimmer-button";
import { Swiper, SwiperSlide } from "swiper/react";
import AvatarCircles from "./magicui/avatar-circles";
{
  /** import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar"; */
}

const Hero = () => {
  const avatarUrls = [
    "https://avatars.githubusercontent.com/u/16860528",
    "https://avatars.githubusercontent.com/u/20110627",
    "https://avatars.githubusercontent.com/u/106103625",
    "https://avatars.githubusercontent.com/u/59228569",
  ];
  return (
    <div className="bg-[#F6F6F6]">
      <div className=" flex flex-row ">
        <div className="mx-20 w-1/2 py-10">
          <h1 className="text-5xl font-bold">
            Your Ultimate
            <span className="text-[#1C4980] px-2 ">
              College Placement Preparation
            </span>
            Hub
          </h1>
          <AvatarCircles avatarUrls={avatarUrls} />
          <h3 className="text-[#787878] text-xl my-5">
            Your go-to platform for upcoming company visits, preparation tips,
            past visit archives, and DSA test leaderboards.
          </h3>
          <ShimmerButton shimmerColor="#EAE8FD" />
        </div>
        <div className="py-20">Here Put some Nice Diagram and Pictures</div>
      </div>
      <div className="flex flex-row mx-20 my-10">
        <div className="w-1/5">
          <h1 className="text-[#1C4980] text-2xl font-semibold my-4">
            Industry Veteran
          </h1>
        </div>
        {/**<div className="w-4/5">
          <Swiper
            slidesPerView={1}
            spaceBetween={2}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 7,
                spaceBetween: 20,
              },
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img
                src="https://d8it4huxumps7.cloudfront.net/uploads/images/65cc902b1be20_home_icon_amazon.png?d=292x190"
                alt="Amazon"
                className="h-20"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://d8it4huxumps7.cloudfront.net/uploads/images/65cc910a7ffe4_home_icon_flipkart.png?d=395x278"
                alt="Flipkart"
                className="h-20"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://d8it4huxumps7.cloudfront.net/uploads/images/65cc91f112f5f_home_icon_loreal.png?d=375x210"
                alt="Loreal"
                className="h-20"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://d8it4huxumps7.cloudfront.net/uploads/images/65cc92ec17499_home_icon_walmart.png?d=288x190"
                alt="Walmart"
                className="h-20"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://d8it4huxumps7.cloudfront.net/uploads/images/65cc8d799faf3_home_icon_asian_paints2.png?d=222x198"
                alt="Asian-paints"
                className="h-20"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://d8it4huxumps7.cloudfront.net/uploads/images/65cc84534cce0_home_icon_aditya_birla_group.png?d=222x190"
                alt="Aditya-birla"
                className="h-20"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://d8it4huxumps7.cloudfront.net/uploads/images/65cc8e3873ff1_home_icon_wipro2.png?d=222x190"
                alt="Wipro"
                className="h-20"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://d8it4huxumps7.cloudfront.net/uploads/images/65cc902b1be20_home_icon_amazon.png?d=292x190"
                alt="Amazon"
                className="h-20"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://d8it4huxumps7.cloudfront.net/uploads/images/65cc910a7ffe4_home_icon_flipkart.png?d=395x278"
                alt="Flipkart"
                className="h-20"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://d8it4huxumps7.cloudfront.net/uploads/images/65cc91f112f5f_home_icon_loreal.png?d=375x210"
                alt="Loreal"
                className="h-20"
              />
            </SwiperSlide>
          </Swiper>
        </div> */}
      </div>
    </div>
  );
};

export default Hero;
