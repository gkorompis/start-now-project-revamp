import { ImgFlyer1, ImgFlyer2, ImgFlyer3, ImgFlyer4 } from "../../assets/images";
import "./index.css"

const listFlyers = [
    ImgFlyer1,
    ImgFlyer2,
    ImgFlyer3
]

const SectionFlyers = () =>{
    return(
        <>
            <div className="section-flyers">
                <p className="section-flyers-title">UPCOMING COURSES</p>
                <div className="flyers-deck">
                    {
                        listFlyers.map((x:any, item:any)=>{
                            return(
                                <>
                                    <div className="grid-item">
                                        <div className="flyer-row">
                                            <div className="grid-item">
                                                <img className="flyer-img" src={x}/>
                                            </div>
                                            <div className="grid-item">
                                                <div className="flyer-card">
                                                    <p className="flyer-card-title">live short course</p>
                                                    <p className="flyer-card-desc">Register now for 2 hours courses about front-end development with react.</p>
                                                    <span className="flyer-card-button">register</span>
                                                </div>
                                            </div>
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