Vue.component('tabs', {
    template: '' +
    '<div>' +
        '<div class="tabs"> ' +
            '<ul> ' +
                '<li v-for="tab in tabs" :class="{ \'is-active\':tab.isActive }">' +
                    '<a :href="tab.href" @click="selectTab(tab)">{{ tab.name}}</a>' +
                '</li> ' +
            '</ul> ' +
        '</div>' +
        '' +
        '<div class="tabs-details">' +
            '<slot></slot>' +
        '</div>' +
    '</div>',

    data: function () {
        return {
            tabs: []
        };
    },

    created: function() {
        this.tabs = this.$children;
    },

    methods: {
        selectTab: function(selectedTab) {
            this.tabs.forEach(function (tab) {
                tab.isActive = (tab.name == selectedTab.name);
            });
        }
    }

});

Vue.component('tab', {
    props: {
        name: { required: true },
        selected: { default: false },
    },

    template: '<div v-show="isActive"><slot></slot></div>',

    data: function() {
        return {
            isActive: false
        };
    },

    computed: {
        href: function () {
            return '#' + this.name.toLowerCase().replace(/ /g, '-');
        }
    },

    mounted: function () {
        this.isActive = this.selected;
    }
});

new Vue({
    el: '.root'
});