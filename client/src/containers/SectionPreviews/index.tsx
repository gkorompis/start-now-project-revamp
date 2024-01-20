import { BannerEnrichment, ImgWebDesign, Preview1, Preview10, Preview11, Preview12, Preview2, Preview3, Preview4, Preview5, Preview6, Preview7, Preview8, Preview9 } from '../../assets/images';
import './index.css'

const SectionPreview = () =>{
    return(
        <>
            <div className="rfq-wrap">
                <img className="request-for-quote-img" src={ImgWebDesign}/>
                <p className="rfq-title">Consult now or Request for quote, <span className="rfq-title-span">click here</span></p>
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
        </>
    )
};

export default SectionPreview;