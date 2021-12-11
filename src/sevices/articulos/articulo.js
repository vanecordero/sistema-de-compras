
import axios from 'axios';
const apiURL = "http://shoppingintegration-env.eba-mafprtpj.us-east-2.elasticbeanstalk.com/api/v1/"
export function GetArticulo(){
    
    return axios.get(apiURL + "all/articles").then(res =>{
      return  res.data
    })
}

export function EditArticulo(id){
    return axios.get(apiURL + "units/"+id+"/update/article/"+id).then(res =>res.data)

}

export function DeleteArticulo(id){

  return axios.delete(apiURL + "units/"+id+"/delete/article/"+id).then(res =>res.data)

}

export function AddArticles(json){
  console.log(json)
  return axios({
    method: 'POST',
    url: `${apiURL}units`
  })
}