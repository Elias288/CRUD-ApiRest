import { getAllWithAjax, createWithAjax, editWithAjax, deleteWithAjax } from "./controllers/ajax.controller.js";
import { getAllWithFetch , createWithFetch, editWithFetch, deleteWithFetch } from "./controllers/fetch.controller.js";
import { getAllWithAxios , createWithAxios, editWithAxios, deleteWithAxios } from "./controllers/axios.controller.js";

const d = document,
	$form = d.querySelector('.crud-form'),
	$title = d.querySelector('.crud-title');

// GET ALL WITH AJAX
//d.addEventListener("DOMContentLoaded", getAllWithAjax)

// GET ALL WHIT FETCH
//d.addEventListener("DOMContentLoaded", getAllWithFetch)

// GET ALL WHIT FETCH
d.addEventListener("DOMContentLoaded", getAllWithAxios)

d.addEventListener("submit", e => {
	if(e.target === $form){
		e.preventDefault()

		if(!e.target.id.value){
			// CREATE - POST
			
			// CREATE WITH AJAX
			// createWithAjax({ nombre: e.target.nombre.value, constelacion: e.target.constelacion.value })

			// CREATE WITH FETCH
			// createWithFetch({ nombre: e.target.nombre.value, constelacion: e.target.constelacion.value })
			
			// CREATE WITH AXIOS
			createWithAxios({ nombre: e.target.nombre.value, constelacion: e.target.constelacion.value })
		}else{
			// UPDATE - PUT
			
			// EDIT WITH AJAX
			// editWithAjax({ id: e.target.id.value, nombre: e.target.nombre.value, constelacion: e.target.constelacion.value })

			// EDIT WITH FETCH
			// editWithFetch({ id: e.target.id.value, nombre: e.target.nombre.value, constelacion: e.target.constelacion.value })
			
			// EDIT WITH AXIOS
			editWithAxios({ id: e.target.id.value, nombre: e.target.nombre.value, constelacion: e.target.constelacion.value })
		}
	}
})

d.addEventListener("click", e => {
	if(e.target.matches(".edit")){
		$title.textContent = "Editar Santo"
		$form.nombre.value = e.target.dataset.name
		$form.constelacion.value = e.target.dataset.constellation
		$form.id.value = e.target.dataset.id
	}
})

d.addEventListener("click", e => {
	if(e.target.matches(".delete")){
		let isDelete = confirm(`¿Estás seguro de eliminar el id ${e.target.dataset.id}?`)

		if(isDelete){
			// DELETE WITH AJAX
			//deleteWithAjax( e.target.dataset.id )
			
			// DELETE WITH FETCH
			// deleteWithFetch( e.target.dataset.id )
			
			// DELETE WITH AXIOS
			deleteWithAxios( e.target.dataset.id )
		}
	}
})