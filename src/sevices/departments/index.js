
import axios from 'axios';
const apiURL = "http://shoppingintegration-env.eba-mafprtpj.us-east-2.elasticbeanstalk.com/"
    
export function GetDepartaments(){
    return axios.get(apiURL + "api/v1/all/department").then(res =>{
      return  res.data
    })
}
export function EditDepartaments(){
     return axios.get(apiURL + "/all").then(res =>res.data)
}

export function DeleteDepartaments(id){
 return axios.delete(apiURL + "api/v1/delete/department"+id).then(res =>res.data)

}

export function AddDepartaments(json){
  console.log(json)
  return axios({
    method: 'post',
    url: `${apiURL}/add`,
    data: json}).then(res =>res.data)
  
}