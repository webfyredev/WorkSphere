import { Link } from "react-router-dom";
export default function Footer(){
    return(
        <>
            <footer className="w-full h-auto md:h-90 bg-linear-to-r from-blue-500 to-blue-600 p-4">
                <div className="w-full md:w-300 sm:w-180 sm:h-20 h-40 text-left md:h-15 flex flex-col sm:flex-row md:flex-row justify-between items-center p-5">
                <h3 className="text-3xl font-semibold text-white">
                    WorkSphere
                </h3>
                <ul className="flex md:w-120 w-100 h-full justify-evenly items-center md:text-sm text-xs font-semibold text-white">
                    <li>
                        <Link to="/" className="px-5 py-2 hover:bg-blue-600 rounded-sm">Home</Link>
                    </li>
                    <li>
                        <Link to="/about" className="px-5 py-2 hover:bg-blue-600 rounded-sm">About</Link>
                    </li>
                    <li>
                        <Link to="/jobs" className="px-5 py-2 hover:bg-blue-600 rounded-sm">Jobs</Link>
                    </li>
                    <li>
                        <Link to="/contacts" className="px-5 py-2 hover:bg-blue-600 rounded-sm">Contacts</Link>
                    </li>
                    <li>
                        <Link to="/register" className="px-5 py-2 hover:bg-blue-600 rounded-sm">Sign Up</Link>
                    </li>

                </ul>
                </div>
                <div className="w-full h-0.5 bg-blue-600 mt-2"></div>
                <div className="w-full h-[84%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 p-5 gap-20">
                    <div className="w-80 flex flex-col justify-evenly items-left">
                        <h3 className="text-white font-semibold mb-3">
                            About WorkSphere
                        </h3>
                        <p className="text-xs mb-3 text-blue-200">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quia harum reprehenderit magni! Ratione laudantium consequuntur provident fugiat earum voluptatem?
                        </p>
                        <p className="text-xs mb-3 text-blue-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil excepturi eum magnam, perspiciatis ea ullam!</p>
                        <p className="text-xs mb-3 text-blue-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil excepturi eum magnam, perspiciatis ea ullam!</p>
                    </div>
                    <div className="flex flex-col justify-evenly items-left md:ml-15">
                        <h3 className="text-white font-semibold mb-3">
                            All Categories
                        </h3>
                        <ul className="">
                            <li className="mb-4 text-sm text-blue-200 hover:text-white">
                                <Link to="/">Website Development</Link>
                            </li>
                            <li className="mb-4 text-sm text-blue-200 hover:text-white">

                                <Link to="/">App Development</Link>
                            </li>
                            <li className="mb-4 text-sm text-blue-200 hover:text-white">

                                <Link to="/">Software Development</Link>
                            </li>
                            <li className="mb-4 text-sm text-blue-200 hover:text-white">
                                <Link to="/">PHP Development</Link>
                            </li>
                            <li className="mb-4 text-sm text-blue-200 hover:text-white">
                                <Link to="/">Business Analyst</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col justify-evenly items-left">
                        <h3 className="text-white font-semibold mb-3">
                            FAQ
                        </h3>
                        <ul className="">
                            <li className="mb-4 text-sm text-blue-200 hover:text-white">
                                <Link to="/">Terms of Service</Link>
                            </li>
                            <li className="mb-4 text-sm text-blue-200 hover:text-white">

                                <Link to="/">Referral Terms</Link>
                            </li>
                            <li className="mb-4 text-sm text-blue-200 hover:text-white">

                                <Link to="/">Privacy &amp; Services</Link>
                            </li>
                            <li className="mb-4 text-sm text-blue-200 hover:text-white">
                                <Link to="/">How it works</Link>
                            </li>
                            <li className="mb-4 text-sm text-blue-200 hover:text-white">
                                <Link to="/">Support</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col justify-evenly items-left">
                        <h3 className="text-white font-semibold mb-3">
                            Find Jobs
                        </h3>
                        <ul className="">
                            <li className="mb-4 text-sm text-blue-200 hover:text-white">
                                <Link to="/">Asian Jobs</Link>
                            </li>
                            <li className="mb-4 text-sm text-blue-200 hover:text-white">

                                <Link to="/">Europe Jobs</Link>
                            </li>
                            <li className="mb-4 text-sm text-blue-200 hover:text-white">

                                <Link to="/">African Jobs</Link>
                            </li>
                            <li className="mb-4 text-sm text-blue-200 hover:text-white">
                                <Link to="/">American Jobs</Link>
                            </li>
                            <li className="mb-4 text-sm text-blue-200 hover:text-white">
                                <Link to="/">Korean Jobs</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    );
}