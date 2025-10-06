import '../index.css'
import { useState } from 'react';
import { X, Menu } from 'lucide-react';
import { Link } from "react-router-dom";
import { ScrollUp } from '../animations/motion';
import { motion } from 'framer-motion';
export default function NavBar(){
    const [isOpen, setIsOpen] = useState(false)
    return(
        <>
            <nav className="w-full h-15 bg-linear-to-r from-blue-500 to-blue-600 flex px-6 justify-between items-center relative">
            <div>
                <Link to="/" className="text-2xl font-semibold text-white cursor-pointer">WorkSphere</Link>
            </div>
                <ul className='hidden md:flex'>
                    <li>
                        <Link to="/" className='px-7 py-2.5 text-sm text-white text-bold hover:bg-blue-600 hover:rounded-sm'>Home</Link>
                    </li>
                    <li>
                        <Link to="/about" className='px-7 py-2.5 text-sm text-white text-bold hover:bg-blue-600 hover:rounded-sm'>About</Link>
                    </li>
                    <li className=''>
                        <Link to="/jobs" className='px-7 py-2.5 text-sm text-white text-bold hover:bg-blue-600 hover:rounded-sm'>Jobs</Link>
                    </li>
                    <li>
                        <Link to="/contacts" className='px-7 py-2.5 text-sm text-white text-bold hover:bg-blue-600 hover:rounded-sm'>Contacts</Link>
                    </li>
                    <li>
                        <Link to="/register" className='px-8 py-2.5 text-sm text-white text-bold hover:bg-blue-600 hover:rounded-sm bg-blue-500/30 rounded-sm'>Sign Up</Link>
                    </li>
                </ul>
                <button className='md:hidden cursor-pointer text-white p-2' onClick={() => setIsOpen(!isOpen)}>{isOpen ? <X size={30}/> : <Menu size={30} />}</button>
                {isOpen  && (
                    <motion.div {...ScrollUp} className='absolute top-15.5 left-0 w-full h-auto bg-linear-to-r from-blue-500 to-blue-600 flex md:hidden z-1'>
                        <ul className='flex flex-col font-medium space-y-4 p-6'>
                            <li className='mb-5'>
                                <Link to="/" className='px-8 py-2.5 text-sm text-white text-bold hover:text-blue-300 hover:rounded-sm bg-blue-500/30 rounded-sm'>Home</Link>
                            </li>
                            <li className='mb-5'>
                                <Link to="/about" className='px-8 py-2.5 text-sm text-white text-bold hover:text-blue-300 hover:rounded-sm bg-blue-500/30 rounded-sm'>About</Link>
                            </li>
                            <li className='mb-5'>
                                <Link to="/jobs" className='px-8 py-2.5 text-sm text-white text-bold hover:text-blue-300 hover:rounded-sm bg-blue-500/30 rounded-sm'>Jobs</Link>
                            </li>
                            <li>
                                <Link to="/contacts" className='px-8 py-2.5 text-sm text-white text-bold hover:text-blue-300 hover:rounded-sm bg-blue-500/30 rounded-sm'>Contacts</Link>
                            </li>
                            <li>
                                <Link to="/register" className='px-8 py-2.5 text-sm text-white text-bold hover:text-blue-300 hover:rounded-sm bg-blue-500/30 rounded-sm'>Sign Up</Link>
                            </li>
                        </ul>
                    </motion.div>
                )}
            </nav>
        </>
    );
}