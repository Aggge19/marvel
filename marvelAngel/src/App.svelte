<script>
	import './styles/style.css';

	function addFilm(){
		alert("Addfilm");
	}

</script>

<main>
	<h1>Marvel</h1>
	<h2>Peliculas de Marvel y vengadores</h2>

	<form on:submit|preventDefault={addFilm}>
		<label for="nombre">Titulo de pelicula</label>
		<input
			id="nombre"
			type="text"
		/>
		
		<label for="fase">Fase</label>
		<select name="select" id="fase">
			<option value="fase1" selected>Fase 1</option>
			<option value="fase2">Fase 2</option>
			<option value="fase3">Fase 3</option>
		</select>

		<label for="descripcion">Descripción</label>
		<textarea
			id="descripcion"
			rows="1"
		/>

		<label for="nombre">Titulo de pelicula</label>
		<input
			id="nombre"
			type="text"
		/>
		<br>
		<button type="submit">Enviar</button>
	</form>


</main>
