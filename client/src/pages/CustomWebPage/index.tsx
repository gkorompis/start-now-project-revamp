import { CustomNavbar } from "../../components";
import { SectionPreviews } from "../../containers";
import "./index.css";

const CustomWebPage = () =>{
    return(
        <>
            <div className="custom-web-page">
                <CustomNavbar/>
                <SectionPreviews/>
                {/* <p className="custom-web-title">custom web</p> */}
            </div>
        </>
    )
};

export default CustomWebPage;