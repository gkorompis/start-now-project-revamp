import { ImgAws, ImgDocker, ImgGit, ImgMongo, ImgNode, ImgReact, ImgTs, ImgJs } from "../../assets/images";
import "./index.css"


const listResources = [
    ImgAws, ImgNode, ImgMongo, ImgTs, ImgGit, ImgReact, ImgDocker , ImgJs
]
let uniqueId=0

const SectionResources = () =>{
    return(
        <>
            <div className="section-resources">
                <p className="section-resource-title">resources:</p>
                <div className="resources-card-deck">
                    {
                        listResources.map((x:any, item:any)=>{
                            uniqueId += 1;
                            return(
                                <>
                                    <div id={`${uniqueId}+${item}`} className="grid-item" >
                                        <img className={"resources-img" + " " + (+uniqueId==5 ? "grid-git" : "")} src={x}/>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
};

export default SectionResources;