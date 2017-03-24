class Errors {
    constructor() {
        this.errors = {};
    }

    get(field) {
        if (this.errors[field]) {
            return this.errors[field][0];
        }
    }

    record(errors) {
        this.errors = errors;
    }

    clear(field) {
        if (field) {
            delete this.errors[field];
        } else {
            this.errors = {};
        }
    }

    has(field) {
        return this.errors.hasOwnProperty(field);
    }

    any() {
        return Object.keys(this.errors).length > 0;
    }
}

class Form {
    constructor(data) {
        this.originalData = data;

        for (let field in data) {
            this[field] = data[field];
        }

        this.errors = new Errors();
    }

    reset() {
        for (let field in this.originalData) {
            this[field] = '';
        }

        this.errors.clear();
    }

    data() {
        let data = {};

        for(let property in this.originalData) {
            data[property] = this.[property];
        }

        return data;
    }

    onSuccess(response) {
        alert(response.message);

        this.reset();
    }

    onFail(errors) {
        this.errors.record(errors);
    }

    submit(requestType, url) {
        return new Promise(function (resolve, reject) {
            axios[requestType.toLowerCase()](url, this.data())
                .then(function (response) {
                    this.onSuccess(response.data);

                    resolve(response.data);
                }.bind(this))
                .catch(function (errors) {
                    this.onFail(errors.response.data);

                    reject(errors.response.data)
                }.bind(this))
            ;
        }.bind(this));

    }
}

new Vue({
    el: '#root',
    data: {
        form: new Form({
            name: '',
            description: ''
        }),
        projects: {}
    },

    methods: {
        onSubmit: function () {
            this.form.submit('POST', '/projects')
                .then(function (data) {
                    console.log(data);
                })
                .catch(function (error) {
                    console.log(error);
                })
            ;

            this.getProjectList();
        },

        getProjectList: function () {
            axios.get('/get-projects')
                .then(function (response) {
                    this.projects = response.data;
                }.bind(this))
            ;
        }
    },

    mounted: function () {
        this.getProjectList();
    }

});

/*
 * Lesson 18
 *
 new Vue({
 el: '#root',

 data: {
 skills: []
 },

 mounted: function () {
 axios.get('/skills')
 .then(function (response) {
 this.skills = response.data;
 }.bind(this));
 }
 });*/