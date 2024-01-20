import { RegistrationSteps } from "../../assets/images";
import { CustomNavbar } from "../../components";
import { SectionCalender } from "../../containers";
import "./index.css"

const ShortCoursePage = () =>{
    return(
        <>
            <div className="start-course-page">
                <CustomNavbar/>
                {/* <div className="registration-course-guide">
                        <p>Registration Guide</p>
                        <p className="registration-course-text">1. Click on course you want to participate</p>
                        <p className="registration-course-text">2. Fill in registration form</p>
                        <p className="registration-course-text">3. Wait for 1-on-1 follow up from Start Now team</p>
                    </div> */}
                    {/* <div className="registration-course-guide-wrap">
                        <img className="registration-course-guide-img" src={RegistrationSteps}/>
                    </div> */}
                    
                <SectionCalender/>
            </div>
        </>
    )
};

export default ShortCoursePage;