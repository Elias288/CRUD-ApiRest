import {
	getAllWhitAjax,
	createWhitAjax,
	editWhitAjax,
	deleteWhitAjax
} from "./controllers/ajax.controller.js";

const d = document,
	$form = d.querySelector('.crud-form'),
	$title = d.querySelector('.crud-title');

d.addEventListener("DOMContentLoaded", getAllWhitAjax)

d.addEventListener("submit", e => {
	if(e.target === $form){
		e.preventDefault()

		if(!e.target.id.value){
			//CREATE - POST
			createWhitAjax({
				nombre: e.target.nombre.value,
				constelacion: e.target.constelacion.value
			})
		}else{
			//UPDATE - PUT
			editWhitAjax({
				id: e.target.id.value,
				nombre: e.target.nombre.value,
				constelacion: e.target.constelacion.value
			})
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
			deleteWhitAjax( e.target.dataset.id )
		}
	}
})