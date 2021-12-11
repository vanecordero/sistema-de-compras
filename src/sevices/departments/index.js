
import axios from 'axios';
const apiURL = "http://shoppingintegration-env.eba-mafprtpj.us-east-2.elasticbeanstalk.com/api/v1/"
    
export function GetDepartaments(){
    return axios.get(apiURL + "all/department").then(res =>{
      return  res.data
    })
}
export function EditDepartaments(id){
     return axios.put(apiURL + "update/department/"+id).then(res =>res.data)
}

export function DeleteDepartaments(id){
 return axios.delete(apiURL + "delete/department/"+id).then(res =>res.data)

}

export function AddDepartaments(json){
  console.log(json)
  return axios({
    method: 'post',
    url: `${apiURL}add/department`,
    data: json}).then(res =>res.data)
  
}