const { createApp }= Vue

createApp({

  data() {
    return {
       
        
        mails: [],
    }
  },
     methods: {
        getData(){
           for(let i=0; i<10 ; i++){  
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                       
               
              

                                       .then((Email) => {
                                    
                                        this.mails.push(Email.data.response)
                                       
                                       });
                                     
                                       
                        }  



        }
     },

created(){
    this.getData();
}




}).mount('#app')
    