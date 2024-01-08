const { createApp } = Vue;

createApp({
    data() {
        return {
            message: 'Hello World!',
            source: 'https://unsplash.it/300/300?image=',
        }
    },
    
}).mount('#app');