import { useEffect, useState } from "react";
import { CanvaEmbed, CustomNavbar } from "../../components";
import "./index.css"
import { BannerEnrichment, BannerSkillset, RegistrationSteps } from "../../assets/images";
import { SectionRegSteps } from "../../containers";

const CoursesPage = () =>{
    const [isPageSlide, setIsPageSlide] = useState(false);

    const openLinkHandler = (link:any) =>{
        console.log("link", link)
        window.open(link, '_blank');
    }

    useEffect(()=>{
        setIsPageSlide(true);
    }, [])
    return(
        <>
            <div className="courses-page">
                <CustomNavbar/>
                 {/* <div className="registration-guide-wrap">
                        <img className="registration-guide-img" src={RegistrationSteps}/>
                </div> */}
                <SectionRegSteps/>
                <div className={`stand-by  ${isPageSlide ? "page-slide" : ""}` }>
                    
                    {/* <div className="registration-guide">
                        <p className="registration-text">1. Click on course you want to participate</p>
                        <p className="registration-text">2. Fill in registration form</p>
                        <p className="registration-text">3. Wait for 1-on-1 follow up from Start Now team</p>
                    </div> */}
                    <p className="courses-page-title">CODING PROGRAM</p>
                    <div className="class-course-deck">
                        <div className="grid-item">
                            <div className="class-course-card course-card-enrichment-class">
                                <img className="class-course-card-img" src={BannerEnrichment} onClick={()=>openLinkHandler('https://startnow-coding-program.paperform.co')}>
                                </img>
                            </div>
                        </div>
                        <div className="grid-item">
                            <div className="class-course-card course-card-special-skill">
                                <img className="class-course-card-img" src={BannerSkillset} onClick={()=>openLinkHandler('https://startnow-coding-program.paperform.co')}>
                                </img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};
export default CoursesPage