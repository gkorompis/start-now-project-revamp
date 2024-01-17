import { CustomNavbar } from "../../components";
import { SectionCalender } from "../../containers";
import "./index.css"

const ShortCoursePage = () =>{
    return(
        <>
            <div className="start-course-page">
                <CustomNavbar/>
                <SectionCalender/>
            </div>
        </>
    )
};

export default ShortCoursePage;