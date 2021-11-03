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

	let peliculas = [];

	const loadData = async () => {
		const querySnapshot = await getDocs(collection(db, "peliculas"));
		let docs = [];
		querySnapshot.forEach((doc) => {
			docs.push({ ...doc.data(), id: doc.id });
		});
		peliculas = [...docs];
		console.log(peliculas);
	};
	loadData();

	const vaciarFormulario = () => {
		pelicula = {
			titulo: "",
			fase: "",
			descripcion: "",
		};
	};

	const añadirElemento = async () => {
		await addDoc(collection(db, "peliculas"), pelicula);
		await loadData();
		vaciarFormulario();	
	};

	const onSubmitHandler = (e) => {
		añadirElemento();
	};
	
</script>

<main>
	<h1>Marvel</h1>
	<h2>Peliculas de Marvel</h2>
	<br><br><br>
		{#each peliculas as p, i}
			<!-- Elemento -->
			<div class="bg-white rounded-lg sahdow-lg overflow-hidden border m-1 flex flex-col md:flex-row">
				<p>{p.titulo}</p>
			</div>
			<!-- Fin elemento -->
		{/each}
	<br><br><br>
	

	<form on:submit|preventDefault={onSubmitHandler}>
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
