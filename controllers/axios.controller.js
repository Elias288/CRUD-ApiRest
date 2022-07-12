const d = document,
	$form = d.querySelector('.crud-form'),
	$table = d.querySelector('.crud-table'),
	$template = d.getElementById('crud-template').content,
	$fragment = d.createDocumentFragment();

	const getAllWithAxios = async() => {
		try {
			let res = await axios.get("http://localhost:5555/santos"),
			json = await res.data
			
			json.forEach(element => {
				$template.querySelector('.name').textContent = element.nombre
				$template.querySelector('.constellation').textContent = element.constelacion
				
				$template.querySelector('.edit').dataset.id = element.id
				$template.querySelector('.edit').dataset.name = element.nombre
				$template.querySelector('.edit').dataset.constellation = element.constelacion
				
				$template.querySelector('.delete').dataset.id = element.id
				
				let $clone = d.importNode($template, true)
				$fragment.appendChild($clone)
			})
			$table.querySelector('tbody').appendChild($fragment)
	
		} catch (err) {
			let message = err.statusText || "Ocurrio un error"
	
			$table.insertAdjacentHTML('afterend', `<p><b>${err.status}: ${message}</b></p>`)
		}
	}
	
	const createWithAxios = async(data) => {
		console.log(JSON.stringify(data));
		try {
			let options = {
				method: "POST",
				headers: {
					"Content-Type": "application/json; charset=utf-8"
				},
				data: JSON.stringify(data)
			},
			res = await axios("http://localhost:5555/santos", options),
			json = await res.data
	
			location.reload()
		} catch (err) {
			let message = err.statusText || "Ocurrio un error"
	
			$form.insertAdjacentHTML('afterend', `<p><b>${err.status}: ${message}</b></p>`)
		}
	}

	const editWithAxios = async(data) => {
		const {id, ...nameAndConstellation} = data
	
		try {
			let options = {
				method: "PUT",
				headers: {
					"Content-Type": "application/json; charset=utf-8"
				},
				data: JSON.stringify(nameAndConstellation)
			},
			res = await axios(`http://localhost:5555/santos/${id}`, options),
			json = await res.data
	
			location.reload()
		} catch (err) {
			let message = err.statusText || "Ocurrio un error"
	
			$table.insertAdjacentHTML('afterend', `<p><b>${err.status}: ${message}</b></p>`)
		}
	}

	const deleteWithAxios = async(data) => {
		try {
			let options = {
				method: "DELETE",
				headers: {
					"Content-Type": "application/json; charset=utf-8"
				}
			},
			res = await axios(`http://localhost:5555/santos/${data}`, options),
			json = await res.data
	
			location.reload()
		} catch (err) {
			let message = err.statusText || "Ocurrio un error"
	
			$table.insertAdjacentHTML('afterend', `<p><b>${err.status}: ${message}</b></p>`)
		}
	}
	
	export { getAllWithAxios, createWithAxios, editWithAxios, deleteWithAxios }