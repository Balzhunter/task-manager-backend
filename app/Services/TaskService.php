<?php

namespace App\Services;

use App\Helpers\PaginationHelper;
use App\Http\Requests\StoreTaskRequest;
use App\Http\Requests\UpdateTaskRequest;
use App\Models\Task;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;

class TaskService
{

    public static function index(Request $request)
    {
        $PAGINATION = 10;

        if (Auth::user()->is_admin) {
            $tasks = Task::with('user:id,name')->when($request->term, function ($query, $term) {
                $query->where('title', 'LIKE', '%' . $term . '%')->orWhere('description', 'LIKE', '%' . $term . '%');
            })->latest()->get();

            $tasks = PaginationHelper::paginate($tasks, $PAGINATION);
            return $tasks;
        }

        $tasks = $request->user()->tasks()->when($request->term, function ($query, $term) {
            $query->where('title', 'LIKE', '%' . $term . '%')->orWhere('description', 'LIKE', '%' . $term . '%');
        })->where('user_id', $request->user()->id)->get();

        $tasks = PaginationHelper::paginate($tasks, $PAGINATION);
        return $tasks;
    }

    public static function store(StoreTaskRequest $request)
    {
        $validated = $request->validated();

        $created = $request->user()->tasks()->create($validated);

        return $created;
    }

    public static function update(UpdateTaskRequest $request, Task $task)
    {
        Gate::authorize('update', $task);

        $validated = $request->validated();

        $task->update($validated);

        return $task;
    }

    public static function destroy(Task $task)
    {
        Gate::authorize('delete', $task);

        $task->delete();
    }
}
