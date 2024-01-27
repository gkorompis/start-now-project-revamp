import { useEffect, useState } from "react";
import "./index.css";
import { useWindowSize } from "@uidotdev/usehooks";

interface DemoProps {
    handlers?: any;
}

const DemoSlidingBar = ({handlers}:DemoProps) =>{
    // console.log(handlers)
    const setIsDemo1 = handlers && handlers.setIsDemo1 || (()=> null)

    const size = useWindowSize();
    const [isBurgerD1, setIsBurgerD1] = useState(false);
    const [isLogin, setIsLogin] = useState(false);

    useEffect(()=>{
        const {height, width} = size as any;
        if(+width<780){
            setIsBurgerD1(true)
        } else {
            setIsBurgerD1(false)
        }
    }, [size]);
    return(
        <>
            <div className="demo-sliding-bar" onClick={isLogin ? (()=>setIsDemo1(false) ):( ()=> null)}>
                {
                    isLogin ? 
                    <>
                    <div className={`demo1-navbar ${isLogin ? 'demo1-navbar-slide' : ""}`}>
                        <a className="anchor-text demo1-anchor-logo">Lorem Ipsum</a>
                        {
                            isBurgerD1 ? 
                            <div className="demo1-burger">
                                <div className="demo1-layers">
                                    <span className="demo1-burger-span layer-a"></span>
                                    <span className="demo1-burger-span layer-b"></span>
                                    <span className="demo1-burger-span layer-c"></span>
                                </div>
                            </div> :
                            <div className="demo1-anchor-groups">
                                <a className="anchor-text demo1-anchor-item">home</a>
                                <a className="anchor-text demo1-anchor-item">about us</a>
                                <a className="anchor-text demo1-anchor-item">logout</a>
                            </div>

                        }
                    </div>
                    <div className="demo1-content">
                        <div className="demo1-tagline-banner">
                            <p className="demo1-content-tagline">Hi, Allison!</p>
                             <span className="demo1-content-tagline-alt">Welcome to homepage</span>
                        </div>
                        
                    </div>
                    </> : 
                    <>
                        <div className="login-banner-wrap-d1">
                            <div className="login-banner-d1">
                                <p className="login-title-d1">Lorem Ipsum</p>
                                <span className="login-button-d1" onClick={()=>setIsLogin(true)}>LOGIN</span>
                            </div>
                        </div>
                        
                    </>
                }
                
            </div>
        </>
    )
};

export default DemoSlidingBar;