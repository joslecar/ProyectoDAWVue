<template>
    <div class="login">
        <section>
            <div class="row">
                <h2 id="iniciar-login" class="col-12 text-center">
                    Iniciar Sesion
                </h2>
            </div>
        </section>
        <form class="text-center">
            <div class="form-group">
                <label for="exampleInputEmail1">Usuario</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter username">
                <small id="emailHelp" class="form-text text-muted">Usuario privado.</small>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
            </div>
            <div class="form-group form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <router-link to="/menulogin">
                <a @click="login" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">Iniciar Sesion</a>
            </router-link>
        </form>
    </div>
</template>

<script>
export default {
    name: 'Login',
    data(){
        return{
            usuarios:[{nombre:"Jose Carrion",usuario:"joslecar",pass:"123"},
                    {nombre:"Omar Rosales", usuario:"omar", pass:"123"}],
            usuarioForm:{usuario:"",pass:""}
        }
    },
    methods:{
        login(){

        }
    }
}
</script>