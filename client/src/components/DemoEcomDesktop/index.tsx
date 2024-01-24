import { useEffect, useState } from "react";
import "./index.css";
import { useWindowSize } from "@uidotdev/usehooks";
import { ImgDemo2Logo1, ImgDemo2Logo2, ImgDemo2Logo3, ImgDemo2Logo4, ImgDemo2Product1, ImgDemo2Product2, ImgDemo2Product3, ImgDemo2Product4, ImgDemo2Product5, ImgDemo2Product6, ImgDemo2Product7, ImgDemo2Product8, PreviewDemo1 } from "../../assets/images";

interface DemoProps {
    handlers?: any;
}

const DemoEcom = ({handlers}:DemoProps) =>{
    // console.log(handlers)
    const setIsDemo2 = handlers && handlers.setIsDemo2 || (()=> null)

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
            <div className="demo-ecom" onClick={isLogin ? (()=>setIsDemo2(false) ):( ()=> null)}>
                
                {
                    isLogin ? 
                    <>
                    <div className={`demo2-navbar ${isLogin ? 'demo2-navbar-slide' : ""}`}>
                        <div className="anchor-text demo2-anchor-logo">
                            <img className="login-logo-navbar-d2" src={ImgDemo2Logo1}/>
                        </div>
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
                                <a className="anchor-text demo1-anchor-item">book session</a>
                            </div>

                        }
                    </div>
                    <div className="demo2-content">
                        <div className="demo2-tagline-banner">
                            <p className="demo2-content-tagline">Hi, Allison!</p>
                             <span className="demo2-content-tagline-alt">Welcome to homepage</span>
                        </div>
                        <p className="demo2-conveyor-title">Current Wears</p>
                        <div className="demo2-products-conveyor">
                            <div className="demo2-conveyor-grid-item">
                                <img className="demo2-preview-card-img" src={ImgDemo2Product1}/>
                                <p className="demo2-preview-card-info">sliding navbar</p>
                            </div>
                            <div className="demo2-conveyor-grid-item">
                                <img className="demo2-preview-card-img" src={ImgDemo2Product2}/>
                                <p className="demo2-preview-card-info">sliding navbar</p>
                            </div>
                            <div className="demo2-conveyor-grid-item">
                                <img className="demo2-preview-card-img" src={ImgDemo2Product3}/>
                                <p className="demo2-preview-card-info">sliding navbar</p>
                            </div>
                            <div className="demo2-conveyor-grid-item">
                                <img className="demo2-preview-card-img" src={ImgDemo2Product4}/>
                                <p className="demo2-preview-card-info">sliding navbar</p>
                            </div>
                        </div>
                        <p className="demo2-conveyor-title">Eye Wears</p>
                        <div className="demo2-products-conveyor">
                            <div className="demo2-conveyor-grid-item">
                                <img className="demo2-preview-card-img" src={ImgDemo2Product5}/>
                                <p className="demo2-preview-card-info">sliding navbar</p>
                            </div>
                            <div className="demo2-conveyor-grid-item">
                                <img className="demo2-preview-card-img" src={ImgDemo2Product6}/>
                                <p className="demo2-preview-card-info">sliding navbar</p>
                            </div>
                            <div className="demo2-conveyor-grid-item">
                                <img className="demo2-preview-card-img" src={ImgDemo2Product7}/>
                                <p className="demo2-preview-card-info">sliding navbar</p>
                            </div>
                            <div className="demo2-conveyor-grid-item">
                                <img className="demo2-preview-card-img" src={ImgDemo2Product8}/>
                                <p className="demo2-preview-card-info">sliding navbar</p>
                            </div>
                        </div>
                        
                    </div>
                    </> : 
                    <>
                        <div className="login-banner-wrap-d2">
                            <div className="login-banner-d2">
                                <img className="login-logo-d2" src={ImgDemo2Logo1}/>
                                <p className="login-title-d2">Lorem Ipsum</p>
                                <div className="login-form-wrap-d2">
                                    
                                    <form className="login-form-d2">
                                        <label className="login-form-label-d2" htmlFor="email">Email:</label>
                                        <input type="email" id="email" name="email" required></input>

                                        <label className="login-form-label-d2" htmlFor="password">Password:</label>
                                        <input type="password" id="password" name="password" required></input>

                                        <span className="login-button-d2" onClick={()=>setIsLogin(true)}>LOGIN</span>
                                    </form>
                                </div>
                                
                            </div>
                        </div>
                        
                    </>
                }
                
            </div>
        </>
    )
};

export default DemoEcom;