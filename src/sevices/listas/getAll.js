
import axios from 'axios';

export default function GetListas(){
    const apiURL = "https://salessystemv1.herokuapp.com/api/v1/compras"

    return axios.get(apiURL + "/all").then(res =>res.data)

}