const API = "https://api.github.com/users/";


// Se cortó el async function

const app = Vue.createApp({
    data() {
        return {
            searching: null,
            result: null,
            error: null
        }
    },
    methods: { //Function ya no es necesario, ahora se usan methods.
        async search() {

            this.result = this.error = null

            //Insertamos un try/catch para poder enviar errores, en caso de que hubiera alguno; de lo contrario que haga lo que está abajo:
            try {
                const response = await fetch(API + this.searching);
                if (!response.ok) throw new Error("Usuario no encontrado")
                const data = await response.json();
                console.log(data);
                this.result = data; //Cambiar true por data para traer los datos del array que trae la API más fácil

            //Arroja un error si ningún usuario existe
            } catch (error) {
                this.error = error
            }

            //Limpia el campo del formulario una vez se ejecuta el try/catch para encontrar a los usuarios
            finally {
                this.searching = null
            }
            
        }
    },


}) //Mostrar esta info de forma explícita en un elemento de HTML