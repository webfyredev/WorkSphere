import NavBar from "../components/NavBar";
import PageHeader from "../components/pageHeader";
import Footer from "../components/footer";
import registerImg from '../images/auths (1).webp'
import { Link } from "react-router-dom";
import { CardHover, CardClicks } from "../animations/motion";
import { motion } from "framer-motion";

export default function Register(){
    return(
            <>
                <NavBar />
                <PageHeader
                title = 'Sign_up'
                img = {registerImg}
                />
                <div className="w-full h-auto flex items-center justify-center p-5 mb-5">
                    <form action="" className="w-110 auto  shadow-[0_0_10px_rgba(0,0,0,0.1)] flex flex-col p-5">
                        <h3 className="w-full h-10 flex items-center justify-center font-bold text-blue-500">SIGN UP</h3>
                        <div className="flex flex-col w-full h-auto mt-5">
                            <input type="text" placeholder="First name" className="border-1 border-blue-200 outline-blue-200 rounded-sm w-full h-11 mb-3 p-2 text-sm text-blue-400" />
                            <input type="text" placeholder="Last name" className="border-1 border-blue-200 outline-blue-200 rounded-sm w-full h-11 mb-3 p-2 text-sm text-blue-400" />
                            <input type="email" placeholder="Email" className="border-1 border-blue-200 outline-blue-200 rounded-sm w-full h-11 mb-3 p-2 text-sm text-blue-400" />
                            <input type="text" placeholder="Phone" className="border-1 border-blue-200 outline-blue-200 rounded-sm w-full h-11 mb-3 p-2 text-sm text-blue-400" />
                            <p className="w-full flex items-center justify-center text-xs my-3 text-gray-300 text-center">Your password is 0-20 characters <br />Includes one letter and one number</p>
                            <input type="password" placeholder="Password" className="border-1 border-blue-200 outline-blue-200 rounded-sm w-full h-11 mb-3 p-2 text-sm text-blue-400" />
                            <input type="password" placeholder="Confirm-Password" className="border-1 border-blue-200 outline-blue-200 rounded-sm w-full h-11 mb-3 p-2 text-sm text-blue-400" />
                            <div className="w-[75%] h-6 flex flex-row justify-evenly items-center mb-2">
                                <input type="checkbox" className="checked:fill-blue-500 checked:border-blue-500 cursor-pointer"/>
                                <p className="md:text-xs text-[9px] text-gray-400">I agree to the <Link to="/" className="font-semibold text-blue-600">Terms of Services &amp; Privacy Policy</Link></p>
                            </div>
                            <div className="w-full h-12 mb-2 flex items-center justify-center">
                                <motion.button {...CardHover} {...CardClicks} className="w-full h-[90%] rounded-sm border-1 border-blue-500 bg-linear-to-r from-blue-500 to-blue-600 text-white text-sm cursor-pointer font-semibold">Sign Up</motion.button>
                            </div>
                        </div>
                        <p className="w-full h-6 flex items-center justify-center text-xs text-gray-500 font-semibold">Already have a account <Link to="/login" className="font-semibold text-blue-500 ml-1">Sign In</Link></p>
                    </form>

                </div>
                <Footer />
            </>
        );
}