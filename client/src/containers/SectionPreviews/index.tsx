import { BannerEnrichment, ImgModalClose, ImgWebDesign, Preview1, Preview10, Preview11, Preview12, Preview2, Preview3, Preview4, Preview5, Preview6, Preview7, Preview8, Preview9 } from '../../assets/images';
import { useState } from "react";
import './index.css'


const openLinkHandler = (link:any) =>{
    // console.log("link", link)
    window.open(link, '_blank');
}


const SectionPreview = () =>{

    const [isClickHere, setIsClickHere] = useState(false);
     const handleOptionCustomWeb= ()=>{
        openLinkHandler('https://custom-web-start-now.paperform.co/');
        setIsClickHere(false);
    }
     const handleOptionCustomWebConsultWa= ()=>{
        openLinkHandler(`https://wa.me/6287715376976?text=Hi,%20I'd%20like%20to%20schedule%20an%20online%20meeting%20to%20discuss%20my%20project.%20Thank%20you.%20`);
        setIsClickHere(false);
    }
    return(
        <>
            <div className="rfq-wrap">
                <img className="request-for-quote-img" src={ImgWebDesign}/>
                <p className="rfq-title">Consult now or Request for quote, <span className="rfq-title-span" onClick={()=>setIsClickHere(true)}>click here</span></p>
            </div>
            
            <p className="website-template-title">Template References</p>
            <div className="section-previews">
                <div className="grid-item">
                    <img className="preview-card-img" src={Preview1}/>
                </div>
                <div className="grid-item">
                    <img className="preview-card-img" src={Preview3}/>
                </div>
                <div className="grid-item">
                    <img className="preview-card-img" src={Preview12}/>
                </div>
                <div className="grid-item">
                    <img className="preview-card-img" src={Preview4}/>
                </div>
                <div className="grid-item">
                    <img className="preview-card-img" src={Preview10}/>
                </div>
                <div className="grid-item">
                    <img className="preview-card-img" src={Preview5}/>
                </div>
                <div className="grid-item">
                    <img className="preview-card-img" src={Preview7}/>
                </div>
                <div className="grid-item">
                    <img className="preview-card-img" src={Preview8}/>
                </div>
                
                
            </div>
            {
                isClickHere ?
                <div className="modal-tooltip-wrap">
                    <div className="modal-tooltip-slide">
                        <img className="modal-close-tooltip" src={ImgModalClose} onClick={()=>setIsClickHere(false)}/>
                        <p className="modal-tooltip-option" onClick={handleOptionCustomWeb}>Request for quote</p>
                        <p className="modal-tooltip-option" onClick={handleOptionCustomWebConsultWa}>Consult by whatsapp</p>
                    </div>
                </div> : null
            }
        </>
    )
};

export default SectionPreview;