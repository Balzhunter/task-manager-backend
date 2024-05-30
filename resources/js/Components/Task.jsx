import { useForm, usePage } from "@inertiajs/react";
import { useState } from "react";
import Dropdown from "./Dropdown";
import InputError from "./InputError";
import PrimaryButton from "./PrimaryButton";

export default function Task({ task, ...props }) {
    const { auth } = usePage().props;

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
                        {new Date(task.expiration_date).toLocaleDateString()}
                    </small>
                </div>
                <p className="mt-1 text-m text-gray-900">{task.description}</p>
            </div>
        </div>
    );
}
