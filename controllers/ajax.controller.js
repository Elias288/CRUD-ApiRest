import ajax from "../components/ajax.CRUD.js"

const d = document,
	$table = d.querySelector('.crud-table'),
	$template = d.getElementById('crud-template').content,
	$fragment = d.createDocumentFragment();

const getAllWhitAjax = () => {
	ajax({
		url: "http://localhost:5555/santos",
		success: (res) => {
			// console.log(res)
			res.forEach(e => {
				$template.querySelector('.name').textContent = e.nombre
				$template.querySelector('.constellation').textContent = e.constelacion
				
				$template.querySelector('.edit').dataset.id = e.id
				$template.querySelector('.edit').dataset.name = e.nombre
				$template.querySelector('.edit').dataset.constellation = e.constelacion
				
				$template.querySelector('.delete').dataset.id = e.id
				
				let $clone = d.importNode($template, true)
				$fragment.appendChild($clone)
			})

			$table.querySelector('tbody').appendChild($fragment)

		},
		error: (err) => $table.insertAdjacentHTML('afterend', `<p><b>${err}</b></p>`)
	})
}

const createWhitAjax = (data) => {
	ajax({
		url: "http://localhost:5555/santos",
		method: "POST",
		success: () => location.reload(),
		error: () => $table.insertAdjacentHTML('afterend', `<p><b>${err}</b></p>`),
		data
	})
}

const editWhitAjax = (data) => {
	const {id, ...nameAndConstellation} = data
	ajax({
		url: `http://localhost:5555/santos/${id}`,
		method: "PUT",
		success: () => location.reload(),
		error: () => $table.insertAdjacentHTML('afterend', `<p><b>${err}</b></p>`),
		data: nameAndConstellation
	})
}

const deleteWhitAjax = (data) => {
	ajax({
		url: `http://localhost:5555/santos/${data}`,
		method: "DELETE",
		success: () => location.reload(),
		error: () => $table.insertAdjacentHTML('afterend', `<p><b>${err}</b></p>`),
	})
}

export { 
	getAllWhitAjax,
	createWhitAjax,
	editWhitAjax,
	deleteWhitAjax
}