window.Event = new Vue();

Vue.component('coupon', {
    template: '<input placeholder="Enter coupon" @blur="onCouponApplied">',

    methods: {
        onCouponApplied: function () {
            Event.$emit('applied');
        }
    }
});

new Vue({
    el: '.root',

    data: {
        couponApplied: false
    },

    created: function () {
        Event.$on('applied', function () {
            alert(1);
        })
    }
});