import { useState } from "react";
import { Preview1, PreviewDemo1 } from "../../assets/images";
import "./index.css";
import { DemoSlidingBar } from "../../components";

const InteractiveDemos = () =>{
    const [isDemo1, setIsDemo1] = useState(false);
    const handleDemo1 =()=>{
        setIsDemo1(true);
    };
    return(
        <>
            <p className="interactive-demos-title">Interactive Demos</p>
            <div className="interactive-demos-conveyor">
                <div className="grid-item conveyor-grid-item">
                    <img className="demo-preview-card-img" src={PreviewDemo1} onClick={handleDemo1}/>
                    <p className="demo-preview-card-info">sliding navbar</p>
                </div>
            </div>
            {
                isDemo1 ? 
                <div className="bg-blur demo-wrap" onClick={()=>null}>
                    <div className="demo-preview">
                        <DemoSlidingBar handlers={{
                            setIsDemo1
                        }}/>
                    </div>
                </div> : null
            }
        </>
    )
};

export default InteractiveDemos;

