import "./index.css"

const CustomNavbar = () =>{

    return(
        <>
            <div className="custom-navbar">
                <div className="navbar-div-logo navbar-div">
                    <a className="navbar-anchors anchor-logo">start now</a>
                </div>
                <div className="navbar-div-links navbar-div">
                    <a className="navbar-anchors anchor-link">intensive class</a>
                    <a className="navbar-anchors anchor-link">live courses</a>
                    <a className="navbar-anchors anchor-link">custom website</a>
                </div>
                <div className="navbar-div-button navbar-div">
                    <a className="navbar-anchors anchor-button">start now</a>
                </div>   
            </div>
        </>
    )
}

export default CustomNavbar;