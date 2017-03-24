<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.4.0/css/bulma.css">
        <style>
            body {
                margin: 2%;
            }
        </style>

        <title>Lesson 18-19-20</title>

    </head>
    <body>

    <div id="root">

        <h1>Projects</h1>

        <ul class="list">
            <li v-for="project in projects">@{{ project.name }}</li>
        </ul>

        <form action="/projects" method="POST" @submit.prevent="onSubmit" @keyDown="form.errors.clear($event.target.name)">
        {{ csrf_field() }}
            <div class="control">
                <label for="name" class="label">Project name:</label>

                <input type="text" id="name" name="name" class="input" v-model="form.name">

                <span class="help is-danger" v-text="form.errors.get('name')" v-if="form.errors.has('name')"></span>
            </div>

            <div class="control">
                <label for="description" class="label">Project description:</label>

                <input type="text" id="description" name="description" class="input" v-model="form.description">

                <span class="help is-danger" v-text="form.errors.get('description')" v-if="form.errors.has('description')"></span>
            </div>

            <div class="control"><br>
                <button class="button is-primary" :disabled="form.errors.any()">
                    Create
                </button>
            </div>
        </form>

    </div>



    {{--
        Lesson 18
    <div id="root">
            <ul>
                <li v-for="skill in skills">@{{ skill }}</li>
            </ul>
        </div>

    --}}


        <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
        <script src="https://unpkg.com/vue"></script>

        <script src="{{ asset('js/app.js') }}"></script>
    </body>
</html>
