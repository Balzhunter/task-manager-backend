import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";

export default function Index({ auth }) {
    const { data, setData, post, processing, reset, errors } = useForm({
        title: "",
        description: "",
        expiration_date: "",
    });

    const submit = (e) => {
        e.preventDefault();
        post(route("tasks.store"), { onSuccess: () => reset() });
    };

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Tasks" />

            <div className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8">
                <form onSubmit={submit}>
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
                        onChange={(e) => setData("description", e.target.value)}
                    ></TextInput>
                    <InputError message={errors.description} className="mt-2" />
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
                        Crear Tarea
                    </PrimaryButton>
                </form>
            </div>
        </AuthenticatedLayout>
    );
}
