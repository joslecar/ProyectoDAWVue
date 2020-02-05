<template>
    <div class = 'menulogin'>
      <section id="contact-form-section" class="form-content-wrap">
		<div class="container">
      <div class="row contenedor1">
        <h1 class="col-12 text-center">Bienvenido Usuario</h1>
        <img class="img-fluid rounded" src="https://previews.123rf.com/images/tuktukdesign/tuktukdesign1606/tuktukdesign160600100/59070120-icono-de-usuario-hombre-perfil-hombre-de-negocios-avatar-icono-persona-en-la-ilustraci%C3%B3n-vectorial.jpg" alt="ImagenAvatar">
      </div><!--End row-->
      <div class="col-12 text-center p-2">
        <router-link to="/reporte">
            <button id="Ingresar_Reporte" class="btn btn-primary">Ingresar Reporte</button>
        </router-link>
      </div>
      <div class="col-12 text-center p-2">
        <router-link to="/busquedareporte">
            <button id="Buscar_Reporte" class="btn btn-primary">Buscar Reporte</button>
        </router-link>
      </div>
		</div><!--End container -->
	</section>
    </div>
</template>

<script>
    export default {
        name:'menulogin'
    }
</script>

<style lang="css" scoped>
    img{
        max-height: 15rem;
        max-width: 15rem;
    }
    .contenedor1{
        background-color: slategrey;
        border-style: groove;
        padding: 1em;
    }
</style>