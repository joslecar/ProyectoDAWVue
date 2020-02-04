<template>
    <div>
        <section id="maincontent">
    <div class="container">
      <div class="row">
        <div class="span12">
          <article>
            <div class="heading">
              <h4>ALPWINSQL</h4>
            </div>
            <div class="clearfix">
            </div>
            <div class="row">
              <div id="imagenesProd" class="span8">
                <!-- start flexslider -->
                <div  class="flexslider">
                  <ul class="slides" v-for="img of imagProd" :key="img">
                    <li>
                      <img class="slider_img" v-bind:src="imagProd" alt="" />
                    </li>
                  </ul>
                </div>
                <!-- end flexslider -->
                <p>
                 {{descr}}
                </p>
              </div>
              <div class="span4">
                <div class="project-widget">
                  <ul class="project-detail">
                    <li><label>Producto :</label> ALPWINSQL</li>
                    <li><label>Categoria :</label> Software</li>
                  </ul>
                </div>
              </div>
            </div>
          </article>
          <!-- end article full post -->
        </div>
      </div>
      <div class="row" id="fila">
        <div class="span4"  v-for="detail of det" :key="detail.titulo">
          <div class="well">
            <div class="centered">
              <i class="icon-circled icon-64 icon-suitcase active"></i>
              <h4>{{detail.titulo}}</h4>
              <div class="dotted_line">
              </div>
              <ul>
                <li v-for="p of detail.desc" :key="p">{{p}}</li>
              </ul>
            </div>
          </div>
        </div>  
      </div>
    </div>
  </section>
        
    </div>
</template>
<script>
export default {
    name: "Detalle",
    data(){
        return{
        imagProd:[
		'https://i.ibb.co/fpBTWXX/SYSPRO-erp-1-1.png',
		'https://i.ibb.co/S0n49XG/escolar-1.png',
		'https://i.ibb.co/wg5LZgq/feature-accounting-software-desktop-5-1.png'
		],
		descr:'Con ALPWINSQL Usted Obtendrá MAYOR CONTROL, MAYOR PRODUCTIVIDAD, MAYORES BENEFICIOS, En menos tiempo, con un sistema de Gestión Empresarial que se adapta a su empresa y su forma de trabajo, es un sistema Multi-usuario, Multi -empresa, Parametrizable. Usted dispone de la información de su empresa en tiempo real y con un mayor control de la actividad basada en la obtención de datos reales.',

        det: [
		{titulo:'Contabilidad',
		desc:['Estado Situación Financiera','Estado Resultado Integral','Plan De Cuentas','Mayor Contable','Presupuesto']
		},

		{titulo:'Bancos',
		desc:['Movimiento Bancario Por Beneficiario','Listado De Cheques Postfechados','Conciliacion Bancaria','Listado De Retenciones','Estado De Cuenta']
		},

		{titulo:'Anexos Internacionales',
		desc:['Exportar Anexos A Excel','Anexo De Exportacion','Generador De Xml Al Dimm','Anexo De Compras','Anexo De Ventas']
		},

		{titulo:'Ventas',
		desc:['Estado De Cuenta Por Cliente','Listado De Recaudación','Kardex Con Costo','Costo De Ventas','Facturación']
		},

		{titulo:'Cuentas por pagar',
		desc:['Ingreso De Compras Proveedores','Estado De Cuenta Por Proveedor','Kardex De Articulos Con Costo','Listado De Pagos','Importaciones']
		},

		{titulo:'Inventario',
		desc:['Transferencias Entre Bodegas','Maestro De Productos','Ingreso De Materiales','Salida De Materiales','Kardex De Articulos']
		}
		]
    }
    }
}
</script>
<style>

</style>
