const { createApp } = Vue 

    createApp({
        data() {
            return{
                msgWelcome : "Ciao mondo... Im VueJs",
                classeRosso : "red", 
               img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png",
               box:"box",

            }
        },
        methods:{
            saluto: function (){
               alert("ciao era una prova")
                
            }
        }

    }).mount("#webapp")

    