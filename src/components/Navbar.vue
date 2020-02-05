<template>
<div class = "cabecera">
    <b-navbar toggleable="md" type="dark" variant="info">
        <b-container>
            <b-navbar-brand href="#">NavBar</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item to="/home">Home</b-nav-item>
                    <b-nav-item to="/productos">Productos</b-nav-item>
                    <b-nav-item to="/noticias">Noticias</b-nav-item>
                    <b-nav-item to="/equipo">Quienes somos?</b-nav-item>
                    <b-nav-item to="/contact">Contacto</b-nav-item>
                    <b-nav-item to="/login">Login</b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-container>   
    </b-navbar>

</div>
</template>
<script>

export default {
    name: "Navbar",

}
</script>
<style lang="stylus" scoped>

</style>