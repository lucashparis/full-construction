import Link from "next/link";

type dataHeader = {
    description: string
    route?: string
    useButton?: boolean
}

export default function Header({description, route, useButton = false}:dataHeader) {
    return (
        <header className="bg-white shadow">
            <div className="flex justify-between mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900"> {description} </h1>
                {useButton && 
                    <Link href={String(route)}>
                        <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"> Cadastrar </button>
                    </Link>
                }
            </div>
        </header>
    );
}