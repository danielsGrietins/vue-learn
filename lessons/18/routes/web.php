<?php

use App\Project;

Route::get('/', function () {
    $projects = Project::all();

    return view('welcome', compact('projects'));
});

Route::get('skills', function () {
    return ['Laravel', 'Vue', 'Javascript'];
});

Route::post('/projects', [
    'uses' => 'ProjectsController@projects',
    'as'   => 'projects.post'
]);

Route::get('/get-projects', [
    'uses' => 'ProjectsController@getProjects',
    'as'   => 'projects.get'
]);