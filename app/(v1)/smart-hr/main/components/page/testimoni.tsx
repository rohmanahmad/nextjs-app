'use client'

import React, { useState, useMemo } from "react";
import { Link as LinkScroll } from "react-scroll";

import { motion } from "framer-motion";
// import react slick
import Slider from "react-slick";
import Image from "next/image";
import Stars from "@/public/assets/Icon/stars.svg";
import ArrowBack from "@/public/assets/Icon/eva_arrow-back-fill.svg";
import ArrowNext from "@/public/assets/Icon/eva_arrow-next-fill.svg";

import getScrollAnimation from "@/app/(v1)/smart-hr/main/components/utils/getScrollAnimation";
import ScrollAnimationWrapper from "@/app/(v1)/smart-hr/main/components/page/ScrollAnimationWrapper";

export default function Testimoni({
  listTestimoni = [
    {
      name: "iezh Robert",
      image: "/assets/people-3.png",
      city: "Warsaw",
      country: "Poland",
      rating: "4.5",
      testimoni:
        "Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best",
    },
    {
      name: "iezh Robert",
      image: "/assets/people-3.png",
      city: "Warsaw",
      country: "Poland",
      rating: "4.5",
      testimoni:
        "Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best",
    },
    {
      name: "iezh Robert",
      image: "/assets/people-3.png",
      city: "Warsaw",
      country: "Poland",
      rating: "4.5",
      testimoni:
        "Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best",
    },
    {
      name: "iezh Robert",
      image: "/assets/people-3.png",
      city: "Warsaw",
      country: "Poland",
      rating: "4.5",
      testimoni:
        "Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best",
    },
  ],
}) {
  const settings = {
    dots: true,
    customPaging: function (i) {
      return (
        <a className="">
          <span className="mx-2 rounded-l-full rounded-r-full h-4 w-4 block cursor-pointer transition-all "></span>
        </a>
      );
    },
    dotsClass: "slick-dots w-max absolute mt-20  ",
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [sliderRef, setSliderRef] = useState(null);
  const [activeLink, setActiveLink] = useState(null);
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  return (
    <div
      className="bg-gradient-to-b from-white-300 to-white-500 w-full py-20"
      id="testimoni"
    >
      <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        <div className="flex flex-col w-full my-16">
          <ScrollAnimationWrapper className="">
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-normal w-9/12 sm: lg:w-4/12 mx-auto">
              Trusted by Thousands of Happy Customer{" "}
            </motion.h3>
            <motion.p
              variants={scrollAnimation}
              className="leading-normal mx-auto mb-2 mt-4 w-10/12 sm:w-7/12 lg:w-6/12"
            >
              These are the stories of our customers who have joined us with great
              pleasure when using this crazy feature.
            </motion.p>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper className="w-full flex flex-col py-12">
            <motion.div variants={scrollAnimation}>
              <Slider
                {...settings}
                arrows={false}
                ref={setSliderRef}
                className="flex items-stretch justify-items-stretch"
              >
                {listTestimoni.map((listTestimonis, index) => (
                  <div className="px-3 flex items-stretch" key={index}>
                    <div className="border-2 border-gray-500 hover:border-orange-500 transition-all rounded-lg p-8 flex flex-col">
                      <div className="flex flex-col xl:flex-row w-full items-stretch xl:items-center">
                        <div className="flex order-2 xl:order-1">
                          <Image
                            src={listTestimonis.image}
                            height={50}
                            width={50}
                            alt="Icon People"
                            className="w-auto h-auto m-0 p-0"
                          />
                          <div className="flex flex-col ml-5 text-left">
                            <p className="text-lg text-black-600 capitalize">
                              {listTestimonis.name}
                            </p>
                            <p className="text-sm text-black-500 capitalize">
                              {listTestimonis.city},{listTestimonis.country}
                            </p>
                          </div>
                        </div>
                        <div className="flex flex-none items-center ml-auto order-1 xl:order-2">
                          <p className="text-sm">{listTestimonis.rating}</p>
                          <span className="flex ml-4">
                            <Stars className="h-4 w-4" />
                          </span>
                        </div>
                      </div>
                      <p className="mt-5 text-left">“{listTestimonis.testimoni}”.</p>
                    </div>
                  </div>
                ))}
              </Slider>
              <div className="flex w-full items-center justify-end">
                <div className="flex flex-none justify-between w-auto mt-14">
                  <div
                    className="mx-4 flex items-center justify-center h-14 w-14 rounded-full bg-white border-orange-500 border hover:bg-orange-500 hover:text-white-500 transition-all text-orange-500 cursor-pointer"
                    onClick={sliderRef?.slickPrev}
                  >
                    <ArrowBack className="h-6 w-6 " />
                  </div>
                  <div
                    className="flex items-center justify-center h-14 w-14 rounded-full bg-white border-orange-500 border hover:bg-orange-500 hover:text-white-500 transition-all text-orange-500 cursor-pointer"
                    onClick={sliderRef?.slickNext}
                  >
                    <ArrowNext className="h-6 w-6" />
                  </div>
                </div>
              </div>
            </motion.div>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper className="relative w-full mt-16">
            <motion.div variants={scrollAnimation} custom={{ duration: 3 }}>
              <div className="absolute rounded-xl  py-8 sm:py-14 px-6 sm:px-12 lg:px-16 w-full flex flex-col sm:flex-row justify-between items-center z-10 bg-white-500">
                <div className="flex flex-col text-left w-10/12 sm:w-7/12 lg:w-5/12 mb-6 sm:mb-0">
                  <h5 className="text-black-600 text-xl sm:text-2xl lg:text-3xl leading-relaxed font-medium">
                    Subscribe Now for <br /> Get Special Features!
                  </h5>
                  <p>Let's subscribe with us and find the fun.</p>
                </div>
                <LinkScroll
                    activeClass="active"
                    to="pricing"
                    spy={true}
                    smooth={true}
                    duration={1000}
                    onSetActive={() => {
                      setActiveLink("pricing");
                    }}
                    className='cursor-pointer py-3 lg:py-4 px-12 lg:px-16 text-white-500 font-semibold rounded-lg bg-orange-500 hover:shadow-orange-md transition-all outline-none'
                  >
                    Get Started
                  </LinkScroll>
              </div>
              <div
                className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-60 sm:h-56 top-0 mt-8 mx-auto left-0 right-0"
                style={{ filter: "blur(114px)" }}
              ></div>
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </div>
  );
};
