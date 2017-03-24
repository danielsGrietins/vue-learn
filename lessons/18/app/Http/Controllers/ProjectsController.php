<?php

namespace App\Http\Controllers;

use App\Project;
use Illuminate\Http\Request;

class ProjectsController extends Controller
{

    /**
     * @param Request $request
     * @return array
     */
    public function projects(Request $request)
    {
        $this->validate($request, [
            'name'        => 'required',
            'description' => 'required'
        ]);

        /*Project::create( [
            'name' => $request->get('name'),
            'description' => $request->get('description'),
        ] );*/


        return [
            'message' => 'Project successfuly created!'
        ];
    }

    /**
     * @return \Illuminate\Database\Eloquent\Collection|static[]
     */
    public function getProjects()
    {
        return Project::all();
    }
}
