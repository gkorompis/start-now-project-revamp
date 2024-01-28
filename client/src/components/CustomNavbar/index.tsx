import { useEffect, useState } from "react";
import "./index.css"
import { useWindowSize } from "@uidotdev/usehooks";
import { useNavigate } from "react-router-dom";
import { ModalStartNow } from "../../containers";
import { ImgModalClose } from "../../assets/images";

interface CustomNavbarProps {
    handlers?: any
}

const CustomNavbar = ({handlers}:CustomNavbarProps) =>{
    const [isModalStartNow, setIsModalStartNow] = useState(false);
    const size = useWindowSize();
    const [isBurger, setIsBurger] = useState(false);
    const [isBurgerOpen, setIsBurgenOpen] = useState(false);

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
                                <div className="layers" onClick={()=>setIsBurgenOpen(true)}>
                                    <span className="burger-span layer-a"></span>
                                    <span className="burger-span layer-b"></span>
                                    <span className="burger-span layer-c"></span>
                                </div>
                                
                            </div>
                            <div className={`burger-bar-slider ${isBurgerOpen ? "slider-show" : ""} flex-center-col-x`}>

                                <img className="slider-close-img" src={ImgModalClose} onClick={()=>setIsBurgenOpen(false)}/>
                                <div className="bar-slider-menu flex-center-col-y">
                                    <a className="navbar-anchors anchor-link-slider" onClick={()=>handleNavigate("/courses")}>coding program</a>
                                    <a className="navbar-anchors anchor-link-slider" onClick={()=>handleNavigate("/live-courses")}>live courses</a>
                                    <a className="navbar-anchors anchor-link-slider" onClick={()=>handleNavigate("/custom-web")}>custom website</a>
                                    {/* <div className="navbar-div-button navbar-div"> */}
                                    <a className="anchor-button-slider" onClick={()=>setIsModalStartNow(true)}>start now</a>
                                    {/* </div>  */}
                                </div>
                            </div>
                        </>
                     :  <>
                            <div className="navbar-div-links navbar-div">
                                <a className="navbar-anchors anchor-link" onClick={()=>handleNavigate("/courses")}>coding program</a>
                                <a className="navbar-anchors anchor-link" onClick={()=>handleNavigate("/live-courses")}>live courses</a>
                                <a className="navbar-anchors anchor-link" onClick={()=>handleNavigate("/custom-web")}>custom website</a>
                            </div>
                            <div className="navbar-div-button navbar-div">
                                <a className="navbar-anchors anchor-button" onClick={()=>setIsModalStartNow(true)}>start now</a>
                            </div> 
                        </> 
                    
                }
                  
            </div>
            {
                isModalStartNow ? <ModalStartNow handlers={{setIsModalStartNow}}/> : null
            }
        </>
    )
}

export default CustomNavbar;