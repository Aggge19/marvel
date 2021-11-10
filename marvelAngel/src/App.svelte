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

	let superheroe = {
		nombre: "",
		poder: "",
		descripcion: "",
	};

	let superheroes = [];

	const loadDataPeliculas = async () => {
		// Cargamos las peliculas
		const querySnapshotPeliculas = await getDocs(collection(db, "peliculas"));
		let docsPeliculas = [];
		querySnapshotPeliculas.forEach((doc) => {
			docsPeliculas.push({ ...doc.data(), id: doc.id });
		});
		peliculas = [...docsPeliculas];
	};
	const loadDataSuperheroes = async () => {

		//Cargamos los superheroes
		const querySnapshotSuperheroes = await getDocs(collection(db, "superheroes"));
		let docsSuperheroes = [];
		querySnapshotSuperheroes.forEach((doc) => {
			docsSuperheroes.push({ ...doc.data(), id: doc.id });
		});
		superheroes = [...docsSuperheroes];
	};
	const loadData = async () => {
		// Cargamos las peliculas
		loadDataPeliculas();

		//Cargamos los superheroes
		loadDataSuperheroes();
	};
	loadData();

	const vaciarFormularioPelicula = () => {
		pelicula = {
			titulo: "",
			fase: "",
			descripcion: "",
		};
	};

	const vaciarFormularioSuperheroe = () => {
		superheroe = {
			nombre: "",
			poder: "",
			descripcion: "",
		}
	};

	const añadirPelicula = async () => {
		await addDoc(collection(db, "peliculas"), pelicula);
		await loadDataPeliculas();
		vaciarFormularioPelicula();	
	};

	const añadirSuperheroe = async () => {
		await addDoc(collection(db, "superheroes"), superheroe);
		await loadDataSuperheroes();
		vaciarFormularioSuperheroe();	
	};

	const eliminarPelicula = async (id) => {
		await deleteDoc(doc(db, "peliculas", id));
		await loadDataPeliculas();
	};

	const eliminarSuperheroe = async (id) => {
		await deleteDoc(doc(db, "superheroes", id));
		await loadDataSuperheroes();
	};

	const onSubmitHandler = (e) => {
		if(pelicula.titulo !== ""){
			añadirPelicula();
		}
	};
	const onSubmitHandler2 = (e) => {
		if(superheroe.nombre !== ""){
			añadirSuperheroe();
		}
	};

</script>

<main>
	<h1>Marvel</h1>


	<div class="peliculas">
		<h2>Peliculas de Marvel</h2>

		{#each peliculas as p, i}
			<div class="bg-white rounded-lg sahdow-lg overflow-hidden border m-1 flex flex-col md:flex-row">
				<p>{p.titulo}
				<button 
					class="ml-5 bg-blue-200 py-1 px-2 border border-blue-500 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-blue-500 hover:text-gray-100 focus:ring-2 focus:ring-offset-2 focus:ring-blue-300 focus:text-gray-700 focus:bg-blue-200"
					on:click={eliminarPelicula(p.id)}>
					Eliminar
				</button></p>
			</div>
		{/each}
		

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
    

			<label for="super">Superheroe</label>
	<!--    bind:value={pelicula.fase}    ******  va dentro del select    -->
			<select id="fase">
				{#each superheroes as s, i}
					<option value="{s.id}">{s.nombre}</option>
				{/each}
			</select>

			<label for="descripcion">Descripción</label>
			<textarea
				bind:value={pelicula.descripcion}
				id="descripcion"
				rows="1"
			/>

			<br>
			<button type="submit">Añadir</button>
		</form>
	</div>
	
	<div class="superheroes">
		<h2>Superheroes de Marvel</h2>
		
		{#each superheroes as s, i}
			<div class="bg-white rounded-lg sahdow-lg overflow-hidden border m-1 flex flex-col md:flex-row">
				<p>{s.nombre}
				<button 
					class="ml-5 bg-blue-200 py-1 px-2 border border-blue-500 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-blue-500 hover:text-gray-100 focus:ring-2 focus:ring-offset-2 focus:ring-blue-300 focus:text-gray-700 focus:bg-blue-200"
					on:click={eliminarSuperheroe(s.id)}>
					Eliminar
				</button></p>
			</div>
		{/each}
		

		<form on:submit|preventDefault={onSubmitHandler2}>
			<label for="nombre">Nombre del superheroe</label>
			<input
				bind:value={superheroe.nombre}
				id="nombre"
				type="text"
			/>
			
			<label for="poder">Poder</label>
			<input
				bind:value={superheroe.poder}
				id="poder"
				type="text"
			/>

			<label for="descripcion">Descripción</label>
			<textarea
				bind:value={superheroe.descripcion}
				id="descripcion"
				rows="1"
			/>

			<br>
			<button type="submit">Añadir</button>
		</form>
	</div>

</main>
