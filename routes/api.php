<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\TaskController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');
// Route::resource('tasks', TaskController::class)
//     ->only(['indexApi']);
// Route::get('/tasks', [TaskController::class, 'indexApi']);
Route::post('/register', [AuthController::class, 'register']);
Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::get('/tasks', [TaskController::class, 'indexApi']);
    Route::post('/tasks', [TaskController::class, 'storeApi']);
    Route::put('/tasks/{id}', [TaskController::class, 'updateApi']);
    Route::delete('/tasks/{id}', [TaskController::class, 'destroyApi']);
});
