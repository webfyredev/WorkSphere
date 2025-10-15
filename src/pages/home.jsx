import NavBar from "../components/NavBar";
import bgSlider from '../images/banner-3.jpg'
import bgSlider2 from '../images/banner-9.jpg'
import Job from "../components/jobs";
import Company from "../components/companies";
import { motion } from "framer-motion";
import { Link as Anchor } from "react-router-dom";
import { ScrollUp, ScrollUpNext, CardHover, scrollLeft, scrollRight, CardClicks} from "../animations/motion";
import { SearchCheckIcon, User, Send, Link, Video, Briefcase, Play} from "lucide-react";
import Footer from '../components/footer.jsx'
import StaffData from "../data/staffData";
import Testimonial from "../components/testimonial.jsx";
import HeroSlider from "../components/slider.jsx";
import { FaLinkedin, FaTwitter, FaGithub, FaInstagram, FaYoutube} from "react-icons/fa"
import Blog from "../components/blog.jsx";
export default function Home(){
    return(
        <>
            <NavBar />
            <div className="w-full h-[90vh] relative">
                <img src={bgSlider}  className="w-full h-full object-cover"/>
                <div className="absolute w-full h-full inset-0 bg-black/45 px-5">
                    <div className="w-200 h-100 absolute top-25 p-5">
                        <motion.h3 {...ScrollUp} className="text-3xl sm:w-130 md:text-[2.8rem] font-bold text-white mb-3 md:w-full w-90">
                            Best Place To Find Your <span className="text-blue-400">Dream Job</span>
                        </motion.h3>
                        <motion.p {...ScrollUpNext} className="text-xs md:text-[15px] text-white font-semibold mb-5 md:w-full w-100 sm:w-120">
                            Aliquam Vestibulum Cursus Felis. In Iaculis Iaculis Sapien Ac Condimentum. Vestibulum Congue Posuere Lacus, Id Tincidunt Pellentesque Dui Non, Semper Orci.
                        </motion.p>
                        <form className="w-full h-40">
                        <div className="w-full h-30 md:h-12 flex justify-evenly md:justify-between mb-3 flex-col md:flex-row">
                            <input type="text" placeholder="Tech Stacks" className="w-90 h-12 md:h-full px-2 bg-white hover:rounded-xs outline-blue-400 text-sm text-blue-400" />
                            <input type="text" placeholder="Country / Location" className="w-90 h-12 md:h-full px-2 bg-white hover:rounded-xs outline-blue-400 text-sm text-blue-400" />
                        </div>
                        <motion.button {...ScrollUp} type="submit" className="w-90 py-3 bg-linear-to-r from-blue-500 to-blue-600 text-white cursor-pointer text-left px-3 font-semibold rounded-sm hover:bg-blue-800 hover:scale-105 transition animation-100">Search Job</motion.button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="my-10 w-full h-[220vh] sm:h-[140vh] md:h-[80vh] flex flex-col items-center px-10 ">
                <motion.h2 {...scrollRight} className="mt-10 text-3xl font-semibold text-blue-400">Our Work Process</motion.h2>
                <motion.p {...scrollLeft} className="text-xs text-gray-700 mt-2 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint perspiciatis dolor iste quae vero praesentium doloribus deleniti vel nesciunt porro!</motion.p>
                <motion.div {...ScrollUp} className="w-full h-[75%] mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:px-5">
                    <motion.div {...CardHover} className="w-full sm:w-75 md:w-85 h-45 flex shadow-[0_0_10px_rgba(0,0,0,0.1)] hover:cursor-pointer mb-5">
                        <div className="w-20 h-full p-5">
                           < User className="w-7 h-7 text-blue-400 hover:text-blue-500 mt-2" />
                           <h3 className="text-2xl md:text-4xl text-blue-100 mt-10">01</h3>
                        </div>
                        <div className="h-full w-80 p-1">
                            <h3 className="font-semibold text-md md:text-xl text-blue-400 mt-6">Create Profile</h3>
                            <div className="w-full sm:w-40 md:w-50 h-[1px] bg-blue-400 my-3"></div>
                            <p className="text-gray-700 w-full md:w-60 h-auto text-left sm:text-[10px] text-xs md:text-xs">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam tempora dolores dolore ab quam quae dolores dolore ab quam quae.
                            </p>
                            {/* <p className=" text-gray-700 w-60 h-auto text-left text-justify text-xs">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, repellat.
                            </p> */}
                        </div>
                    </motion.div>
                    <motion.div {...CardHover} className="w-full sm:w-75 md:w-85 h-45 flex shadow-[0_0_10px_rgba(0,0,0,0.1)] hover:cursor-pointer mb-5">
                        <div className="w-20 h-full p-5">
                           < SearchCheckIcon className="w-7 h-7 text-blue-400 hover:text-blue-500 mt-2" />
                           <h3 className="text-2xl md:text-4xl text-blue-100 mt-10">02</h3>
                        </div>
                        <div className="h-full w-80 p-1">
                            <h3 className="font-semibold text-md md:text-xl text-blue-400 mt-6">Search Job</h3>
                            <div className="w-full sm:w-40 md:w-50 h-[1px] bg-blue-400 my-3"></div>
                            <p className="text-gray-700 w-full md:w-60 h-auto text-left sm:text-[10px] text-xs md:text-xs">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam tempora dolores dolore ab quam quae dolores dolore ab quam quae.
                            </p>
                            {/* <p className=" text-gray-700 w-60 h-auto text-left text-justify text-xs">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, repellat.
                            </p> */}
                        </div>
                    </motion.div>
                    <motion.div {...CardHover} className="w-full sm:w-75 md:w-85 h-45 flex shadow-[0_0_10px_rgba(0,0,0,0.1)] hover:cursor-pointer mb-5">
                        <div className="w-20 h-full p-5">
                           < Send className="w-7 h-7 text-blue-400 hover:text-blue-500 mt-2" />
                           <h3 className="text-2xl md:text-4xl text-blue-100 mt-10">03</h3>
                        </div>
                        <div className="h-full w-80 p-1">
                            <h3 className="font-semibold text-md md:text-xl text-blue-400 mt-6">Apply Easily</h3>
                            <div className="w-full sm:w-40 md:w-50 h-[1px] bg-blue-400 my-3"></div>
                            <p className="text-gray-700 w-full md:w-60 h-auto text-left sm:text-[10px] text-xs md:text-xs">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam tempora dolores dolore ab quam quae dolores dolore ab quam quae.
                            </p>
                            {/* <p className=" text-gray-700 w-60 h-auto text-left text-justify text-xs">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, repellat.
                            </p> */}
                        </div>
                    </motion.div>
                    <motion.div {...CardHover} className="w-full sm:w-75 md:w-85 h-45 flex shadow-[0_0_10px_rgba(0,0,0,0.1)] hover:cursor-pointer mb-5">
                        <div className="w-20 h-full p-5">
                           < Link className="w-7 h-7 text-blue-400 hover:text-blue-500 mt-2" />
                           <h3 className="text-2xl md:text-4xl text-blue-100 mt-10">04</h3>
                        </div>
                        <div className="h-full w-80 p-1">
                            <h3 className="font-semibold text-md md:text-xl text-blue-400 mt-6">Get Matched</h3>
                            <div className="w-full sm:w-40 md:w-50 h-[1px] bg-blue-400 my-3"></div>
                            <p className="text-gray-700 w-full md:w-60 h-auto text-left sm:text-[10px] text-xs md:text-xs">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam tempora dolores dolore ab quam quae dolores dolore ab quam quae.
                            </p>
                            {/* <p className=" text-gray-700 w-60 h-auto text-left text-justify text-xs">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, repellat.
                            </p> */}
                        </div>
                    </motion.div>
                    <motion.div {...CardHover} className="w-full sm:w-75 md:w-85 h-45 flex shadow-[0_0_10px_rgba(0,0,0,0.1)] hover:cursor-pointer mb-5">
                        <div className="w-20 h-full p-5">
                           < Video className="w-7 h-7 text-blue-400 hover:text-blue-500 mt-2" />
                           <h3 className="text-2xl md:text-4xl text-blue-100 mt-10">05</h3>
                        </div>
                        <div className="h-full w-80 p-1">
                            <h3 className="font-semibold text-md md:text-xl text-blue-400 mt-6">Interview</h3>
                            <div className="w-full sm:w-40 md:w-50 h-[1px] bg-blue-400 my-3"></div>
                            <p className="text-gray-700 w-full md:w-60 h-auto text-left sm:text-[10px] text-xs md:text-xs">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam tempora dolores dolore ab quam quae dolores dolore ab quam quae.
                            </p>
                            {/* <p className=" text-gray-700 w-60 h-auto text-left text-justify text-xs">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, repellat.
                            </p> */}
                        </div>
                    </motion.div>
                    <motion.div {...CardHover} className="w-full sm:w-75 md:w-85 h-45 flex shadow-[0_0_10px_rgba(0,0,0,0.1)] hover:cursor-pointer mb-5">
                        <div className="w-20 h-full p-5">
                           < Briefcase className="w-7 h-7 text-blue-400 hover:text-blue-500 mt-2" />
                           <h3 className="text-2xl md:text-4xl text-blue-100 mt-10">06</h3>
                        </div>
                        <div className="h-full w-80 p-1">
                            <h3 className="font-semibold text-md md:text-xl text-blue-400 mt-6">Get Hired</h3>
                            <div className="w-full sm:w-40 md:w-50 h-[1px] bg-blue-400 my-3"></div>
                            <p className="text-gray-700 w-full md:w-60 h-auto text-left sm:text-[10px] text-xs md:text-xs">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam tempora dolores dolore ab quam quae dolores dolore ab quam quae.
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
            <Job />
            <Company />
            <div>
            <motion.h2 {...ScrollUp} className="text-xl md:text-2xl font-semibold mt-15 mb-2 mt-10 w-full h-10 flex justify-center items-center text-blue-500">Meet Our Expert Staff &amp; Their Tech Stacks</motion.h2>
            <div className="w-full md:px-8 px-8 ml-5 md:ml-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                {StaffData.map((staff) =>(
                <motion.div {...scrollLeft} {...CardHover} className="w-[90%] flex flex-col shadow-[0_0_10px_rgba(0,0,0,0.1)] rounded-sm items-center my-5">
                    <img src={staff.img} className="w-20 h-20 mt-10 mb-5 rounded-full shadow-[0_0_10px_rgba(0,0,0,0.1)] object-cover"/>
                    <h3 className="mb-1 text-blue-500 font-semibold">{staff.name}</h3>
                    <p className="text-sm text-gray-400 mb-3">{staff.stack}</p>
                    <div className="w-[80%] sm:w-full md:w-full h-auto md:h-20  mb-5 md:mb-15">
                        <p className="w-full h-5 flex items-center justify-center font-semibold text-xs text-gray-500">Skills</p>
                        <ul className="w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-5 p-5 ">
                            {staff.skills.map((skills, index) =>(
                                <li key={index} className="rounded-sm text-xs font-semibold flex items-center justify-center md:p-2 p-3 bg-gray-100 text-gray-700 hover:font-bold hover:bg-linear-to-r from-blue-500 to-blue-600 transition-all duration-300 hover:text-white cursor-pointer">{skills}</li>
                            ))}
                        </ul>
                    </div>
                    <motion.div {...scrollLeft} className="w-[50%] md:w-[60%] sm:w-[75%] h-12 mb-5 flex items-center justify-evenly">
                        <motion.Anchor {...CardHover} {...CardClicks} to="#"><FaLinkedin  className="w-5 h-10 cursor-pointer text-[#0077B5]"/>
                        </motion.Anchor>
                        <motion.Anchor {...CardHover} {...CardClicks} to="#"><FaTwitter className="w-5 h-10 cursor-pointer text-[#1DA1F2]"/>
                        </motion.Anchor>
                        <motion.Anchor {...CardHover} {...CardClicks} to="#"><FaGithub className="w-5 h-10 cursor-pointer text-[#181717]"/>
                        </motion.Anchor>
                        <motion.Anchor {...CardHover} {...CardClicks} to="#"><FaInstagram className="w-5 h-10 cursor-pointer text-[#E1306C]"/>
                        </motion.Anchor>
                         <motion.Anchor {...CardHover} {...CardClicks} to="#"><FaYoutube className="w-5 h-10 cursor-pointer text-[#FF0000]"/>
                        </motion.Anchor>
                    </motion.div>
                </motion.div>
                ))}
                
            </div>
            <div className='w-full h-10 flex items-center justify-center mb-5'>
                <motion.button {...CardHover} {...CardClicks} className="w-40 h-full flex justify-center items-center font-semibold text-sm text-white cursor-pointer rounded-sm bg-linear-to-r from-blue-500 to-blue-600">View More Staffs</motion.button>
            </div>
            </div>
            <Testimonial />
            {/* <HeroSlider /> */}
            <Blog />
            <Footer />
        </>
    );
}