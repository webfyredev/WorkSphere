import Jobs from '../data/jobs'
import { LucideCircleDollarSign as DollarSign} from 'lucide-react';
import { motion } from 'framer-motion';
import { CardHover, scrollLeft, ScrollUp, CardClicks} from '../animations/motion';
export default function Job (){
    const getBgColor = (type) =>{
        switch(type){
            case 'Full Time':
            return 'bg-blue-500 text-white';
            case 'Part Time':
                return 'bg-blue-300 text-white';
            case 'Freelancing':
                return 'bg-indigo-500 text-white';
            case 'Internship':
                return 'bg-blue-100 text-blue-700';
            default:
                return 'bg-gray-200 text-gray-700'
        };
    }
    return(
        <>
            <motion.h2 {...ScrollUp} className="text-2xl font-semibold mt-15 mb-5 w-full h-10 flex justify-center items-center text-blue-500">Latest Jobs Offers</motion.h2>
            <div className='mt-5 w-full p-5 gap-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
            {Jobs.map((job) => (
                <motion.div {...CardHover} {...scrollLeft} className='sm:w-full md:w-[90%] rounded-xl shadow-[0_0_10px_rgba(0,0,0,0.1)] cursor-pointer flex flex-col items-center p-3 m-5 sm:overflow-hidden'>
                    <div key={job.id} className={`w-30 h-6 ml-65 sm:ml-50 md:ml-60 flex items-center justify-center text-xs font-semibold ${getBgColor(job.type)}`}>{job.type}</div>
                        <div className='w-20 h-20 border-1 border-blue-100 flex justify-center items-center shadow-lg rounded-full'>
                            <img src={job.logo}  className='w-[80%] h-[80%] rounded-full'/>
                        </div>
                        <h3 className='mt-5 mb-2 text-blue-400 font-semibold'>{job.Job_title}</h3>
                        <p className='text-gray-500 text-sm mb-4'>{job.company}</p>
                        <p className='w-20 h-5 text-xs flex justify-center items-center bg-linear-to-r from-blue-500 to-blue-600 text-white rounded-xs font-semibold'>{job.n_of_positions} Position</p>
                        <p className='w-full h-10 mt-15 flex items-center justify-center bg-gray-100 text-sm text-blue-400'>
                            <DollarSign  className='w-4 h-4 text-blue-400 mt-0.5'/>{job.pay_rate}
                        </p>
                </motion.div>
            ))}
            </div>
            <div className='w-full h-12 flex items-center justify-center'>
                <motion.button {...CardHover} {...CardClicks} className="w-50 h-full flex justify-center items-center font-semibold text-white cursor-pointer rounded-sm bg-linear-to-r from-blue-500 to-blue-600">View More Jobs</motion.button>
            </div>
        </>
    );

}