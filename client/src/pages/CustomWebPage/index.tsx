import { useState } from "react";
import { CustomNavbar, CustomWebBanner } from "../../components";
import { InteractiveDemos, SectionPreviews } from "../../containers";
import "./index.css";




const CustomWebPage = () =>{
    

    return(
        <>
            <div className="custom-web-page">
                
                <CustomNavbar/>
                <CustomWebBanner/>
                <InteractiveDemos/>
                <SectionPreviews/>
                
            </div>

            
        </>
    )
};

export default CustomWebPage;