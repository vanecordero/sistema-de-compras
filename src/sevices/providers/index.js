
import axios from 'axios';
const apiURL = "http://shoppingintegration-env.eba-mafprtpj.us-east-2.elasticbeanstalk.com/"
    
export function GetProviders(){
    return axios.get(apiURL + "api/v1/all/providers").then(res =>{
      return  res.data
    })
}

export function EditProviders(){
   return axios.get(apiURL + "api/v1/all/providers").then(res =>res.data)

}

export function DeleteProviders(id){
 return axios.delete(apiURL + "api/v1/delete/provider/"+id).then(res =>res.data)

}