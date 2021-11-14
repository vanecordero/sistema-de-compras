import AllProviders from "hooks/providers/allProviders";
import Bradcrumb from "components/Breadcrumb";
import FindImg from "components/getImages/findImg";
import '../../App.css';
import { useRef , useState, useEffect} from "react";
import Swal from 'sweetalert2';
import { GetProviders, DeleteProviders } from "sevices/providers";

export default function Providers() {
	const prov = AllProviders()
    const [PROVIDER, setPROVIDER]= useState("")

    useEffect(() => {
        setPROVIDER(prov)
    }, [prov])


	let button = useRef(null);
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
	return ( 
		<>
<button hidden type="button" data-bs-toggle="modal" data-bs-target="#modalArti" ref={button}>
</button>

<div className="modal fade" id="modalArti" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        ...
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

		<Bradcrumb 
        text="Proveedor"/>

<button type="button" className="btn btn-primary">Agregar nuevo proveedor</button>
	
    <div>
			<table className="table table-hover bg-white shadow-sm mt-3">
			<thead>
					<tr>
					<th scope="col">ID</th>
					<th scope="col">RCN/IDN</th>
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
							<td>{PROVIDER[ele]["nombreComercial"]}</td>                            
							<td className={`${(PROVIDER[ele]["estado"])? "activo" : "inactivo"}`}>{
								(PROVIDER[ele]["estado"])? "Activo": "Inactivo"
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
