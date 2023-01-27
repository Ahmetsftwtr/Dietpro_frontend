const createUser = Vue.createApp({
data()
{
    return{
        email:"",
        password:"",
        name: '',
        lastname:'',
        phone:''
    };
},

methods:{

    Create(){
        console.log(
            "İsim : ",this.name,
            "Soy isim :",this.lastname,
            "Email : ",this.email,
            "Şifre :",this.password,
            "Telefon no : ",this.phone,
            )
    },
},
}).mount("#app");
