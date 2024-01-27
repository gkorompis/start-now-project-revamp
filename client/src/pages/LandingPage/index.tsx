import { ImgNeural, ImgRound } from "../../assets/images"
import { CustomNavbar } from "../../components"
import { SectionFlyers, SectionIntensive, SectionIntensiveMobile, SectionResources, SectionServices } from "../../containers"
import "./index.css"
import { useWindowSize } from "@uidotdev/usehooks";
import { useEffect, useState } from "react";

const LandingPage = () =>{
    const size = useWindowSize();

    const [isMobile, setIsMobile] = useState(false);
    useEffect(()=>{
        const {height, width} = size as any;
        if(+width<560){
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }       
    }, [size]);
    return(
        <>
            <div className="landing-page">
                <CustomNavbar/>
                {/* <div className="page-banner">

                </div> */}
                <div className="landing-page-banner">
                    <div className="landing-page-banner-img">
                        <img className="img-landing-page-banner" src={ImgNeural}/>
                    </div>
                    <div className="landing-page-banner-tagline">
                        <p className="tagline-landing-page-banner">Improve your project, <span className="tagline-span">Start Now.</span></p>
                    </div>
                </div>
                
                <SectionServices/>
                <SectionFlyers/>
                <SectionIntensive/>
                
                <SectionResources/>
                
                
            </div>
        </>
    )
}

export default LandingPage