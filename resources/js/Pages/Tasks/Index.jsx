import InputError from "@/Components/InputError";
import Pagination from "@/Components/Pagination";
import PrimaryButton from "@/Components/PrimaryButton";
import Task from "@/Components/Task";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import { useState } from "react";
import Search from "./Search";
import Checkbox from "@/Components/Checkbox";
import InputLabel from "@/Components/InputLabel";

export default function Index({ auth, tasks }) {
    const {
        data,
        setData,
        post,
        processing,
        reset,
        errors,
        patch,
        clearErrors,
    } = useForm({
        title: "",
        description: "",
        expiration_date: "",
    });
    const [editing, setEditing] = useState(false);

    const submitCreate = (e) => {
        e.preventDefault();
        post(route("tasks.store"), { onSuccess: () => reset() });
    };

    const submitEdit = (e, task_id) => {
        e.preventDefault();
        patch(route("tasks.update", task_id), {
            onSuccess: () => {
                setEditing(false);
                reset();
                clearErrors();
            },
        });
    };

    const handleEdit = (task) => {
        setData({
            title: task.title,
            description: task.description,
            expiration_date: new Date(task.expiration_date)
                .toISOString()
                .split("T")[0],
            task_id: task.task_id,
        });
        setEditing(true);
    };

    const [unCompleted, setUnCompleted] = useState(true);
    const [completed, setCompleted] = useState(true);

    console.log(tasks);

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Tasks" />
            <div className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8">
                <Search />
                <div className="flex justify-around mt-6">
                    <InputLabel htmlFor="no_completados">
                        <Checkbox
                            id="no_completados"
                            checked={unCompleted}
                            onChange={() => setUnCompleted(!unCompleted)}
                        />{" "}
                        No Completados
                    </InputLabel>
                    <InputLabel htmlFor="completados">
                        <Checkbox
                            id="completados"
                            checked={completed}
                            onChange={() => setCompleted(!completed)}
                        />{" "}
                        Completados
                    </InputLabel>
                </div>
            </div>
            <div className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8">
                {editing ? (
                    <form onSubmit={(e) => submitEdit(e, data.task_id)}>
                        <TextInput
                            value={data.title}
                            placeholder="Titulo"
                            className="block w-full"
                            onChange={(e) => setData("title", e.target.value)}
                        ></TextInput>
                        <InputError message={errors.title} className="mt-2" />
                        <TextInput
                            value={data.description}
                            placeholder="Descripcción"
                            className="block w-full"
                            onChange={(e) =>
                                setData("description", e.target.value)
                            }
                        ></TextInput>
                        <InputError
                            message={errors.description}
                            className="mt-2"
                        />
                        <TextInput
                            type="date"
                            value={data.expiration_date}
                            placeholder="Día de expiración"
                            className="block w-full"
                            onChange={(e) =>
                                setData("expiration_date", e.target.value)
                            }
                        ></TextInput>
                        <InputError
                            message={errors.expiration_date}
                            className="mt-2"
                        />
                        <PrimaryButton className="mt-4" disabled={processing}>
                            {"Editar Tarea"}
                        </PrimaryButton>
                    </form>
                ) : (
                    <form onSubmit={submitCreate}>
                        <TextInput
                            value={data.title}
                            placeholder="Titulo"
                            className="block w-full"
                            onChange={(e) => setData("title", e.target.value)}
                        ></TextInput>
                        <InputError message={errors.title} className="mt-2" />
                        <TextInput
                            value={data.description}
                            placeholder="Descripcción"
                            className="block w-full"
                            onChange={(e) =>
                                setData("description", e.target.value)
                            }
                        ></TextInput>
                        <InputError
                            message={errors.description}
                            className="mt-2"
                        />
                        <TextInput
                            type="date"
                            value={data.expiration_date}
                            placeholder="Día de expiración"
                            className="block w-full"
                            onChange={(e) =>
                                setData("expiration_date", e.target.value)
                            }
                        ></TextInput>
                        <InputError
                            message={errors.expiration_date}
                            className="mt-2"
                        />
                        <PrimaryButton className="mt-4" disabled={processing}>
                            {"Crear Tarea"}
                        </PrimaryButton>
                    </form>
                )}
                <div className="mt-6 bg-white shadow-sm rounded-lg divide-y">
                    {tasks.data.map((task) => {
                        if (
                            (completed && task.is_complete) ||
                            (unCompleted && !task.is_complete)
                        ) {
                            return (
                                <Task
                                    key={task.task_id}
                                    task={task}
                                    onEdit={handleEdit}
                                />
                            );
                        }
                        return <></>;
                    })}
                    <Pagination pagination={tasks} />
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
