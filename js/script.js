const { createApp } = Vue;

createApp ({

    data (){

        return{
            todos: [
                {
                    text: 'Fare la spesa',
                    done: true,
                },
                {
                    text: 'Andare in palestra',
                    done: false,
                },
                {
                    text: 'Cambiare le lenzuola',
                    done: true,
                },
                {
                    text: 'Finire il progetto',
                    done: false,
                },
                {
                    text: 'Pulire il pavimento',
                    done: true,
                },
            ]
        }

    },

    methods: {

    }

}).mount('#app');

