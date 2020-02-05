<template>
<div id="index">
  <h1>HOLA</h1>
  <section id="intro">
    <div class="jumbotron masthead" >
      <div class="container" data-step="1" data-intro='Bienvenido a Syscompsa S.A.!!!'>
        <!-- slider navigation -->
        <div class="sequence-nav">
          <div class="prev">
            <span></span>
          </div>
          <div class="next">
            <span></span>
          </div>
        </div>
        <!-- end slider navigation -->
        
        <div class="row">
          <div class="span12">
            <div id="slider_holder">
              <div id="sequence">
                
                <ul>
                  <!-- Layer 1 -->
                  <li v-for="layer of slider" :key="layer.titulo">
                    <h2>AQUI{{layer.img}}</h2>
                    <div class="info animate-in">
                      <h2>AQUI{{layer.img}}</h2>
                      <h2>{{layer.titulo}}</h2>
                      <p>
                        {{layer.desc}}
                      </p>
                    </div>
                    <img class="slider_img" v-bind:src="layer.img" alt="">
                  </li>
                </ul>
              </div>
            </div>
            <!-- Sequence Slider::END-->
          </div>
        </div>
      </div>
    </div>
  </section>
  </div>
</template>

<script>
export default {
    name: 'Index',
    data(){
        return{
		slider:[
		{titulo:'Desarrollo de Software',
    desc:'Syscompsa S.A se destaca en Desarrollo y Mantenimiento de software sobre Gestion Empresarial',
    img: '../assets/img/slides/sequence/img-1.png'},

		{titulo:'Mantenimiento',
		desc:'Syscompsa S.A es experto en mantenimiento y actualizaciones del sistema ALPWIN 2.0',
		img: '../assets/img/slides/sequence/img-2.png'},

		{titulo:'Mantenimiento y Asesoria',
		desc:'  Asesoria de los modulos del sistema ALPWIN 2.0 para la correcta administración de la información de su empresa.',
		img: '../assets/img/slides/sequence/img-3.png'}
        ]
        }
    },
    methods:{
      guidenav(){
          document.getElementById('startButton').onclick = function() {
          introJs().setOption('doneLabel', 'Visitar').start().oncomplete(function() {
          window.location.href = 'contact.html?multipage=true';
    });
  };
      }
    }

}


</script>

<style lang="stylus" scoped>

</style>