import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar'
import PageTitle from '../../components/pagetitle'
import Contactpage from '../../components/Contactpage'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'


const ContactPage =() => {
    return(
        <Fragment>
            <Navbar/>
            <PageTitle 
                pageTitle={'Contact'} 
                pagesub={'Contact'}
                /> 
            <Contactpage/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default ContactPage;

