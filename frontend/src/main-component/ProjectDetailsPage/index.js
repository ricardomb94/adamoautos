import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar'
import PageTitle from '../../components/pagetitle'
import ProjectSingle from '../../components/ProjectSingle'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'


const ProjectDetailsPage =() => {
    return(
        <Fragment>
            <Navbar/>
            <PageTitle 
                pageTitle={"Proposition de vente"} 
                pagesub={'Achetez'}
            /> 
            <ProjectSingle/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default ProjectDetailsPage;
