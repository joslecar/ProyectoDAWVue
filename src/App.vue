
<template>
  <div id="app">
    <Navbar></Navbar>
    <!--<div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>-->
    <router-view/>
    <Footer></Footer>
  </div>
</template>
<script>
import "./assets/css/bootstrap.css"
import "./assets/css/bootstrap-responsive.css";
import "./assets/css/docs.css";
import "./assets/css/prettyPhoto.css";
import "./assets/js/google-code-prettify/prettify.css";
import "./assets/css/flexslider.css";
import "./assets/css/sequence.css";
import "./assets/css/style.css";
import "./assets/color/default.css";

import jq from './assets/js/jquery.min.js';
import jqueryeasing from "./assets/js/jquery.easing.js";
import boot from "./assets/js/bootstrap.js";
import elastislide from './assets/js/jquery.elastislide.js';
import flexsilder from "./assets/js/jquery.flexslider.js";
import prettify from "./assets/js/google-code-prettify/prettify.js";
//import modernizr from "./assets/js/modernizr.js";
import sequence from "./assets/js/sequence/sequence.jquery-min.js";
import settings from "./assets/js/sequence/setting.js";
import prettyPhoto from "./assets/js/jquery.prettyPhoto.js";
import application from "./assets/js/application.js";
import jqueryhover from "./assets/js/hover/jquery-hover-effect.js";


import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'app',
  components: {
    Footer,
    Navbar
  }
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
