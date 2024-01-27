import { useEffect, useState } from "react";
import "./index.css";
import { useWindowSize } from "@uidotdev/usehooks";
import { ImgDemo2Bg1, ImgDemo2Bg2, ImgDemo2Bg3, ImgDemo2Logo1, ImgDemo2Logo2, ImgDemo2Logo3, ImgDemo2Logo4, ImgDemo2Product1, ImgDemo2Product2, ImgDemo2Product3, ImgDemo2Product4, ImgDemo2Product5, ImgDemo2Product6, ImgDemo2Product7, ImgDemo2Product8, PreviewDemo1 } from "../../assets/images";
import Carousel from 'react-material-ui-carousel';

interface DemoProps {
    handlers?: any;
}

const DemoEcom = ({handlers}:DemoProps) =>{
    // console.log(handlers)
    const setIsDemo2 = handlers && handlers.setIsDemo2 || (()=> null)

    const size = useWindowSize();
    const [isBurgerD1, setIsBurgerD1] = useState(false);
    const [isLogin, setIsLogin] = useState(false);

    const [count1, setCount1] = useState(0)
    const [count2, setCount2] = useState(0)
    const [count3, setCount3] = useState(0)
    const [count4, setCount4] = useState(0)
    const [count5, setCount5] = useState(0)
    const [count6, setCount6] = useState(0)
    const [count7, setCount7] = useState(0)
    const [count8, setCount8] = useState(0)

    const handleSubstract = (currentCount:any, setStateCb:any) =>{
        try{
            if(+currentCount <= 0){
                setStateCb(0)
            } else {
                const updatedCount = +currentCount - 1;
                setStateCb(updatedCount);
            }
        } catch(error){
            console.log(error);
        }
    };

    const handleAdd = (currentCount:any, setStateCb:any) =>{
        try{
            const updatedCount = +currentCount + 1;
            setStateCb(updatedCount);
        } catch(error){
            console.log(error);
        }
    };

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
            <div className={` ${(isLogin ? 'desktop-demo-ecom'  : 'desktop-demo-ecom-default')}`} >
                
                {
                    isLogin ? 
                    <>
                    <div className={`desktop-demo2-navbar ${isLogin ? 'demo2-navbar-slide' : ""}`} onClick={isLogin ? (()=>setIsDemo2(false) ):( ()=> null)}>
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
                                <a className="anchor-text demo1-anchor-item">logout</a>
                            </div>

                        }
                    </div>
                    <div className="dekstop-demo2-content">
                        {/* <div className="demo2-tagline-banner">
                            <p className="demo2-content-tagline">Hi, Allison!</p>
                             <span className="demo2-content-tagline-alt">Welcome to homepage</span>
                        </div> */}
                        <div className="demo2-carousel">
                            <Carousel>
                                <div className="demo2-carousel-banner demo2-banner-1">
                                    <img className="demo2-carousel-image" src={ImgDemo2Bg1}/>
                                </div>
                                <div className="demo2-carousel-banner demo2-banner-2">
                                    <img className="demo2-carousel-image" src={ImgDemo2Bg2}/>
                                </div>
                                <div className="demo2-carousel-banner demo2-banner-3">
                                    <img className="demo2-carousel-image" src={ImgDemo2Bg3}/>
                                </div>
                            </Carousel>
                        </div>
                        <p className="demo2-conveyor-title">Current Wears</p>
                        <div className="demo2-products-conveyor">
                            <div className="demo2-conveyor-grid-item">
                                <img className="demo2-preview-card-img" src={ImgDemo2Product1}/>
                                <div className="demo2-preview-card-wrap flex-center-col">
                                    <p className="demo2-preview-card-info">Charcoal Jeans</p>
                                    <div className="demo2-preview-card-action">
                                        <div className="item1">
                                            <span className="demo2-card-action demo2-action-minus" onClick={()=>handleSubstract(count1, setCount1)}>-</span>
                                        </div>
                                        <div className="item2">
                                            <span className="demo2-card-action demo2-action-count" >{count1}</span>
                                        </div>
                                        <div className="item3">
                                            <span className="demo2-card-action demo2-action-add" onClick={()=>handleAdd(count1, setCount1)}>+</span>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="demo2-conveyor-grid-item">
                                <img className="demo2-preview-card-img" src={ImgDemo2Product2}/>
                                <div className="demo2-preview-card-wrap flex-center-col">
                                    <p className="demo2-preview-card-info">Dark Forest Vest</p>
                                    <div className="demo2-preview-card-action">
                                        <div className="item1">
                                            <span className="demo2-card-action demo2-action-minus" onClick={()=>handleSubstract(count2, setCount2)}>-</span>
                                        </div>
                                        <div className="item2">
                                            <span className="demo2-card-action demo2-action-count" >{count2}</span>
                                        </div>
                                        <div className="item3">
                                            <span className="demo2-card-action demo2-action-add" onClick={()=>handleAdd(count2, setCount2)}>+</span>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="demo2-conveyor-grid-item">
                                <img className="demo2-preview-card-img" src={ImgDemo2Product3}/>
                                <div className="demo2-preview-card-wrap flex-center-col">
                                    <p className="demo2-preview-card-info">Autumn Coat</p>
                                    <div className="demo2-preview-card-action">
                                        <div className="item1">
                                            <span className="demo2-card-action demo2-action-minus" onClick={()=>handleSubstract(count3, setCount3)}>-</span>
                                        </div>
                                        <div className="item2">
                                            <span className="demo2-card-action demo2-action-count" >{count3}</span>
                                        </div>
                                        <div className="item3">
                                            <span className="demo2-card-action demo2-action-add" onClick={()=>handleAdd(count3, setCount3)}>+</span>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="demo2-conveyor-grid-item">
                                <img className="demo2-preview-card-img" src={ImgDemo2Product4}/>
                                <div className="demo2-preview-card-wrap flex-center-col">
                                    <p className="demo2-preview-card-info">Candy Hoodie</p>
                                    <div className="demo2-preview-card-action">
                                        <div className="item1">
                                            <span className="demo2-card-action demo2-action-minus" onClick={()=>handleSubstract(count4, setCount4)}>-</span>
                                        </div>
                                        <div className="item2">
                                            <span className="demo2-card-action demo2-action-count" >{count4}</span>
                                        </div>
                                        <div className="item3">
                                            <span className="demo2-card-action demo2-action-add" onClick={()=>handleAdd(count4, setCount4)}>+</span>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className="demo2-conveyor-title">Eye Wears</p>
                        <div className="demo2-products-conveyor">
                            <div className="demo2-conveyor-grid-item">
                                <img className="demo2-preview-card-img" src={ImgDemo2Product5}/>
                                <div className="demo2-preview-card-wrap flex-center-col">
                                    <p className="demo2-preview-card-info">Malibu Shades</p>
                                    <div className="demo2-preview-card-action">
                                        <div className="item1">
                                            <span className="demo2-card-action demo2-action-minus" onClick={()=>handleSubstract(count5, setCount5)}>-</span>
                                        </div>
                                        <div className="item2">
                                            <span className="demo2-card-action demo2-action-count" >{count5}</span>
                                        </div>
                                        <div className="item3">
                                            <span className="demo2-card-action demo2-action-add" onClick={()=>handleAdd(count5, setCount5)}>+</span>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="demo2-conveyor-grid-item">
                                <img className="demo2-preview-card-img" src={ImgDemo2Product6}/>
                                <div className="demo2-preview-card-wrap flex-center-col">
                                    <p className="demo2-preview-card-info">Blue Neo</p>
                                    <div className="demo2-preview-card-action">
                                        <div className="item1">
                                            <span className="demo2-card-action demo2-action-minus" onClick={()=>handleSubstract(count6, setCount6)}>-</span>
                                        </div>
                                        <div className="item2">
                                            <span className="demo2-card-action demo2-action-count" >{count6}</span>
                                        </div>
                                        <div className="item3">
                                            <span className="demo2-card-action demo2-action-add" onClick={()=>handleAdd(count6, setCount6)}>+</span>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="demo2-conveyor-grid-item">
                                <img className="demo2-preview-card-img" src={ImgDemo2Product7}/>
                                <div className="demo2-preview-card-wrap flex-center-col">
                                    <p className="demo2-preview-card-info">Summer Spy</p>
                                    <div className="demo2-preview-card-action">
                                        <div className="item1">
                                            <span className="demo2-card-action demo2-action-minus" onClick={()=>handleSubstract(count7, setCount7)}>-</span>
                                        </div>
                                        <div className="item2">
                                            <span className="demo2-card-action demo2-action-count" >{count7}</span>
                                        </div>
                                        <div className="item3">
                                            <span className="demo2-card-action demo2-action-add" onClick={()=>handleAdd(count7, setCount7)}>+</span>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="demo2-conveyor-grid-item">
                                <img className="demo2-preview-card-img" src={ImgDemo2Product8}/>
                                <div className="demo2-preview-card-wrap flex-center-col">
                                    <p className="demo2-preview-card-info">Afternoon Sport</p>
                                    <div className="demo2-preview-card-action">
                                        <div className="item1">
                                            <span className="demo2-card-action demo2-action-minus" onClick={()=>handleSubstract(count8, setCount8)}>-</span>
                                        </div>
                                        <div className="item2">
                                            <span className="demo2-card-action demo2-action-count" >{count8}</span>
                                        </div>
                                        <div className="item3">
                                            <span className="demo2-card-action demo2-action-add" onClick={()=>handleAdd(count8, setCount8)}>+</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    </> : 
                    <>
                        <div className="desktop-login-banner-wrap-d2">
                            <div className="login-banner-d2">
                                <img className="login-logo-d2" src={ImgDemo2Logo1}/>
                                <p className="login-title-d2">Lorem Ipsum</p>
                                <div className="desktop-login-form-wrap-d2">
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