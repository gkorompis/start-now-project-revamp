import { ImgCourse2 } from "../../assets/images";
import "./index.css";

const SectionRegSteps = () =>{

    return(
        <>
            <div className="section-reg-steps">
                <p className="reg-steps-title">How To Apply?</p>
                <div className="reg-steps-wrap">
                    <div className="reg-step-item">
                        <img className="reg-step-item-img" src={ImgCourse2}/>
                        <p className="reg-step-item-text">1. Choose Program</p>
                    </div>
                    <div className="reg-step-item">
                        <img className="reg-step-item-img" src={ImgCourse2}/>
                        <p className="reg-step-item-text">2. Fill out form</p>
                    </div>
                    <div className="reg-step-item">
                        <img className="reg-step-item-img" src={ImgCourse2}/>
                        <p className="reg-step-item-text">3. 1-on-1 Follow up</p>
                    </div>

                </div>
            </div>
        </>
    )
};

export default SectionRegSteps;

