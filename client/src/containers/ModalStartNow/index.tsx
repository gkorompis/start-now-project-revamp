import { useState } from "react";
import { ImgCourse2, ImgCourse, ImgService, ImgModalClose } from "../../assets/images";
import "./index.css";

interface ModalStartNowProps {
    handlers?: any
}

const openLinkHandler = (link:any) =>{
        console.log("link", link)
        window.open(link, '_blank');
    }

const ModalStartNow = ({handlers}:ModalStartNowProps) =>{

    const setIsModalStartNow = handlers && handlers.setIsModalStartNow || ((bool:any)=>null);
       


    const [isTooltipCoding, setIsTooltipCoding] = useState(false);
    const [isTooltipWebsite, setIsTooltipWebsite] = useState(false);

    const handleOptionCodingClass = ()=>{
        openLinkHandler('https://startnow-coding-program.paperform.co/');
        setIsTooltipCoding(false);
        setIsModalStartNow(false);
    }

    const handleOptionShortCourse= ()=>{
        openLinkHandler('https://startnow-short-course.paperform.co/');
        setIsTooltipCoding(false);
        setIsModalStartNow(false);
    }
     
    return(
        <>
            <div className="modal-start-now">
                <div className="modal-start-now-wrap">
                    
                    <div className="modal-start-now-wrap-header">
                        <div>
                        
                        </div>
                        <p className="modal-start-now-title">Choose Service</p>
                        <div className="modal-close-grid-item">
                            <img className="modal-close-img" src={ImgModalClose} onClick={()=>setIsModalStartNow(false)}/>
                        </div>
                    </div>
                    
                    <div className="modal-start-now-deck">
                        {/* <div className="modal-grid-item">
                            <div className="modal-service-card">
                                <img className="card-cap-img" src={ImgCourse2}/>
                            </div>
                        </div> */}
                        <div className="modal-grid-item">
                            <div className="modal-service-card">
                                    <img className="modal-service-card-img" src={ImgCourse2} onClick={()=> setIsTooltipCoding(true)}/>
                                    <p className="modal-service-card-text" onClick={()=> setIsTooltipCoding(true)}>Coding Program</p>
                                    {
                                        isTooltipCoding ?
                                        <div className="modal-tooltip-wrap">
                                            <div className="modal-tooltip-slide">
                                                <img className="modal-close-tooltip" src={ImgModalClose} onClick={()=>setIsTooltipCoding(false)}/>
                                                <p className="modal-tooltip-option" onClick={handleOptionCodingClass}>Coding Enrichment</p>
                                                <p className="modal-tooltip-option" onClick={handleOptionCodingClass}>Specialised Skill Programming</p>
                                                <p className="modal-tooltip-option" onClick={handleOptionShortCourse}>Live Short Courses</p>
                                            </div>
                                        </div> : null
                                    }
                                    
                            </div>
                        </div>
                        {/* <div className="modal-grid-item">
                            <div className="modal-service-card">
                                <div className="modal-service-card">
                                    <img className="card-cap-img" src={ImgService}/>
                                </div>
                            </div>
                        </div> */}
                        <div className="modal-grid-item">
                            <div className="modal-service-card">
                                 <img className="modal-service-card-img" src={ImgService} onClick={()=> setIsTooltipWebsite(true)}/>
                                 <p className="modal-service-card-text" onClick={()=> setIsTooltipWebsite(true)}>Custom Website</p>
                                 {
                                        isTooltipWebsite ?
                                        <div className="modal-tooltip-wrap">
                                            <div className="modal-tooltip-slide">
                                                <img className="modal-close-tooltip" src={ImgModalClose} onClick={()=>setIsTooltipWebsite(false)}/>
                                                <p className="modal-tooltip-option" onClick={handleOptionCodingClass}>Consult by whatsapp</p>
                                                <p className="modal-tooltip-option" onClick={handleOptionCodingClass}>Request for quote</p>
                                            </div>
                                        </div> : null
                                    }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default ModalStartNow;