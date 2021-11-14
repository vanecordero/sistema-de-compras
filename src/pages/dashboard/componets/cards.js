import FindImg from "components/getImages/findImg";
import e from "../style.module.css"


export default function Card({action, url, desc, className}) {
    return ( 
        <>
        <div className="col-3 p-2">
            <div className={`shadow-sm ${e.card}`}>
                <div className="card-body">
                    <div>
                       <FindImg src={url} alt={desc} className={className} /> 
                    </div>                    
                    <p className={e.card_text}>{action}</p>
                </div>
            </div>
        </div>
        </>
     );
}
 