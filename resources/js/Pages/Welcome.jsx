import ApplicationLogo from "@/Components/Icons/ApplicationLogo";
import ArrowIcon from "@/Components/Icons/ArrowIcon";
import TaskControlIcon from "@/Components/Icons/TaskControlIcon";
import TaskLookIcon from "@/Components/Icons/TaskLookIcon";
import TaskOrganizeIcon from "@/Components/Icons/TaskOrganizeIcon";
import TaskWorldIcon from "@/Components/Icons/TaskWorldIcon";
import { Link, Head } from "@inertiajs/react";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const handleImageError = () => {
        document
            .getElementById("screenshot-container")
            ?.classList.add("!hidden");
        document.getElementById("docs-card")?.classList.add("!row-span-1");
        document
            .getElementById("docs-card-content")
            ?.classList.add("!flex-row");
        document.getElementById("background")?.classList.add("!hidden");
    };

    return (
        <>
            <Head title="Welcome" />
            <div className="bg-gray-50 text-black/50 dark:bg-black dark:text-white/50">
                <img
                    alt="background"
                    id="background"
                    className="absolute -left-20 top-0 max-w-[877px]"
                    src="https://laravel.com/assets/img/welcome/background.svg"
                />
                <div className="relative min-h-screen flex flex-col items-center justify-center selection:bg-[#FF2D20] selection:text-white">
                    <div className="relative w-full max-w-2xl px-6 lg:max-w-7xl">
                        <header className="grid grid-cols-2 items-center gap-2 py-10 lg:grid-cols-3">
                            <div className="flex lg:justify-center lg:col-start-2">
                                <ApplicationLogo />
                            </div>
                            <nav className="-mx-3 flex flex-1 justify-end">
                                {auth.user ? (
                                    <Link
                                        href={route("tasks.index")}
                                        className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                    >
                                        Tasks Manager
                                    </Link>
                                ) : (
                                    <>
                                        <Link
                                            href={route("login")}
                                            className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                        >
                                            Log in
                                        </Link>
                                        <Link
                                            href={route("register")}
                                            className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                        >
                                            Register
                                        </Link>
                                    </>
                                )}
                            </nav>
                        </header>

                        <main className="mt-6">
                            <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
                                <div
                                    id="docs-card"
                                    className="flex flex-col items-start gap-6 overflow-hidden rounded-lg bg-white p-6 shadow-[0px_14px_34px_0px_rgba(0,0,0,0.08)] ring-1 ring-white/[0.05] transition duration-300 hover:text-black/70 hover:ring-black/20 focus:outline-none focus-visible:ring-[#FF2D20] md:row-span-3 lg:p-10 lg:pb-10 dark:bg-zinc-900 dark:ring-zinc-800 dark:hover:text-white/70 dark:hover:ring-zinc-700 dark:focus-visible:ring-[#FF2D20]"
                                >
                                    <div
                                        id="screenshot-container"
                                        className="relative flex w-full flex-1 items-stretch"
                                    >
                                        <img
                                            src="https://projectsly.com/images/blog/task-management-tools.png"
                                            alt="Laravel documentation screenshot"
                                            className="aspect-video h-full w-full flex-1 rounded-[10px] object-top object-cover drop-shadow-[0px_4px_34px_rgba(0,0,0,0.06)] dark:hidden"
                                            onError={handleImageError}
                                        />
                                        <div className="absolute -bottom-16 -left-16 h-40 w-[calc(100%+8rem)] bg-gradient-to-b from-transparent via-white to-white dark:via-zinc-900 dark:to-zinc-900"></div>
                                    </div>

                                    <div className="relative flex items-center gap-6 lg:items-end">
                                        <div
                                            id="docs-card-content"
                                            className="flex items-start gap-6 lg:flex-col"
                                        >
                                            <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#FF2D20]/10 sm:size-16">
                                                <TaskOrganizeIcon />
                                            </div>

                                            <div className="pt-3 sm:pt-5 lg:pt-0">
                                                <h2 className="text-xl font-semibold text-black dark:text-white">
                                                    TaskMaster
                                                </h2>

                                                <p className="mt-4 text-sm/relaxed">
                                                    Are you feeling overwhelmed
                                                    with the multitude of tasks
                                                    cluttering your mind? Enter
                                                    TaskMaster, your ultimate
                                                    companion in taming the
                                                    chaos of your daily life.
                                                    With its sleek interface and
                                                    powerful features,
                                                    TaskMaster is designed to
                                                    streamline your workflow and
                                                    boost your productivity like
                                                    never before.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 rounded-lg bg-white p-6 shadow-[0px_14px_34px_0px_rgba(0,0,0,0.08)] ring-1 ring-white/[0.05] transition duration-300 hover:text-black/70 hover:ring-black/20 focus:outline-none focus-visible:ring-[#FF2D20] lg:pb-10 dark:bg-zinc-900 dark:ring-zinc-800 dark:hover:text-white/70 dark:hover:ring-zinc-700 dark:focus-visible:ring-[#FF2D20]">
                                    <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#FF2D20]/10 sm:size-16">
                                        <TaskLookIcon />
                                    </div>

                                    <div className="pt-3 sm:pt-5">
                                        <h2 className="text-xl font-semibold text-black dark:text-white">
                                            Why Choose TaskMaster?
                                        </h2>
                                        <ul>
                                            <li className="mt-4 text-sm/relaxed">
                                                Efficiency: Streamline your
                                                workflow and accomplish more in
                                                less time.
                                            </li>
                                            <li className="mt-4 text-sm/relaxed">
                                                Organization: Keep your tasks
                                                and projects neatly organized
                                                and easily accessible.
                                            </li>
                                            <li className="mt-4 text-sm/relaxed">
                                                Insights: Gain valuable insights
                                                into your productivity habits
                                                and optimize your workflow for
                                                success.
                                            </li>
                                            <li className="mt-4 text-sm/relaxed">
                                                Accessibility: Access your tasks
                                                anytime, anywhere, across all
                                                your devices.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {auth.user ? (
                                    <>
                                        <a
                                            href={route("tasks.index")}
                                            className="flex items-start gap-4 rounded-lg bg-white p-6 shadow-[0px_14px_34px_0px_rgba(0,0,0,0.08)] ring-1 ring-white/[0.05] transition duration-300 hover:text-black/70 hover:ring-black/20 focus:outline-none focus-visible:ring-[#FF2D20] lg:pb-10 dark:bg-zinc-900 dark:ring-zinc-800 dark:hover:text-white/70 dark:hover:ring-zinc-700 dark:focus-visible:ring-[#FF2D20]"
                                        >
                                            <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#FF2D20]/10 sm:size-16">
                                                <TaskControlIcon />
                                            </div>

                                            <div className="pt-3 sm:pt-5">
                                                <h2 className="text-xl font-semibold text-black dark:text-white">
                                                    You are already logged in
                                                </h2>

                                                <p className="mt-4 text-sm/relaxed">
                                                    Click to continue to the
                                                    tasks panel and take control
                                                    of your tasks.
                                                </p>
                                            </div>

                                            <ArrowIcon />
                                        </a>
                                    </>
                                ) : (
                                    <>
                                        <a
                                            href={route("login")}
                                            className="flex items-start gap-4 rounded-lg bg-white p-6 shadow-[0px_14px_34px_0px_rgba(0,0,0,0.08)] ring-1 ring-white/[0.05] transition duration-300 hover:text-black/70 hover:ring-black/20 focus:outline-none focus-visible:ring-[#FF2D20] lg:pb-10 dark:bg-zinc-900 dark:ring-zinc-800 dark:hover:text-white/70 dark:hover:ring-zinc-700 dark:focus-visible:ring-[#FF2D20]"
                                        >
                                            <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#FF2D20]/10 sm:size-16">
                                                <TaskControlIcon />
                                            </div>

                                            <div className="pt-3 sm:pt-5">
                                                <h2 className="text-xl font-semibold text-black dark:text-white">
                                                    Login
                                                </h2>

                                                <p className="mt-4 text-sm/relaxed">
                                                    Ready to regain control of
                                                    your tasks and boost your
                                                    productivity? Log in to your
                                                    TaskMaster account on our
                                                    web application to
                                                    seamlessly manage your
                                                    tasks, projects, and
                                                    collaborations from any
                                                    browser, anywhere in the
                                                    world.
                                                </p>
                                            </div>

                                            <ArrowIcon />
                                        </a>

                                        <a
                                            href={route("register")}
                                            className="flex items-start gap-4 rounded-lg bg-white p-6 shadow-[0px_14px_34px_0px_rgba(0,0,0,0.08)] ring-1 ring-white/[0.05] lg:pb-10 dark:bg-zinc-900 dark:ring-zinc-800"
                                        >
                                            <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#FF2D20]/10 sm:size-16">
                                                <TaskWorldIcon />
                                            </div>

                                            <div className="pt-3 sm:pt-5">
                                                <h2 className="text-xl font-semibold text-black dark:text-white">
                                                    Not account yet?
                                                </h2>

                                                <p className="mt-4 text-sm/relaxed">
                                                    You can register just click
                                                    on this button and fill the
                                                    form with the information
                                                    required.
                                                </p>
                                            </div>
                                            <ArrowIcon />
                                        </a>
                                    </>
                                )}
                            </div>
                        </main>

                        <footer className="py-16 text-center text-sm text-black dark:text-white/70">
                            Laravel v{laravelVersion} (PHP v{phpVersion})
                        </footer>
                    </div>
                </div>
            </div>
        </>
    );
}
