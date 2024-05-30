import { useForm, usePage } from "@inertiajs/react";
import { useState } from "react";
import Dropdown from "./Dropdown";
import InputError from "./InputError";
import PrimaryButton from "./PrimaryButton";

export default function Task({ task, onEdit, ...props }) {
    const { auth } = usePage().props;

    // const { data, setData, patch, clearErrors, reset, errors } = useForm({
    //     message: task.message,
    // });

    // const submit = (e) => {
    //     e.preventDefault();
    //     patch(route("tasks.update", task.task_id), {
    //         onSuccess: () => setEditing(false),
    //     });
    // };

    return (
        <div {...props} className="p-2 flex">
            <div className="flex-1">
                <div className="flex justify-between items-center">
                    <span className="text-gray-800 font-bold">
                        {task.title}
                    </span>
                    {auth.user.is_admin && (
                        <span className="text-gray-800">{task.user.name}</span>
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
            {/* {false ? (
                <form onSubmit={submit}>
                    <textarea
                        value={data.message}
                        onChange={(e) => setData("message", e.target.value)}
                        className="mt-4 w-full text-gray-900 border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                    ></textarea>
                    <InputError message={errors.message} className="mt-2" />
                    <div className="space-x-2">
                        <PrimaryButton className="mt-4">Save</PrimaryButton>
                        <button
                            className="mt-4"
                            onClick={() => {
                                setEditing(false);
                                reset();
                                clearErrors();
                            }}
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            ) : (
                <></>
            )} */}
            <p className="mt-4 text-lg text-gray-900">{task.message}</p>
        </div>
    );
}
