import { getAllWhitAjax } from "./controllers/ajax.controller.js";

const d = document,
	// $table = d.querySelector('.crud-table'),
	$form = d.querySelector('.crud-form'),
	$title = d.querySelector('.crud-title');
	// $template = d.getElementById('crud-template').content,
	// $fragment = d.createDocumentFragment();



d.addEventListener("DOMContentLoaded", getAllWhitAjax)