import '../index.css'
import { Link } from "react-router-dom";
export default function NavBar(){
    return(
        <>
            <nav className="w-full h-15 bg-linear-to-r from-blue-500 to-blue-600 flex flex-row px-7 justify-between items-center">
            <div>
                <h3 className="text-2xl font-semibold text-white cursor-pointer">WorkSphere</h3>
            </div>
            <div className='w-125 h-full flex flex-row justify-evenly items-center mr-10 overflow-hidden'>
                <ul className='flex justify-evenly items-center'>
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
            </div>
            </nav>
        </>
    );
}