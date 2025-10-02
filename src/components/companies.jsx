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
            <div className=" w-full h-25 flex items-center justify-center">
                <div className="flex flex-row justify-evenly items-center w-[65%] h-full">
                    {company.map((data) => (
                        <motion.div {...CardHover} initial={{opacity : 0, x:300}} whileInView={{opacity: 1, x:0}} transition={{duration : 2}} exit={{opacity:0, x:300}}  className="w-30 h-[90%] cursor-pointer flex flex-col justify-evenly items-center rounded-sm shadow-lg">
                            <img src={data.logo}  className="w-10 h-10"/>
                            <p className="text-blue-200 font-semibold italic text-sm">{data.name}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        
        </>
    );
}