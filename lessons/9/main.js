Vue.component('message', {
    props: ['title', 'content'],

    data: function () {
        return {
            isVisible: true
        };
    },

    template: '<div class="panel panel-default" v-show="isVisible">' +
    '<div class="panel-heading">{{ title }} <button class="close" @click="hideModal">X</button></div>' +
        '<div class="panel-body">' +
            '{{ content }}' +
        '</div>' +
    '</div>',
    methods: {
        hideModal: function() {
            this.isVisible = false;
        }
    }
});

new Vue({
    el: '.root'
});