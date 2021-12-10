
import axios from 'axios';
const apiURL = "http://shoppingintegration-env.eba-mafprtpj.us-east-2.elasticbeanstalk.com"
    
export function GetMedidas(){
    return axios.get(apiURL + "/api/v1/all/measure").then(res =>{
      return  res.data
    })
}

export function EditMedidas(){
    return axios.get(apiURL + "/all").then(res =>res.data)

}

export function DeleteMedidas(id){
  return axios.delete(apiURL + "/delete/"+id).then(res =>res.data)

}