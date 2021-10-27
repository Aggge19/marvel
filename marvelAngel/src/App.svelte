<script>
	import './styles/style.css';
</script>

<main>
	<h1>Marvel</h1>
	<p>Listado de peliculas de Marvel</p>

	<form>
		<!-- bind:value=variable cada cambio del input se sincorniza con la variable previamente declarada en el código -->
		<label for="nombre">Titulo de pelicula</label>
		<input
			id="nombre"
			type="text"
			placeholder="Nombre del producto"
		/>
		<label for="descripcion">Descripción</label>
		<textarea
			id="descripcion"
			rows="3"
			placeholder="Descripción del producto"
		/>
		<input
			type="url"
			id="imagen-url"
			placeholder="https://amazon.com/..."
		/>
		<label for="categoria">Categoría</label>
		<select id="categoria">
			<option value="GPU">GPUs</option>
			<option value="CPU">CPUs</option>
			<option value="ATX">Cajas ATX y otras</option>
			<option value="Placas Base">Placas Base</option>
			<option value="RAM">RAM</option>
			<option value="RL"
				>Refrijeración Líquida (las de aire son muy feas)</option
			>
			<option value="rgb">Lucecitas</option>
		</select>
	</form>
</main>
