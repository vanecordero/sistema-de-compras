
import axios from 'axios';
const apiURL = "http://shoppingintegration-env.eba-mafprtpj.us-east-2.elasticbeanstalk.com/api/v1/"
    
export function GetProviders(){
    return axios.get(apiURL + "all/providers").then(res =>{
      return  res.data
    })
}

export function EditProviders(){
   return axios.get(apiURL + "api/v1/all/providers").then(res =>res.data)

}

export function DeleteProviders(id){
 return axios.delete(apiURL + "delete/provider/"+id).then(res =>res.data)

}
export function AddProvider(json){
  console.log(json)
  return axios({
    method:'post',
    url: `${apiURL}add/provider`,
    data: json
  }).then(res => res.data)
};