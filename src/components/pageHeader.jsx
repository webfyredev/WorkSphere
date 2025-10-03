import AboutImg from '../images/banner-9.jpg'
import { Link } from 'react-router-dom'
export default function PageHeader(props){

    return (
        <>
        <div className="w-full h-65 relative mb-5">
            <img src={props.img}  className='w-full h-full object-cover'/>
            <div className='w-full h-full absolute inset-0 bg-black/50 p-10'>
                <div className='w-70 h-20 mt-5 flex justify-left items-center p-3'>
                    <h3 className='text-blue-400 font-semibold text-xl'>
                    <Link to="/">Home<span className='text-white text-lg'>/ {props.title}</span></Link>
                    </h3>
                </div>
            </div>
        </div>
        </>
    )
};
