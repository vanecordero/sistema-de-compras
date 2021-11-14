import Card from "./componets/cards";
import { systemOptions } from "utils/systemOptions";
import e from './style.module.css';
import GetListas from "sevices/listas/getAll";

export default function Dashboard () {
   const ALLJOKES = GetListas()
   console.log(ALLJOKES)
    return ( 
    < div className={`container p-0 ${e.dashCtn}`}>
    <div className="row p-1 mt-3">
        {
            Object.keys(systemOptions).map(val =>{
            if(val === "Dashboard"){
                return null
            } 
            if(val === "SolCompras"){
                return null
            } 
            else{
            return <Card key={"card_" + val}
                url={systemOptions[val]["img"]}
                action={systemOptions[val]["action"]}
                desc={systemOptions[val]["action"]}
                className={e.icon}
            /> 
            }})
        }
    </div>

    <div>
        <div>
        <table className="table table-hover bg-white shadow-sm">
        <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            </tr>
            <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            </tr>
            <tr>
            <th scope="row">3</th>
            <td colSpan="2">Larry the Bird</td>
            <td>@twitter</td>
            </tr>
        </tbody>
        </table>
        </div>
    </div>
    </div>
     );
}

