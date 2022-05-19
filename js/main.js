const API = "https://api.github.com/users/";


// Se cortó el async function

const app = Vue.createApp({
    data() {
        return {
            message: 'Hola Alexis',
            searching: null,
            result: null
        }
    },
    methods: { //Function ya no es necesario, ahora se usan methods.
        async search() {
            const response = await fetch(API + this.searching);
            const data = await response.json();
            console.log(data);
            this.result = true;
        }
    },


}) //Mostrar esta info de forma explícita en un elemento de HTML