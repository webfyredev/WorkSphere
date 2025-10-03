import PageHeader from "../components/pageHeader"
import NavBar from "../components/NavBar"
import Footer from "../components/footer"
import jobImg from '../images/doms (3).jpg'
export default function Jobs(){
    return(
        <>
            <NavBar />
            <PageHeader 
            title = 'Jobs'
            img = {jobImg}/>  
            <Footer />
        </>
    )
}