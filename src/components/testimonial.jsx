import testimonials from "../data/testimonial";
import {Swiper, SwiperSlide} from 'swiper/react'
import {Autoplay, Pagination, Navigation} from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { useState, useEffect } from "react";
import { Star } from "lucide-react";
import { motion } from "framer-motion";
import { ScrollUp } from "../animations/motion";
export default function Testimonial(){
    
   return(

        <>
        <motion.h2 {...ScrollUp} className="text-2xl font-semibold mt-20 w-full h-10 flex justify-center items-center text-blue-500">Our Clients Reports</motion.h2>
        <p className="w-full h-10 flex items-center justify-center text-gray-400 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, fugiat!</p>
        <div className="w-full max-w-6xl mx-auto px-4 py-20 relative  mb-5">
        <Swiper 
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={20}
            slidesPerView={3}
            loop = {true}
            autoplay = {{delay : 3000, disableOnInteraction : false}}
            pagination = {{clickable : true}}
            navigation = {true}
            breakpoints={{
                320 : {slidesPerView : 1},
                640 : {slidesPerView : 2},
                1024 : {slidesPerView : 3},
                
            }}
            className="pb-12"
        >
            {testimonials.map((data, index) =>(
                <SwiperSlide key={index}>
                    <div className="bg-white w-[100%] shadow- shadow-md rounded-2xl p-6 flex flex-col items-center justify-center text-center h-80 cursor-pointer">
                        <img src={data.img} className="w-16 h-16 rounded-full mb-4" />
                        <p className="text-gray-600 mb-4 text-sm">{data.text}</p>
                        <h3 className="font-semibold text-sm text-blue-600">{data.name}</h3>
                        <div className="flex flex-row justify-center mb-3 mt-2">
                            {Array.from({length:5}).map((_, i) =>(
                                <Star key={i} size={15} className={i < data.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}/>
                            ))}
                        </div>
                    </div>
                </SwiperSlide>
            ))}

        </Swiper>
        {/* Custom Styles for Swiper */}
      <style jsx>{`
        /* Pagination dots */
        .swiper-pagination-bullet {
          @apply bg-gray-300 w-3 h-3 rounded-full opacity-100;
        }
        .swiper-pagination-bullet-active {
          @apply bg-green-600 w-4 h-4;
        }

        /* Navigation arrows */
        .swiper-button-next,
        .swiper-button-prev {
          @apply bg-white shadow-md rounded-full w-10 h-10 flex items-center justify-center text-green-600;
        }
        .swiper-button-next::after,
        .swiper-button-prev::after {
          @apply text-lg font-bold;
        }
      `}</style>
        {/* <style jsx>
            {`
                .swiper-pagination-bullet {
                    @apply bg-gray-700 w-3 h-3 rounded-full opacity-100;
                    }
                .swiper-pagination-bullet-active {
                    @apply bg-green-600 w-4 h-4;
                    }
                .swiper-button-next, 
                .swiper-button-prev{
                @apply bg-white shadow-md rounded-full w-2 h-2 flex items-center justify-center
                }
                .swiper-button-next::after,
                .swiper-button-prev::after {
                @apply text-lg font-bold;
                }
            `}
        </style> */}
        </div>
            
    </>
   ); 
}