<script>
	import './styles/style.css';
</script>

<main>
	<h1>Marvel</h1>
	<h4>Peliculas de Marvel</h4>

	<form>
		<!-- bind:value=variable cada cambio del input se sincorniza con la variable previamente declarada en el código -->
		<label for="nombre">Titulo de pelicula</label>
		<input
			id="nombre"
			type="text"
		/>
		<label for="fase">Fase</label>
		<input 
			id="fase"
			type="text"
		/>
		<label for="descripcion">Descripción</label>
		<textarea
			id="descripcion"
			rows="1"
		/>
		<label for="superheroe">Fase</label>
		<input 
			id="superheroe"
			type="text"
		/>
		
	</form>
</main>
