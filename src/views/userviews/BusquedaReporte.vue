<template>
    <div class = "busquedareporte">
                
<div class="container-fluid">
<div class="row">
<!--<div class="col-lg-2"><a href="#">Back</a></div>-->
<div class="col-lg-1">
  Buscar por Nombre
</div>
<div class="col-lg-8"><input type="text" class="form-control" style="width:80%"/></div>
</div>

<div class="row">
<div class="col-lg-2"> </div>

</div>


<div id="wrapper">
        <!-- Sidebar -->
        <div id="sidebar-wrapper">
            <ul class="sidebar-nav">
                <li class="sidebar-brand">
                    <a href="#">
                        Lista de Reportes
                    </a>
                </li>
                <li>
                    <a href="#">Reporte 1</a>
                </li>
                <li>
                    <a href="#">Reporte 2</a>
                </li>
                <li>
                    <a href="#">Reporte 3</a>
                </li>
                <li>
                    <a href="#">Reporte 4</a>
                </li>
                <li>
                    <a href="#">Reporte 5</a>
                </li>
                <li>
                    <a href="#">Reporte 6</a>
                </li>
                <li>
                    <a href="#">Reporte 7</a>
                </li>
		 <li>
                    <a href="#">Reporte 8</a>
                </li>
                <li>
                    <a href="#">Reporte 9</a>
                </li>
                <li>
                    <a href="#">Reporte 10</a>
                </li>
                <li>
                    <a href="#">Reporte 11</a>
                </li>
                <li>
                    <a href="#">Reporte 12</a>
                </li>
                <li>
                    <a href="#">Reporte 13</a>
                </li>
                <li>
                    <a href="#">Reporte 14</a>
                </li>

		 <li>
                    <a href="#">Dashboard</a>
                </li>
                <li>
                    <a href="#">Shortcuts</a>
                </li>
                <li>
                    <a href="#">Overview</a>
                </li>
                <li>
                    <a href="#">Events</a>
                </li>
                <li>
                    <a href="#">About</a>
                </li>
                <li>
                    <a href="#">Services</a>
                </li>
                <li>
                    <a href="#">Contact</a>
                </li>
		 <li>
                    <a href="#">Dashboard</a>
                </li>
                <li>
                    <a href="#">Shortcuts</a>
                </li>
                <li>
                    <a href="#">Overview</a>
                </li>
                <li>
                    <a href="#">Events</a>
                </li>
                <li>
                    <a href="#">About</a>
                </li>
                <li>
                    <a href="#">Services</a>
                </li>
                <li>
                    <a href="#">Contact</a>
                </li>

            </ul>
        </div>
        <!-- /#sidebar-wrapper -->

        <!-- Page Content -->
        <div id="page-content-wrapper">
            <div class="container-fluid">
                <h1>Simple Sidebar</h1>
                <p>This template has a responsive menu toggling system. The menu will appear collapsed on smaller screens, and will appear non-collapsed on larger 

screens. When toggled using the button below, the menu will appear/disappear. On small screens, the page content will be pushed off canvas.</p>
                <p>Make sure to keep all page content within the <code>#page-content-wrapper</code>.</p>
		<button id="menu-toggle" class="btn btn-secondary"><i id="toggleIcon" class="fa fa-angle-double-down"></i> Toggle Menu <i class="fa fa-

filter"></i></button>                
            </div>
        </div>
        <!-- /#page-content-wrapper -->

    </div>
    <!-- /#wrapper -->
 
</div>
      
    </div>
</template>

<script>
    export default {
        name:'busquedareporte',
        methods:{
            mounted(){
                $("#menu-toggle").click(function(e) {
                    e.preventDefault();
	                var isIE11 = !!navigator.userAgent.match(/Trident.*rv\:11\./);
                    $("#toggleIcon").toggleClass("fa fa-angle-double-down fa fa-angle-double-up")
                    $("#wrapper").toggleClass("toggled");
  	                if(isIE11){
                        if($("#wrapper").hasClass("toggled")){
	                        $('#sidebar-wrapper').css("margin-left", "-268px")
	                    } else {
	                        $('#sidebar-wrapper').css("margin-left", "-250px")	
                        }	 
	                }
                });
            }
        }
    }
    
</script>

<style lang="css" scoped>
    /*!
 * Start Bootstrap - Simple Sidebar (https://startbootstrap.com/template-overviews/simple-sidebar)
 * Copyright 2013-2017 Start Bootstrap
 * Licensed under MIT 

(https://github.com/BlackrockDigital/startbootstrap-simple-sidebar/blob/master/LICENSE)
 */

#menu-toggle{
color:white;
position: absolute;
top: 46px;
left: -45.75px;
transform: rotate(90deg);
background: black;
}



#wrapper {
  padding-left: 250px;
  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  transition: all 0.5s ease;
}

#wrapper.toggled {
  padding-left: 0px;
}


#sidebar-wrapper {
  
  
		    position: fixed;
  
                    left: 250px;
  
                    width: 250px;
  
                    height: 86.5%;
  
                    margin-left: -250px;
  
                    overflow-y: scroll;

  		    overflow-x: hidden;
                    background: #000;
  
		    -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  transition: all 0.5s ease;
		
}


#wrapper.toggled #sidebar-wrapper {width: 0px;
}


#page-content-wrapper {
  width: auto;
  position: absolute;
  padding: 50px;
}


#wrapper.toggled #page-content-wrapper {
  position: absolute;
  margin-right: -250px;
  width:100%;
}




/* Sidebar Styles */


.sidebar-nav {
  position: absolute;
  top: 0;
  width: 250px;
  margin: 0;
  padding: 0;
  list-style: none;
}


.sidebar-nav li {
  text-indent: 20px;
  line-height: 40px;
}


.sidebar-nav li a {
  display: block;
  text-decoration: none;
  color: #999999;
}


.sidebar-nav li a:hover {
  text-decoration: none;
  color: #fff;
  background: rgba(255, 255, 255, 0.2);
}


.sidebar-nav li a:active, .sidebar-nav li a:focus {
  text-decoration: none;
}


.sidebar-nav>.sidebar-brand {
  height: 65px;
  font-size: 18px;
  line-height: 60px;
}

.sidebar-nav>.sidebar-brand a {
  color: #999999;
}


.sidebar-nav>.sidebar-brand a:hover {
  color: #fff;
  background: none;
}


/**

@media(min-width:768px) {
  
#wrapper {
    padding-left: 0;
  }
  
#wrapper.toggled {
    padding-left: 0px;
  }
  
#sidebar-wrapper {
    width: 250px;
  }
  
#wrapper.toggled 
#sidebar-wrapper {
    width: 250px;
  }
  
#page-content-wrapper {
    padding-left: 50px;
    position: relative;
  }
  
#wrapper.toggled #page-content-wrapper {
    position: relative;
    margin-right: 0;
 padding-left: 35px; }

}

**/


.footer {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: black;
    color: white;
    text-align: center;
}

.row {
    margin-right: 0px;
    margin-left: 0px;
}
</style>