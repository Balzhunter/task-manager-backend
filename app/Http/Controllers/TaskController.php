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
    private $PAGINATION = 10;
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        if (Auth::user()->is_admin) {
            $tasks = Task::with('user:id,name')->when($request->term, function ($query, $term) {
                $query->where('title', 'LIKE', '%' . $term . '%')->orWhere('description', 'LIKE', '%' . $term . '%');
            })->latest()->get();

            $tasks = PaginationHelper::paginate($tasks, $this->PAGINATION);
            return Inertia::render('Tasks/Index', [
                'tasks' => TaskResource::collection($tasks)
            ]);
        }

        $tasks = $request->user()->tasks()->when($request->term, function ($query, $term) {
            $query->where('title', 'LIKE', '%' . $term . '%')->orWhere('description', 'LIKE', '%' . $term . '%');
        })->get();

        $tasks = PaginationHelper::paginate($tasks, $this->PAGINATION);
        return Inertia::render('Tasks/Index', [
            'tasks' => TaskResource::collection($tasks)
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
