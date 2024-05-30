import { useForm, usePage } from "@inertiajs/react";
import Dropdown from "./Dropdown";
import Checkbox from "./Checkbox";
import { useRef } from "react";

export default function Task({ task, onEdit, ...props }) {
    const { auth } = usePage().props;
    const { patch, setData, data } = useForm({
        is_complete: !!task.is_complete,
    });
    console.log("Task is complete", task.is_complete);
    const submit = (e) => {
        e.preventDefault();
        patch(route("tasks.update", { task: task.task_id }));
    };

    const buttonRef = useRef();

    return (
        <div {...props} className="p-2 flex">
            <div className="flex-1">
                <div className="flex justify-between items-center">
                    <span className="text-gray-800 font-bold">
                        <form onSubmit={submit}>
                            <Checkbox
                                className="mr-2"
                                checked={!!data.is_complete}
                                onChange={(e) => {
                                    const is_complete = data.is_complete;
                                    setData("is_complete", !is_complete);
                                    setTimeout(() => {
                                        buttonRef.current.click();
                                    }, 100);
                                }}
                            />
                            <button ref={buttonRef}></button>
                        </form>
                        {task.title}
                    </span>
                    {auth.user.is_admin && (
                        <span className="text-sky-800 font-semibold">
                            {task.user.name}
                        </span>
                    )}
                    <small className="ml-2 text-sm text-gray-600">
                        Expiración:{" "}
                        {new Date(task.expiration_date)
                            .toISOString()
                            .split("T")[0]
                            .split("-")
                            .reverse()
                            .join("-")}
                    </small>
                </div>
                <p className="mt-1 text-m text-gray-900">{task.description}</p>
            </div>
            <Dropdown>
                <Dropdown.Trigger>
                    <button>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 text-gray-400"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                        </svg>
                    </button>
                </Dropdown.Trigger>
                <Dropdown.Content>
                    <button
                        className="block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:bg-gray-100 transition duration-150 ease-in-out"
                        onClick={() => onEdit(task)}
                    >
                        Edit
                    </button>
                    <Dropdown.Link
                        as="button"
                        href={route("tasks.destroy", task.task_id)}
                        method="delete"
                    >
                        Delete
                    </Dropdown.Link>
                </Dropdown.Content>
            </Dropdown>
            <p className="mt-4 text-lg text-gray-900">{task.message}</p>
        </div>
    );
}
