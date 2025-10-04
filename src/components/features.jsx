import { motion } from "framer-motion";
import { ScrollUp, scrollLeft, CardHover} from "../animations/motion";
import reasons from "../data/reasons";
import { Users, Award, Cpu, HeartHandshake} from "lucide-react";
export default function Features(){
    const icons = {Users, Award, Cpu, HeartHandshake}
    return(
        <>
            <div className="w-full md:h-100 h-auto my-10 flex flex-col">
                <motion.h2 {...ScrollUp} className="text-2xl font-semibold my-5 w-full h-10 flex justify-center items-center text-blue-500">WHY CHOOSE US</motion.h2>
                <div className="w-full md:h-100 h-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 p-3">
                    {reasons.map((data, index) =>{
                        // const 
                        const Icon = icons[data.icon];
                        return(
                            <motion.div {...scrollLeft} {...CardHover} key={index} className="p-5 flex flex-col items-center rounded-lg w-[90%] md:w-[95%] shadow-[0_0_5px_rgba(0,0,0,0.1)] md:h-[85%] mb-3">
                                <div className="w-13 h-13 p-2 mt-5 rounded-full flex items-center justify-center bg-linear-to-r from-blue-500 to-blue-600 cursor-pointer">
                                    <Icon  className="fill-blue-600 w-[80%] h-full text-white"/>
                                </div>
                                <h3 className="mt-5 text-blue-600 font-semibold hover:font-normal">{data.title }</h3>
                                <p className="text-xs mt-5 text-center">{data.text}</p>
                            </motion.div>
                        )
                        
                    })}
                    
                </div>
            </div>
        </>
    );
}