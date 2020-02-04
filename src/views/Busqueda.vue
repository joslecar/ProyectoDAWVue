<template>
    <div id='Busqueda'>
    <section id="subintro">
    <div class="jumbotron subhead" id="overview">
      <div class="container">
        <div class="row">
          <div class="span12">
            <div class="centered">
              <h3>Productos & Servicios</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
      <div class="widget">
        <form class="form-search">
        <input placeholder="Búsqueda" type="text" class="input-medium search-query" id="texto">
        <input type="button" value="Buscar" class="btn btn-flat btn-color" onclick="busquedaProducto()" id="boton"/>
        </form>
      </div>

  <section id="maincontent">
    <div class="container">
      <div class="row">
        <ul class="portfolio-area da-thumbs" id="productos">
               
        </ul>
      </div>
    </div>
  </section>
    </div>
</template>

<script>
    export default {
        name:'Busqueda'
    }
</script>

<style lang="scss" scoped>

</style>