import blogs from "../data/blog";
import { motion } from "framer-motion";
import { ScrollUp, CardHover, CardClicks, scrollLeft, scrollRight} from "../animations/motion";
export default function Blog(){
    return (
        <>
        <motion.h2 {...ScrollUp} className="text-2xl font-semibold mt-20 w-full h-10 flex justify-center items-center text-blue-500">Get in Touch with Latest Tech News</motion.h2>
        <motion.p {...scrollLeft} className="w-full h-10 flex items-center justify-center text-gray-400 text-xs md:text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, fugiat!</motion.p>
            <div className="w-full h-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-5 gap-5">
                {blogs.map((data) =>(
                    <motion.article {...CardHover} {...scrollLeft} className="w-full h-auto shadow-md mb-3 flex flex-col p-3 cursor-pointer">
                        <img src={data.img} className="w-full h-50 object-cover hover:rounded-xs"/>
                        <div className="w-full h-7 mt-2 flex flex-row justify-left items-left">
                            <p className="text-xs mt-1 text-gray-400 font-semibold">{data.author}</p>
                        <span className="text-xs mt-1 text-gray-300 font-semibold ml-10">{data.date}</span>
                        </div>
                        <h3 className="font-semibold text-blue-500 mb-2">{data.title}</h3>
                        <p className="text-xs mb-2">{data.content}</p>
                        <motion.button {...CardHover} {...CardClicks} className="w-35 h-10 my-5 bg-linear-to-r from-blue-500 to-blue-600 rounded-sm cursor-pointer text-xs font-semibold text-white">READ MORE</motion.button>
                    </motion.article>
                ))}
                
            </div>
        </>
    );
}