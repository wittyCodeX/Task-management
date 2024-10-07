<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProjectsController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

// Route::get('/dashboard/home', function () {
//     return Inertia::render('home');
// })->middleware(['auth', 'verified'])->name('home');


Route::get('/dashboard/profile', function () {
    return Inertia::render('Dashboard/profile');
})->middleware(['auth', 'verified'])->name('profile');

Route::get('/dashboard/tables', function () {
    return Inertia::render('Dashboard/tables');
})->middleware(['auth', 'verified'])->name('tables');

Route::get('/dashboard/notifications', function () {
    return Inertia::render('Dashboard/notifications');
})->middleware(['auth', 'verified'])->name('notifications');

Route::get('/dashboard-navbar', function () {
    return Inertia::render('Dashboard/dashboard-navbar');
})->middleware(['auth', 'verified'])->name('dashboard-navbar');


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::get('/dashboard/home', [ProjectsController::class, 'index'])->name('home');
});

require __DIR__ . '/auth.php';
