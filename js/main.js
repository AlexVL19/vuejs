const API = "https://api.github.com/users/";

async function search() {
    const response = await fetch(API + 'AlexVL19');
    const data = await response.json();
    console.log(data);
}

const app = Vue.createApp({
    data() {
        return {
            message: 'Hola Alexis'
        }
    }

}) //Mostrar esta info de forma explícita en un elemento de HTML