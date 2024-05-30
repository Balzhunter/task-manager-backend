<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreTaskRequest;
use App\Http\Requests\UpdateTaskRequest;
use App\Http\Resources\TaskResource;
use App\Models\Task;
use App\Services\TaskService;
use Illuminate\Http\Request;
use Inertia\Inertia;
use PhpParser\Node\Stmt\Return_;

class TaskController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $tasks = TaskService::index($request);
        return Inertia::render('Tasks/Index', [
            'tasks' => TaskResource::collection($tasks)
        ]);
    }

    public function indexApi(Request $request)
    {
        $tasks = TaskService::index($request);
        // return 'Hello World';
        return response()->json([
            'tasks' => TaskResource::collection($tasks)
        ], 200);
        // return 'hello world';
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreTaskRequest $request)
    {
        TaskService::store($request);
        return redirect(route('tasks.index'));
    }

    public function storeApi(Request $request)
    {
        $task = TaskService::store($request);
        return response()->json(['task' => $task], 201);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateTaskRequest $request, Task $task)
    {
        TaskService::update($request, $task);
        return redirect(route('tasks.index'));
    }

    public function updateApi(UpdateTaskRequest $request, int $id)
    {
        $task = Task::find($id);
        $task = TaskService::update($request, $task);
        return response()->json(['task' => $task], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Task $task)
    {
        TaskService::destroy($task);
        return redirect(route('tasks.index'));
    }

    public function destroyApi(int $id)
    {
        $task = Task::find($id);
        TaskService::destroy($task);
        return response()->json([], 204);
    }
}
