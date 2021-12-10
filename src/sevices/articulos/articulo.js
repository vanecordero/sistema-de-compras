
import axios from 'axios';
const apiURL = "http://shoppingintegration-env.eba-mafprtpj.us-east-2.elasticbeanstalk.com/"
export function GetArticulo(){
    
    return axios.get(apiURL + "api/v1/all/articles").then(res =>{
      return  res.data
    })
}

export function EditArticulo(id){
    return axios.get(apiURL + "api/v1/units/"+id+"/update/article/"+id).then(res =>res.data)

}

export function DeleteArticulo(id){

  return axios.delete(apiURL + "api/v1/units/"+id+"/delete/article/"+id).then(res =>res.data)

}