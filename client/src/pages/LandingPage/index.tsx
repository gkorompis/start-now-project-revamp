import { ImgNeural, ImgRound } from "../../assets/images"
import { CustomNavbar } from "../../components"
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
                        <p className="tagline-landing-page-banner">improve your case, <span className="tagline-span">start now.</span></p>
                    </div>
                </div>
                <div className="section-intensive-class">
                    <p className="tagline-landing-page-banner">intensive class</p>
                </div>
            </div>
        </>
    )
}

export default LandingPage