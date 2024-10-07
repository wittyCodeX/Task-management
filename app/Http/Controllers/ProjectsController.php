<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

use Illuminate\Support\Facades\DB;

class ProjectsController extends Controller
{
    public function index(Request $request): Response
    {
        $projects = DB::table('users')
            ->select('name', 'email', 'created_at')
            ->get();
        return Inertia::render('Dashboard/home', [
            'user' => $projects
        ]);
    }
}
