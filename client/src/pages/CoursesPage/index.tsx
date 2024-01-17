import { useEffect, useState } from "react";
import { CustomNavbar } from "../../components";
import "./index.css"
import { BannerEnrichment, BannerSkillset } from "../../assets/images";

const CoursesPage = () =>{
    const [isPageSlide, setIsPageSlide] = useState(false);

    useEffect(()=>{
        setIsPageSlide(true);
    }, [])
    return(
        <>
            <div className="courses-page">
                <CustomNavbar/>
                <div className={`stand-by  ${isPageSlide ? "page-slide" : ""}` }>
                    <p className="courses-page-title">INTENSIVE CLASS</p>
                    <div className="class-course-deck">
                        <div className="grid-item">
                            <div className="class-course-card course-card-enrichment-class">
                                <img className="class-course-card-img" src={BannerEnrichment}>
                                </img>
                            </div>
                        </div>
                        <div className="grid-item">
                            <div className="class-course-card course-card-special-skill">
                                <img className="class-course-card-img" src={BannerSkillset}>
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