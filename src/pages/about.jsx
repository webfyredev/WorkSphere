import { CardClicks, CardHover, scrollLeft, scrollRight, ScrollUp, ScrollUpNext} from "../animations/motion";
import NavBar from "../components/NavBar";
import Footer from "../components/footer";
import PageHeader from "../components/pageHeader";
import AboutImg from '../images/banner-9.jpg'
import AboutS from '../images/bg2.jpg'
import { motion } from "framer-motion";
import Features from "../components/features";
import Doms from "../components/doms";
import Blog from "../components/blog";
export default function About(){
    return(
        <>
            <NavBar />
            <PageHeader 
            title = "About"
            img = {AboutImg}
            />
            <motion.div {...ScrollUpNext} className="w-full h-180 sm:h-180 md:h-100 my-5 flex md:flex-row flex-col p-3">
                <motion.main {...scrollRight} className="w-full md:w-1/2 h-1/2 sm:h-1/2 md:h-full p-5 shadow-sm">
                    <h2 className="mt-5 text-2xl text-blue-500 font-semibold">
                        About Us
                    </h2>
                    <p className="text-xs md:text-[13px] text-justify mt-3">
                        Lorem Ipsum is simply dummy text of the printing and typesetting 
                        industry. Lorem Ipsum has been the industry's standard dummy 
                        text ever since the 1500s, when an unknown printer took a 
                        galley of type and. It is a long established fact that a 
                        reader will be distracted by the readable content of a page 
                        when looking at its layout. The point of using Lorem Ipsum is 
                        that it has a more-or-less.
                    </p>
                    <p className="text-xs md:text-[13px] text-justify mt-3">
                        Lorem Ipsum is simply dummy text of the printing and typesetting 
                        industry. Lorem Ipsum has been the industry's standard dummy 
                        text ever since the 1500s, when an unknown printer took a 
                        galley of type and. It is a long established fact that a 
                        reader will be distracted by the readable content of a page 
                        when looking at its layout. The point of using Lorem Ipsum is 
                        that it has a more-or-less.
                    </p>
                    <motion.button {...CardHover} {...CardClicks} className="px-8 py-2.5 bg-linear-to-r from-blue-500 to-blue-600 mt-5 font-semibold text-white rounded-xs cursor-pointer">Read More</motion.button>
                </motion.main>
                <motion.aside {...scrollLeft} className="w-full h-1/2 md:w-1/2 sm:h-1/2 md:h-full">
                    <img src={AboutS} className="w-full h-full object-cover cursor-pointer"/>
                </motion.aside>
            </motion.div>
            <Features />
            <Doms />
            <Blog />
            <Footer />
        </>
    );
}