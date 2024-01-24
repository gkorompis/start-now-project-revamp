import { useState } from "react";
import { Preview1, PreviewDemo1 } from "../../assets/images";
import "./index.css";
import { DemoEcom, DemoSlidingBar } from "../../components";

const InteractiveDemos = () =>{
    const [isDemo1, setIsDemo1] = useState(false);
    const [isDemo2, setIsDemo2] = useState(false);


    console.log(setIsDemo2);
    const handleDemo1 =()=>{
        setIsDemo1(true);
    };
    const handleDemo2 =()=>{
        setIsDemo2(true);
    };
    return(
        <>
            <p className="interactive-demos-title">Interactive Demos</p>
            <div className="interactive-demos-conveyor">
                <div className="grid-item conveyor-grid-item">
                    <img className="demo-preview-card-img" src={PreviewDemo1} onClick={handleDemo1}/>
                    <p className="demo-preview-card-info">sliding navbar</p>
                </div>
                <div className="grid-item conveyor-grid-item">
                    <img className="demo-preview-card-img" src={PreviewDemo1} onClick={handleDemo2}/>
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
            {
                isDemo2 ?
                <div className="bg-blur demo-wrap" onClick={()=>null}>
                    <div className="demo-preview">
                        <DemoEcom handlers={{
                            setIsDemo2
                        }}/>
                    </div>
                </div> : null
            }
        </>
    )
};

export default InteractiveDemos;

