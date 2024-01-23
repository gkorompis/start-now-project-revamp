import { useState } from "react";
import { CustomNavbar } from "../../components";
import { InteractiveDemos, SectionPreviews } from "../../containers";
import "./index.css";




const CustomWebPage = () =>{
    

    return(
        <>
            <div className="custom-web-page">
                <CustomNavbar/>
                
                <SectionPreviews/>
                <InteractiveDemos/>
            </div>

            
        </>
    )
};

export default CustomWebPage;