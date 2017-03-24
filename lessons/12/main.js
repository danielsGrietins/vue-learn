Vue.component('coupon', {
    template: '<input placeholder="Enter coupon" @blur="onCouponApplied">',

    methods: {
        onCouponApplied: function () {
            this.$emit('applied');
        }
    }
});

new Vue({
    el: '.root',

    data: {
        couponApplied: false
    },

    methods: {
        onCouponApplied: function () {
            this.couponApplied = true;
        }
    }
});