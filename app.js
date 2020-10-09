const app = Vue.createApp({
    data() {
        return {
            myName: 'Hi, my name is Anjie',
            name: 'Anjie',
            myAge: 26,
            googleImg: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/CH_cow_2_cropped.jpg/480px-CH_cow_2_cropped.jpg',
        };
    },
    methods: {
        ageInFive() {
            let plusFive = this.myAge + 5;
            return "My age in five years would be " + plusFive;
        }
    }
});

app.mount('#assignment');