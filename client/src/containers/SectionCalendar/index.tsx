import { ImgFlyer1, ImgFlyer2, ImgFlyer3, ImgFlyer4 } from "../../assets/images";
import "./index.css"

const listCalendar = [
    {
        image: ImgFlyer1, 
        desc: ""
    },
    {
        image: ImgFlyer2, 
        desc: ""
    }
]

const SectionCalendar = () =>{
    return(
        <>
            <div className="section-calendar">
                <p className="section-calendar-title">UPCOMING COURSES</p>
                <div className="calendar-deck">
                    {
                        listCalendar.map((x:any, item:any)=>{
                            const {image, desc} = x;
                            return(
                                <>
                                    <div className="grid-item">
                                        <div className="calendar-card">
                                          <img className="calendar-card-img" src={image}/>
                                          <p className="calendar-card-desc">

                                          </p>
                                          <span className="calendar-card-span">
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

export default SectionCalendar;