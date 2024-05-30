<?php

namespace App\Http\Controllers;

use App\Helpers\PaginationHelper;
use App\Http\Requests\StoreTaskRequest;
use App\Http\Requests\UpdateTaskRequest;
use App\Http\Resources\TaskResource;
use App\Http\Resources\UserResource;
use App\Models\Task;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;
use Inertia\Inertia;

class TaskController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        if (Auth::user()->is_admin) {
            $tasks = Task::with('user:id,name')->latest()->get();

            $tasks = PaginationHelper::paginate($tasks, 1);
            // dd($tasks);
            return Inertia::render('Tasks/Index', [
                'tasks' => TaskResource::collection($tasks)
            ]);
        }
        // dd(Task::with('user:id,name')->latest()->get());
        // dd(Task::paginate(2)->through(function ($item) {
        //     return [
        //         'task_id' => $item->task_id,
        //         'title' => $item->title,
        //     ];
        // }));
        if (Auth::user()->is_admin) {
            return Inertia::render('Tasks/Index', [
                'tasks' => Task::paginate(2)->get()
            ]);
        }

        return Inertia::render('Tasks/Index', [
            'tasks' => Task::where('user_id', Auth::user()->id)->get()->paginate(2)
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreTaskRequest $request)
    {
        $validated = $request->validated();

        $request->user()->tasks()->create($validated);

        return redirect(route('tasks.index'));
    }

    /**
     * Display the specified resource.
     */
    public function show(Task $task)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Task $task)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateTaskRequest $request, Task $task)
    {
        Gate::authorize('update', $task);

        $validated = $request->validated();

        $task->update($validated);

        return redirect(route('tasks.index'));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Task $task)
    {
        Gate::authorize('delete', $task);

        $task->delete();

        return redirect(route('tasks.index'));
    }
}
