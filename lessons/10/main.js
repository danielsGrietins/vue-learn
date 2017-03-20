Vue.component('modal', {
    props: ['content'],

    methods: {
        closeModal: function () {
            this.$emit('close');
        }
    },

    template: '<div class="modal is-active">' +
    '<div class="modal-background">' +
    '</div>' +
    '<div class="modal-content">' +
    '<slot></slot>' +
    '</div>' +
    '<button class="modal-close" @click="closeModal"></button>' +
    '</div>'
});

new Vue({
    el: '.root',
    data: {
      isVisible: false
    },
    methods: {
        launchModal: function () {
            this.isVisible = true;
        }
    }
});