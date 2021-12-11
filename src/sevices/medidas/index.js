
import axios from 'axios';
const apiURL = "http://shoppingintegration-env.eba-mafprtpj.us-east-2.elasticbeanstalk.com/api/v1/"
    
export function GetMedidas(){
    return axios.get(apiURL + "all/measure").then(res =>{
      return  res.data
    })
}

export function EditMedidas(){
    return axios.get(apiURL + "/all").then(res =>res.data)

}

export function DeleteMedidas(id){
  return axios.delete(apiURL + "/delete/measure/"+id).then(res =>res.data)

}
export function AddMedidas(json){
  console.log(json)
  return axios({
    method: 'POST',
    url: `${apiURL}add/measure`,
    data: json}).then(res => res.data)
  }
