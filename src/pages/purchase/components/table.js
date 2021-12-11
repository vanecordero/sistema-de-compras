
import AllListas from "hooks/lista/allListas";

export default function Table(){

    
   

  
    

    const handleChoosedRow = (row) => {
        console.log("Fila", row);
        var coma = ",";
        var arrayDeCadenas = row.split(coma);
        let rowid = arrayDeCadenas[0]
        let rowmonto = parseFloat(arrayDeCadenas[1])
        var fecha = new Date();
        fecha = arrayDeCadenas[2]
        console.log(arrayDeCadenas)
        
         const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({  
                auxiliar: 7,
                description: "Asiento contable departamento de compras "+fecha,
                currencyCode: 1,
                detail: {
                    cuentaCR: "80",
                    cuentaDB: "4",
                    amountCR: rowmonto,
                    amountDB: rowmonto
             } })
        };
        
        console.log(requestOptions)
      
    
        const dataPromise =  fetch('https://accountingaccountapi20211205021409.azurewebsites.net/api/AccountingSeat/Register', requestOptions)
        .then(response => {
            if (!response.ok) {
              throw new Error("Got non-2XX response from API server.");
            }
            return response.json();
          }).then(responseData => {
            return responseData.id;
          });
          
          dataPromise.then(id => {
            console.log("Recibido: ", id);
            alert("El id de tu asiento contable es: " +id)
          }, error => {
            console.error("Failed to fetch users due to error: ", error);
          });
   
      };

   const ALLISTAS = AllListas()
    return(
        <>
        <div className="mt-3">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    
<span>Solicitudes de compras</span>
    
    
      <form className="d-flex ">
      <div className="">        
        <select className="form-select" aria-label="form-select" defaultValue="Todos">
        <option value="Todos">Todos</option>
        <option value="id">ID</option>
        <option value="2">Numero de orden</option>
        <option value="3">Fecha</option>
        <option value="3">Valor</option>
        </select>
    </div>
    <div className="col-auto d-flex ms-2"> 
        <input className="form-control" type="search" placeholder="Search" aria-label="Search"/>
        <button  className="btn btn-outline-primary" type="submit">Search</button>
        
        </div>
      </form>
  </div>
</nav>
<div>
        <table className="table table-hover bg-white shadow-sm">
        <thead>
            <tr>
            <th scope="col">ID</th>
            <th scope="col">Numero de la orden</th>
            <th scope="col">Fecha de compra</th>
            <th scope="col">Valor monetario</th>
            <th scope="col">ID Contable</th>
            <th scope="col">Seleccionar</th>
            </tr>
        </thead>
        <tbody>
        {
            Object.keys(ALLISTAS).map(ele=>{
             return <tr key={"comp_"+ALLISTAS[ele].id} data-item={ele}>
                <th scope="row">{ALLISTAS[ele]["id"]}</th>
                <td>{ALLISTAS[ele]["orderNumber"]}</td>
                <td>{ALLISTAS[ele]["dateOrder"]}</td>
                <td>{ALLISTAS[ele]["unitCost"]}</td>
                <td><div id="asiento">{ALLISTAS[ele]["idAsientoContable"]}</div> </td>
                <td><button className="btn btn-outline-primary" data-item={ele} onClick={() => handleChoosedRow(ALLISTAS[ele]["id"] +","+ALLISTAS[ele]["unitCost"])+","+ALLISTAS[ele]["dateOrder"]} type="submit">Contabilizar</button></td>
            </tr>
            })
        }
        
        </tbody>
        </table>
        
        </div>
    </div>
        </>
    )
}