import Footer from "../components/footer";
import NavBar from "../components/NavBar";
import PageHeader from "../components/pageHeader";
import contactsImg from '../images/bnr1.jpg'
import SoonBg from '../images/soon.jpg'
import { motion } from "framer-motion";
import { scrollRight } from "../animations/motion";
export default function Contacts(){
    return(
        <>
            <NavBar />
            <PageHeader
            title = 'Contacts'
            img = {contactsImg}
             />
             <div className="mt-5 w-full h-90 flex justify-center items-center mb-5 p-2 md:p-0">
                <motion.img {...scrollRight} src={SoonBg} className=" w-full md:w-[45%] h-full object-cover hover:cursor-pointer" />
             </div> 
            <Footer />
        </>
    )
}