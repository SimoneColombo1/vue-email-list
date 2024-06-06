const { createApp }= Vue

createApp({

  data() {
    return {
       
        mail: ''
    }
  },
     methods: {
        getData(){
               
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                       
               
              

                                       .then((response) => {
                                        console.log(response);
                                        this.mail = response.data.mail;
                                       
                                       
                                       });
                                       
                                       
                        



        }
     },

created(){
    this.getData();
}




}).mount('#app')
    