import Footer from "../components/footer";
import NavBar from "../components/NavBar";
import PageHeader from "../components/pageHeader";
import contactsImg from '../images/bnr2.jpg'
export default function Contacts(){
    return(
        <>
            <NavBar />
            <PageHeader
            title = 'Contacts'
            img = {contactsImg}
             />
            <Footer />
        </>
    )
}