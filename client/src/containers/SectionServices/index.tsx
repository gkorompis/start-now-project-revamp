import { ImgCourse, ImgCourse2, ImgCourse3, ImgCourse4, ImgService } from "../../assets/images";
import "./index.css"
const SectionServices = () =>{
    return (
        <>
            <div className="section-services">
                <div className="service-card-deck">
                    <div className="grid-item">
                        <div className="service-card">
                            <div className="card-cap">
                                <img className="card-cap-img" src={ImgCourse2}/>
                            </div>
                            <div className="card-text">
                                <p className="card-title">Register Live Courses</p>
                                <p className="card-info">Start now improving skills through 2 hours short courses or intensive class program</p>
                            </div>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className="service-card">
                            <div className="card-cap">
                                 <img className="card-cap-img" src={ImgService}/>
                            </div>
                            <div className="card-text">
                                <p className="card-title">Request custom website</p>
                                <p className="card-info">Start now improving your project by creating a business website or simple web application</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SectionServices;