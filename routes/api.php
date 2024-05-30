<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\TaskController;
use Illuminate\Support\Facades\Route;

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::post('/logout', [AuthController::class, 'logout']);

Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::get('/tasks', [TaskController::class, 'indexApi']);
    Route::post('/tasks', [TaskController::class, 'storeApi']);
    Route::put('/tasks/{id}', [TaskController::class, 'updateApi']);
    Route::delete('/tasks/{id}', [TaskController::class, 'destroyApi']);
});
