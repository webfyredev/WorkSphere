import '../index.css'
import { useState } from 'react';
import { X, Menu } from 'lucide-react';
import { Link } from "react-router-dom";
export default function NavBar(){
    const [isOpen, setIsOpen] = useState(false)
    return(
        <>
            <nav className="w-full h-15 bg-linear-to-r from-blue-500 to-blue-600 flex flex-row px-7 justify-between items-center relative">
            <div>
                <Link to="/" className="text-2xl font-semibold text-white cursor-pointer">WorkSphere</Link>
            </div>
            <div className='w-auto md:w-125 h-full flex flex-row justify-evenly items-center mr-10 overflow-hidden relative'>
                <ul className='hidden md:flex justify-evenly items-center'>
                    <li>
                        <Link to="/" className='px-7 py-2.5 text-sm text-white text-bold hover:bg-blue-600 hover:rounded-sm'>Home</Link>
                    </li>
                    <li>
                        <Link to="/about" className='px-7 py-2.5 text-sm text-white text-bold hover:bg-blue-600 hover:rounded-sm'>About</Link>
                    </li>
                    <li>
                        <Link to="/jobs" className='px-7 py-2.5 text-sm text-white text-bold hover:bg-blue-600 hover:rounded-sm'>Jobs</Link>
                    </li>
                    <li>
                        <Link to="/contacts" className='px-7 py-2.5 text-sm text-white text-bold hover:bg-blue-600 hover:rounded-sm'>Contacts</Link>
                    </li>
                    <li>
                        <Link to="/register" className='px-8 py-2.5 text-sm text-white text-bold hover:bg-blue-600 hover:rounded-sm bg-blue-500/30 rounded-sm'>Sign Up</Link>
                    </li>
                </ul>
                <button className='md:hidden ml-55 cursor-pointer text-white' onClick={() => setIsOpen(!isOpen)}>{isOpen ? <X size={30}/> : <Menu size={30} />}</button>
                {isOpen  && (
                    <div className='absolute top-15 left-0 w-full bg-linear-to-r from-blue-500 to-blue-600 h-auto md:hidden z-1'>
                        <ul className='flex flex-col space-y-5 p-6 font-medium'>
                            <li>
                                <Link to="/" className='px-8 py-2.5 text-sm text-white text-bold hover:bg-blue-600 hover:rounded-sm bg-blue-500/30 rounded-sm'>Home</Link>
                            </li>
                            <li>
                                <Link to="/about" className='px-8 py-2.5 text-sm text-white text-bold hover:bg-blue-600 hover:rounded-sm bg-blue-500/30 rounded-sm'>About</Link>
                            </li>
                            <li>
                                <Link to="/contacts" className='px-8 py-2.5 text-sm text-white text-bold hover:bg-blue-600 hover:rounded-sm bg-blue-500/30 rounded-sm'>Jobs</Link>
                            </li>
                            <li>
                                <Link to="/jobs" className='px-8 py-2.5 text-sm text-white text-bold hover:bg-blue-600 hover:rounded-sm bg-blue-500/30 rounded-sm'>Contacts</Link>
                            </li>
                            <li>
                                <Link to="/register" className='px-8 py-2.5 text-sm text-white text-bold hover:bg-blue-600 hover:rounded-sm bg-blue-500/30 rounded-sm'>Sign Up</Link>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
            </nav>
        </>
    );
}