
import axios from 'axios';
const apiURL = "http://shoppingintegration-env.eba-mafprtpj.us-east-2.elasticbeanstalk.com/"
   
export function GetListas(){
     return axios.get(apiURL + "api/v1/all/orders").then(res =>{
      return  res.data
    })
}

export function EditListas(){
   return axios.get(apiURL + "all").then(res =>res.data)
}