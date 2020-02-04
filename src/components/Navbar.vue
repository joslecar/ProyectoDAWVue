<template>
<div class = "cabecera">
<div class="navbar navbar-fixed-top">
            <div class="navbar-inner">
                <div class="container">
                    <!-- logo -->
                    <a class="brand logo" href="index.html"><img src="../assets/img/logo.png" alt=""></a>
                    <!-- end logo -->
                    <!-- top menu -->
                    <div class="navigation">
                        <nav>
                            <ul class="nav topnav">
                                <li class="dropdown active">
                                    <a href="index.html">Inicio</a>
                                </li>
                                <li>
                                    <a data-step="2" data-intro="Aquí podrás encontrar todos los productos que tenemos a su disposición" href="producto.html" data-position='right'>Productos</a>

                                </li>

                                <li class="dropdown">
                                    <a href="Noticias.html">Noticias</a>
                                </li>
                                <li class="dropdown">
                                    <a href="equipo.html">¿Quienes somos?</a>
                                </li>
                                <li>
                                    <a data-step="3" data-intro="Si tienes alguna duda aquí nos podrás contactar" data-position='right' href="contact.html">Contacto</a>
                                </li>
                                <li>
                                    <a href="login.html">Login</a>
                                </li>
                                <li>
                                    <a id="startButton" class="btn btn-primary" href="javascript:void(0);">NAVEGACIÓN GUIADA</a>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <!-- end menu -->
                </div>
            </div>
        </div>
</div>
</template>
<script>
export default {
    name: "Navbar"
}
</script>
<style lang="stylus" scoped>
    @import '../src/assets/css/prettyPhoto.css';            
</style>