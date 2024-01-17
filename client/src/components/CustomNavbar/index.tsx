import { useEffect, useState } from "react";
import "./index.css"
import { useWindowSize } from "@uidotdev/usehooks";
import { useNavigate } from "react-router-dom";

const CustomNavbar = () =>{
    const size = useWindowSize();
    const [isBurger, setIsBurger] = useState(false);

    const navigate = useNavigate();
    const handleNavigate = (path?:string) =>{
        try{
            const pathName = path || "/";
            navigate(pathName);
        } catch (error:any) {
            console.log({message: error})
        }
    }

    useEffect(()=>{
        const {height, width} = size as any;
        if(+width<740){
            setIsBurger(true)
        } else {
            setIsBurger(false)
        }
    }, [size])
    return(
        <>
            <div className="custom-navbar">
                <div className="navbar-div-logo navbar-div">
                    <a className="navbar-anchors anchor-logo" onClick={()=>handleNavigate()}>start now</a>
                </div>
                {
                    isBurger ?
                        <>
                            <div></div>
                            <div className="burger">
                                <div className="layers">
                                    <span className="burger-span layer-a"></span>
                                    <span className="burger-span layer-b"></span>
                                    <span className="burger-span layer-c"></span>
                                </div>
                            </div>
                        </>
                     :  <>
                            <div className="navbar-div-links navbar-div">
                                <a className="navbar-anchors anchor-link" onClick={()=>handleNavigate("/courses")}>intensive class</a>
                                <a className="navbar-anchors anchor-link" onClick={()=>handleNavigate("/live-courses")}>live courses</a>
                                <a className="navbar-anchors anchor-link">custom website</a>
                            </div>
                            <div className="navbar-div-button navbar-div">
                                <a className="navbar-anchors anchor-button">start now</a>
                            </div> 
                        </> 
                    
                }
                  
            </div>
        </>
    )
}

export default CustomNavbar;