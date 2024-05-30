import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { useForm } from "@inertiajs/react";

export default function Search() {
    const { data, setData, get, processing, reset, errors, clearErrors } =
        useForm({
            term: "",
        });

    const getByTitleOrDescription = (e) => {
        e.preventDefault();
        get(route("tasks.index", { term: e.term }));
        reset();
        clearErrors();
    };

    return (
        <form onSubmit={getByTitleOrDescription}>
            <TextInput
                value={data.term}
                placeholder="Buscar por título o descripción"
                className="block w-full"
                onChange={(e) => setData("term", e.target.value)}
            ></TextInput>
            <InputError message={errors.title} className="mt-2" />
            <PrimaryButton className="mt-4" disabled={processing}>
                Buscar
            </PrimaryButton>
        </form>
    );
}
