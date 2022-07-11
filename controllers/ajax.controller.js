import ajax from "../components/ajax.CRUD.js"

const d = document,
	$table = d.querySelector('.crud-table'),
	$template = d.getElementById('crud-template').content,
	$fragment = d.createDocumentFragment();

const getAllWhitAjax = () =>{
	ajax({
		url: "http://localhost:5555/santos",
		success: (res) => {
			// console.log(res)
			res.forEach(el => {
				$template.querySelector('.name').textContent = el.nombre
				$template.querySelector('.constellation').textContent = el.constelacion
				
				$template.querySelector('.edit').dataset.id = el.id
				$template.querySelector('.edit').dataset.nombre = el.nombre
				$template.querySelector('.edit').dataset.constelacion = el.constelacion
				
				$template.querySelector('.delete').dataset.id = el.id
				
				let $clone = d.importNode($template, true)
				$fragment.appendChild($clone)
			})

			$table.querySelector('tbody').appendChild($fragment)

		},
		error: (err) => {
			// console.log(err)
			$table.insertAdjacentHTML('afterend', `<p><b>${err}</b></p>`)
		}
	})
}

export { getAllWhitAjax }