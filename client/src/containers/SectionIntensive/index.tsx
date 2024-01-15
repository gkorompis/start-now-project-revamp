import { ImgCheck } from "../../assets/images";
import "./index.css"
const SectionIntensive = () =>{
    return (
        <>
            <div className="section-intensive-class">
                <p className="section-title">EXPLORE INTENSIVE CLASS PROGRAMS</p>
                <div className="class-card-deck">
                    <div className="grid-item">
                        <div className="class-card module-summary">
                            <p className="class-card-title">Software Engineering</p>
                            <div className="class-card-infos">
                                <div className="class-card-info-item">
                                    <img className="class-card-info-item-img" src={ImgCheck}/>
                                    <p className="class-card-info-item-text">Web Essentials</p>
                                </div>
                                <div className="class-card-info-item">
                                    <img className="class-card-info-item-img" src={ImgCheck}/>
                                    <p className="class-card-info-item-text">Javascript Programming</p>
                                </div>
                                <div className="class-card-info-item">
                                    <img className="class-card-info-item-img" src={ImgCheck}/>
                                    <p className="class-card-info-item-text">Front-end Development with React</p>
                                </div>
                                <div className="class-card-info-item">
                                    <img className="class-card-info-item-img" src={ImgCheck}/>
                                    <p className="class-card-info-item-text">Back-end Development with Node JS</p>
                                </div>
                                <div className="class-card-info-item">
                                    <img className="class-card-info-item-img" src={ImgCheck}/>
                                    <p className="class-card-info-item-text">Mongodb Essentials</p>
                                </div>
                                <div className="class-card-info-item">
                                    <img className="class-card-info-item-img" src={ImgCheck}/>
                                    <p className="class-card-info-item-text">Continous Integration & Deployment</p>
                                </div>
                                <div className="class-card-info-item">
                                    <img className="class-card-info-item-img" src={ImgCheck}/>
                                    <p className="class-card-info-item-text">AWS Cloud Computing</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid-item">
                        <div className="class-card module-summary">
                            <p className="class-card-title">Data Scientist</p>
                            <div className="class-card-infos">
                                <div className="class-card-info-item">
                                    <img className="class-card-info-item-img" src={ImgCheck}/>
                                    <p className="class-card-info-item-text">Python Programming</p>
                                </div>
                                <div className="class-card-info-item">
                                    <img className="class-card-info-item-img" src={ImgCheck}/>
                                    <p className="class-card-info-item-text">Data Manipulation and Transformation</p>
                                </div>
                                <div className="class-card-info-item">
                                    <img className="class-card-info-item-img" src={ImgCheck}/>
                                    <p className="class-card-info-item-text">Various Data Visualization Modules</p>
                                </div>
                                <div className="class-card-info-item">
                                    <img className="class-card-info-item-img" src={ImgCheck}/>
                                    <p className="class-card-info-item-text">Front-end Development with React</p>
                                </div>
                                <div className="class-card-info-item">
                                    <img className="class-card-info-item-img" src={ImgCheck}/>
                                    <p className="class-card-info-item-text">Essential statistical tools</p>
                                </div>
                                <div className="class-card-info-item">
                                    <img className="class-card-info-item-img" src={ImgCheck}/>
                                    <p className="class-card-info-item-text">Machine Learning-based Analysis</p>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SectionIntensive;