<script>
	import './styles/style.css';

	//db
	import { db } from "./firebase";
	import {
		collection,
		getDocs,
		doc,
		addDoc,
		updateDoc,
		deleteDoc,
	} from "firebase/firestore";

	let pelicula = {
		titulo: "",
		fase: "",
		descripcion: "",
	};

	function addFilm(){
		alert("Addfilm");
	}

</script>

<main>
	<h1>Marvel</h1>
	<h2>Peliculas de Marvel</h2>

	<form on:submit|preventDefault={addFilm}>
		<label for="titulo">Titulo de pelicula</label>
		<input
			bind:value={pelicula.titulo}
			id="titulo"
			type="text"
		/>
		
		<label for="fase">Fase</label>
		<select bind:value={pelicula.fase} id="fase">
			<option value="1" selected>Fase 1</option>
			<option value="2">Fase 2</option>
			<option value="3">Fase 3</option>
		</select>

		<label for="descripcion">Descripción</label>
		<textarea
			bind:value={pelicula.descripcion}
			id="descripcion"
			rows="1"
		/>

		<br>
		<button type="submit">Enviar</button>
	</form>


</main>
