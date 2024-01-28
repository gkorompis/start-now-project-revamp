import { ImgFlyer1, ImgFlyer2, ImgFlyer3, ImgFlyer4 } from "../../assets/images";
import "./index.css"

const listFlyers = [
    {
        image: ImgFlyer1, 
        desc: "short"
    },
    {
        image: ImgFlyer2, 
        desc: "short"
    },
    {
        image: ImgFlyer3, 
        desc: "class"
    }
]

const SectionFlyers = () =>{
    const openLinkHandler = (link:any) =>{
        console.log("link", link)
        window.open(link, '_blank');
    }
    return(
        <>
            <div className="section-flyers">
                <p className="section-flyers-title">UPCOMING COURSES</p>
                <div className="flyers-deck">
                    {
                        listFlyers.map((x:any, item:any)=>{
                            const {image, desc} = x;
                            const isCodingClass = desc == "class" ? true : false;
                            return(
                                <>
                                    <div className="grid-item">
                                        <div className="flyer-card">
                                          <img className="flyer-card-img" src={image}/>
                                          <p className="flyer-card-desc">

                                          </p>
                                          <span className="flyer-card-span" onClick={
                                                (
                                                    isCodingClass ? 
                                                    ()=> openLinkHandler('https://startnow-coding-program.paperform.co')
                                                    :()=> openLinkHandler("https://startnow-short-course.paperform.co")
                                                )
                                            }>
                                            Register Now
                                          </span>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default SectionFlyers;