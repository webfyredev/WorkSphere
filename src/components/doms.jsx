import domsImg from '../images/doms.jpg'
import { motion } from 'framer-motion';
import {ScrollUp, CardHover, CardClicks, ScrollUpNext} from '../animations/motion';
export default function Doms(){
    return (
        <>
            <div className="w-full h-90 relative mb-5">
                <img src={domsImg} className='w-full h-full object-cover'/>
                <div className='absolute w-full h-full inset-0 bg-black/50 flex  flex-col items-center justify-center'>
                    <motion.h3 {...ScrollUp} className='text-2xl sm:text-3xl md:text-4xl text-white font-semibold mb-3'>Make a Difference with Your Tech Skills</motion.h3>
                    <motion.p {...ScrollUpNext} className='text-white text-xs sm:text-[13px] md:text-sm mb-5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</motion.p>
                    <motion.button {...CardHover} {...CardClicks} {...ScrollUpNext} className='px-10 py-3 bg-linear-to-r from-blue-500 to-blue-600 cursor-pointer rounded-md text-white font-semibold '>Start the Journey</motion.button>
                </div>
            </div>
        </>
    );
}