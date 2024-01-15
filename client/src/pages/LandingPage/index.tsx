import { ImgNeural, ImgRound } from "../../assets/images"
import { CustomNavbar } from "../../components"
import { SectionFlyers, SectionIntensive, SectionResources, SectionServices } from "../../containers"
import "./index.css"

const LandingPage = () =>{

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
                        <p className="tagline-landing-page-banner">Improve your project, <span className="tagline-span">start now.</span></p>
                    </div>
                </div>
                
                <SectionServices/>
                <SectionIntensive/>
                <SectionResources/>
                <SectionFlyers/>
                
            </div>
        </>
    )
}

export default LandingPage