import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import company from "../data/company";
import { CardHover, scrollLeft, ScrollUp } from "../animations/motion";
import { Link } from "react-router-dom";
export default function Company(){
    const [index, setIndex] = useState(0)
    const nextSlide = () => setIndex((next) => (next + 1) % company.length);
    const prevSlide = () => setIndex ((prev) => (prev - 1 + company.length) % company.length);
    return(
        <>
            <motion.h2 {...ScrollUp} className="text-2xl font-semibold mt-15 w-full h-10 flex justify-center items-center text-blue-500">Trusted by Leading Companies</motion.h2>
            <motion.p {...scrollLeft} className="w-full h-10 flex items-center justify-center text-gray-400 text-sm mb-3">We've proudly worked with these amazing brands</motion.p>
            <div className="w-[80%] ml-13 md:w-full h-80 sm:h-60 md:h-25 flex items-center justify-center">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 p-5 md:p-2 md:w-[65%] sm:w-full w-full h-full sm:h-full">
                    {company.map((data) => (
                        <motion.div initial={{opacity : 0, x:300}} whileInView={{opacity: 1, x:0}} whileHover={{scale:1.05}} transition={{duration : 1}} exit={{opacity:0, x:300}}  className="w-[90%] h-22 sm:w-[90%] md:w-30 md:h-[90%] cursor-pointer flex flex-col justify-evenly items-center rounded-sm shadow-lg">
                            <img src={data.logo}  className="w-1/3 h-1/2 md:w-10 md:h-10 "/>
                            <p className="text-blue-200 font-semibold italic text-sm">{data.name}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        
        </>
    );
}