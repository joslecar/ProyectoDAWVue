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
                            
                                    <router-link class="dropdown active" to="/index">Inicio</router-link>
                                    <router-link class="dropdown" data-step="2" data-intro="Aquí podrás encontrar todos los productos que tenemos a su disposición" to="/producto" data-position='right'>Productos</router-link>
                                    <router-link class="dropdown" to="/noticias">Noticias</router-link>
                                    <router-link class="dropdown" to="/equipo">¿Quienes somos?</router-link>
                                    <router-link data-step="3" data-intro="Si tienes alguna duda aquí nos podrás contactar" data-position='right' to="/contact">Contacto</router-link>
                                    <router-link to="/login">Login</router-link>
                                <ul class="nav topnav">
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
    name: "Navbar",
    mounted(){
        let recaptchaScript = document.createElement('script')
        recaptchaScript.setAttribute('src', '../src/assets/js/jquery.min.js')
        document.head.appendChild(recaptchaScript)
    }
}
</script>
<style lang="stylus" scoped>

</style>