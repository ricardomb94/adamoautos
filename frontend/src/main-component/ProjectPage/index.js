import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar'
import PageTitle from '../../components/pagetitle'
import Project from '../../components/Project'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'


const ProjectPage =() => {
    return(
        <Fragment>
            <Navbar/>
            <PageTitle 
                pageTitle={"Proposition d'achat"} 
                pagesub={'Achetez'}
            /> 
            <Project/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default ProjectPage;
