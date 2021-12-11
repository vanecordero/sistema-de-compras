import AllProviders from "hooks/providers/allProviders";
import Bradcrumb from "components/Breadcrumb";
import FindImg from "components/getImages/findImg";
import '../../App.css';
import { useRef , useState, useEffect} from "react";
import Swal from 'sweetalert2';
import { GetProviders, DeleteProviders, AddProvider} from "sevices/providers";

export default function Providers() {
	const prov = AllProviders()
    const [PROVIDER, setPROVIDER]= useState("")

    useEffect(() => {
        setPROVIDER(prov)
    }, [prov])
	let button = useRef(null);
	let cedula = useRef(null);
	let status = useRef(null);
	let tradeName = useRef(null);
	let cerrar = useRef(null);
	const deleteElement=(e, id)=>{
		Swal.fire({
            title: '¿Esta seguro que desea eliminarlo?',
            text: "Esta accion no podra ser revertida!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            cancelButtonText: 'Cancelar',
            confirmButtonText: 'Si, eliminarlo!'
          }).then((result) => {
            if (result.isConfirmed) {
                DeleteProviders(id).then(a=>{
                    GetProviders().then(res =>{
                        setPROVIDER(res)
                    })
                    Swal.fire({
                        title:  'Eliminado!',
                        text:'El registro ha sido eliminado.',
                        icon: 'success',
                        allowOutsideClick: false
                      })}
                )              
            }
          })
	}
	const openModal=(id)=>{
		console.log(id)
		button.current.click()
	}
	const addProvider=(e)=>{
		e.preventDefault()
		let bool = false
		if (status.current.isCheked){
			bool = true
		}
		if(cedula !== ""){
			let json = {"cedula":cedula.current.value, "tradeName":tradeName.current.value, "status":bool}
			AddProvider(json).then(res => {
				GetProviders().then(res => {
					setPROVIDER(res)
				})
				cerrar.current.click();
			})
		}
	}
	return ( 
		<>
<button hidden type="button" data-bs-toggle="modal" data-bs-target="#modalArti" ref={button}>
</button>
{/* Add dep */}
<div className="modal fade" id="modalArtiAdd" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
     <form onSubmit={addProvider}>
		 <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Agregar departamento</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
	  
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Cedula</label>
    <input type="text" className="form-control" ref={cedula}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Nombre comercial</label>
    <input type="text" className="form-control" ref={tradeName}/>
  </div>
  <div className="form-check form-switch">
	  
		<label className="form-check-label" htmlFor="flexSwitchCheckChecked">Estado</label>
		<input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" ref={status}/>
	</div>

      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" ref={cerrar} >Cerrar</button>
        <button type="submit" className="btn btn-primary" onClick={(addProvider)} >Agregar departamento</button>
      </div>
	  </form>
    </div>
  </div>
</div>

		<Bradcrumb 
        text="Proveedor"/>

<button type="button" className="btn btn-primary" data-bs-toggle="modal"data-bs-target="#modalArtiAdd" >Agregar nuevo proveedor</button>
	
    <div>
			<table className="table table-hover bg-white shadow-sm mt-3">
			<thead>
					<tr>
					<th scope="col">ID</th>
					<th scope="col">Cedula/RNC</th>
					<th scope="col">Nombre</th>
					<th scope="col">Estado</th>
					<th scope="col">Editar</th>
					<th scope="col">Eliminar</th>
					</tr>
			</thead>
			<tbody>
			{
					Object.keys(PROVIDER).map(ele=>{
					return <tr key={"prov_"+PROVIDER[ele].id}>
							<th scope="row">{PROVIDER[ele]["id"]}</th>
                            <td>{PROVIDER[ele]["cedula"]}</td>
							<td>{PROVIDER[ele]["tradeName"]}</td>                            
							<td className={`${(PROVIDER[ele]["status"])? "activo" : "inactivo"}`}>{
								(PROVIDER[ele]["status"])? "Activo": "Inactivo"
							}</td>
							<td>
							<span onClick={(e => openModal(PROVIDER[ele]["id"]))}>
								<FindImg src="edit.png"
								alt="Edit button" className="iconBtn"/>
							</span>								
							</td>
							<td>
								<span onClick={(e => deleteElement(e, PROVIDER[ele]["id"]))}>									
							<FindImg src="remove.png"
								alt="Edit button" className="iconBtn"/>
								</span>
							</td>
					</tr>
					})
			}
			</tbody>
			</table>
			</div>
		</>
	);
}
