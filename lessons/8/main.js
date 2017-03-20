Vue.component('task-list', {
    template: '<div><task v-for="task in tasks">{{ task.description }}</task></div>',
    data: function () {
        return {
            tasks: [
                { description: 'Got to the store', completed: true },
                { description: 'Open your bussines', completed: false },
                { description: 'Buy a new car', completed: true },
                { description: 'Take out your girlfiend', completed: true }
            ]
        }
    }
});

Vue.component('task', {
    template: '<li><slot></slot></li>'
});

var app = new Vue({
    el: '.root'
});