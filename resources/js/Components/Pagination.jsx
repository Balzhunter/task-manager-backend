import { Link } from "@inertiajs/react";

export default function Pagination({ pagination }) {
    return (
        <>
            <div className="flex justify-around">
                {pagination.links.prev ? (
                    <Link
                        href={pagination.links.prev}
                        className="text-blue-600 font-bold"
                    >
                        Previous
                    </Link>
                ) : (
                    <p className="text-gray-600" disabled>
                        Previous
                    </p>
                )}
                <p>{pagination.meta.current_page}</p>
                {pagination.links.next ? (
                    <Link
                        href={pagination.links.next}
                        className="text-blue-600 font-bold"
                    >
                        Next
                    </Link>
                ) : (
                    <p className="text-gray-600" disabled>
                        Next
                    </p>
                )}
            </div>
        </>
    );
}
