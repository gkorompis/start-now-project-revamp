import { ImgFlyer1, ImgFlyer2, ImgFlyer3, ImgFlyer4 } from "../../assets/images";
import "./index.css"

const listFlyers = [
    {
        image: ImgFlyer1, 
        desc: ""
    },
    {
        image: ImgFlyer2, 
        desc: ""
    },
    {
        image: ImgFlyer3, 
        desc: ""
    }
]

const SectionFlyers = () =>{
    return(
        <>
            <div className="section-flyers">
                <p className="section-flyers-title">UPCOMING COURSES</p>
                <div className="flyers-deck">
                    {
                        listFlyers.map((x:any, item:any)=>{
                            const {image, desc} = x;
                            return(
                                <>
                                    <div className="grid-item">
                                        <div className="flyer-card">
                                          <img className="flyer-card-img" src={image}/>
                                          <p className="flyer-card-desc">

                                          </p>
                                          <span className="flyer-card-span">
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