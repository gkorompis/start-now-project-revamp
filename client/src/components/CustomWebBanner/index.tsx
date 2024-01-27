import { useState } from "react";
import { ImgModalClose, ImgWebDesign } from "../../assets/images";
import "./index.css";

const openLinkHandler = (link:any) =>{
    // console.log("link", link)
    window.open(link, '_blank');
}

const CustomWebBanner = () =>{
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

export default CustomWebBanner;