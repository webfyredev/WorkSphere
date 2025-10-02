import NavBar from "../components/NavBar";
import Footer from "../components/footer";
import PageHeader from "../components/pageHeader";
import AboutImg from '../images/banner-9.jpg'
export default function About(){
    return(
        <>
            <NavBar />
            <PageHeader 
            title = "About"
            img = {AboutImg}
            />
            <Footer />
        </>
    );
}