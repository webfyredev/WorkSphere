import PageHeader from "../components/pageHeader"
import NavBar from "../components/NavBar"
import Footer from "../components/footer"
import jobImg from '../images/doms (3).jpg'
import jobs from "../data/jobPage"
import { motion } from "framer-motion"
import { CardHover, ScrollUp, scrollLeft} from "../animations/motion"
import { Link } from "react-router-dom"
export default function Jobs(){
    return(
        <>
            <NavBar />
            <PageHeader 
            title = 'Jobs'
            img = {jobImg}/>
            <motion.h2 {...ScrollUp} className="text-2xl font-semibold mt-20 w-full h-10 flex justify-center items-center text-blue-500">
                Find Your Next Tech Opportunity 
            </motion.h2>
            <motion.p {...scrollLeft} className="w-full h-10 flex items-center justify-center text-gray-400 text-sm mb-10">
                Browse top tech roles tailored for developers, designers, analysts, and more.
            </motion.p>
            
             <div className="w-full h-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 p-3">
                {jobs.map((data, index) =>(
                    <motion.div {...CardHover} className="w-[98%] h-auto p-5 flex flex-col shadow-[0_0_5px_rgba(0,0,0,0.1)] rounded-md">
                        <Link to="#">
                            <h3 className="text-xl font-semibold text-blue-500 mb-3">{data.title}</h3>
                        </Link>
                        <p className="text-gray-500 mb-3">{data.company} . {data.location}</p>
                        <p className="text-gray-500 mb-3">{data.type}</p>
                        <p className=" mb-3 font-semibold   text-blue-500">{data.salary}</p>
                        <div className="w-full h-auto mb-3">
                            <ul className="flex flex-row justify-between items-center">
                                {data.skills.map((skills, index) =>(
                                    <motion.li key={index} className="text-xs px-3.5 h-7 flex items-center rounded-xs bg-gray-100 text-gray-700 shadow-[0_0_2px_rgba(0,0,0,0.1)] font-semibold hover:bg-linear-to-r from-blue-500 to-blue-600 cursor-pointer hover:text-white">
                                        {skills}
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                        <p className="text-gray-500 text-[10px] w-full h-6 flex justify-end">Posted: {data.posted}</p>
                    </motion.div>
                ))}
             </div>
            <Footer />
        </>
    )
}