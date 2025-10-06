import PageHeader from "../components/pageHeader"
import NavBar from "../components/NavBar"
import Footer from "../components/footer"
import jobImg from '../images/doms (3).jpg'
import domsImg from '../images/auths (6).jpg'
import jobs from "../data/jobPage"
import { motion } from "framer-motion"
import {FaChevronRight} from 'react-icons/fa'
import { CardClicks, CardHover, ScrollUp, scrollLeft} from "../animations/motion"
import { Link } from "react-router-dom"
import Doms from "../components/doms"
import Blog from "../components/blog"
export default function Jobs(){
    return(
        <>
            <NavBar />
            <PageHeader 
            title = 'Jobs'
            img = {jobImg}/>
            <motion.h2 {...ScrollUp} className="text-2xl md:text-3xl font-semibold mt-20 w-full h-10 flex justify-center items-center text-blue-500">
                Find Your Next Tech Opportunity 
            </motion.h2>
            <motion.p {...scrollLeft} className="w-full h-10 flex items-center justify-center text-gray-400 text-xs md:text-sm mb-3">
                Browse top tech roles tailored for developers, designers, analysts, and more.
            </motion.p>
            <div className="w-full h-auto sm:h-auto md:h-30 mb-15 flex justify-center items-center px-5 md:px-15 py-5">
                <form className="w-full h-full rounded-sm shadow-[0_0_10px_rgba(0,0,0,0.1)] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 space-x-5 px-5 py-4">
                    <input type="text" placeholder="Skills..." className="border-1 border-blue-300 p-2 outline-blue-400 text-blue-400 text-sm md:text-md shadow-xs mb-5 md:mb-0"/>
                    <input type="text" placeholder="Search By Location..." className="border-1 border-blue-300 p-2 outline-blue-400 text-sm md:text-md text-blue-400 mb-5 md:mb-0"/>
                    <motion.button {...CardHover} {...CardClicks} type="submit" className="w-[95%] md:w-full h-full cursor-pointer bg-linear-to-r from-blue-500 to-blue-600 text-white mb-5 md:mb-0 font-semibold rounded-xs">Search Job</motion.button>

                </form>
            </div>
            <motion.h2 {...ScrollUp} className="text-2xl md:text-3xl font-semibold mt-20 w-full h-10 flex justify-center items-center text-blue-500 mb-5">
                Latest Job Offers
            </motion.h2>
             <motion.div {...scrollLeft} className="w-full h-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 p-3">
                {jobs.map((data, index) =>(
                    <motion.div {...CardHover} className="w-[98%] h-auto p-5 flex flex-col shadow-[0_0_5px_rgba(0,0,0,0.1)] rounded-md">
                        <Link to="#">
                            <h3 className="text-xl font-semibold text-blue-500 mb-3">{data.title}</h3>
                        </Link>
                        <p className="text-gray-500 mb-3">{data.company} . {data.location}</p>
                        <p className="text-gray-500 mb-3">{data.type}</p>
                        <p className=" mb-3 font-semibold   text-blue-500">{data.salary}</p>
                        <div className="w-[80%] md:w-full h-auto mb-3 overflow-hidden">
                            <ul className="flex flex-row justify-between items-center">
                                {data.skills.map((skills, index) =>(
                                    <motion.li key={index} className="text-xs md:text-[12px] px-3 sm:px-2 sm:text-[10px] md:px-3 h-7 flex items-center rounded-xs bg-gray-100 text-gray-700 shadow-[0_0_2px_rgba(0,0,0,0.1)] font-semibold hover:bg-linear-to-r from-blue-500 to-blue-600 cursor-pointer hover:text-white">
                                        {skills}
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                        <motion.button {...CardClicks} className="w-[45%] h-10  bg-linear-to-r from-blue-500 to-blue-600 font-semibold text-white my-2 cursor-pointer rounded-sm text-sm flex items-center justify-center">Apply Now  <FaChevronRight  className="w-3 h-3 mt-0.5 ml-0.5"/></motion.button>
                        <p className="text-gray-500 text-[10px] w-full h-6 flex justify-end">Posted: {data.posted}</p>
                    </motion.div>
                ))}
             </motion.div>
             <Doms 
             img = {domsImg}
             title = "Kickstart Your Tech Career Today"
             sub_text = "Take the next step toward growth. Apply for the exciting tech jobs that match your skills and passion"
             but_text = "Get Started"  />
             <Blog />
            <Footer />
        </>
    )
}