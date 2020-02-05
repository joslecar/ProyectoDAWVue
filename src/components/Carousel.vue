<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
        <ul>
        <li v-for="(item, index) in slider" :key="index">
        <h1>{{item.img}}</h1>
        <b-carousel-slide :caption="item.titulo" :text="item.descp">
        <template v-slot:img>
        
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            :src="item.img"
            alt="image slot"
          >
        </template>
        </b-carousel-slide>
        </li>
        </ul>
      

      <!-- Slide with blank fluid image to maintain slide aspect ratio -->
    </b-carousel>

    <p class="mt-4">
      Slide #: {{ slide }}<br>
      Sliding: {{ sliding }}
    </p>
  </div>
</template>

<script>
  export default {
    name: 'Carousel',
    data() {
      return {
        slide: 0,
        sliding: null,
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
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
  }
</script>