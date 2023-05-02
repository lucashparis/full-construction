type dataCardCollaborator = {
    name : string
    description : string
}

export default function CardCollaborator({name, description}: dataCardCollaborator) {
    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="flex flex-col items-center py-10">
                <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src="https://pps.whatsapp.net/v/t61.24694-24/296382848_2043939489147034_4922993359540829619_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdSvFl2NJu_3Z2tCj3rBiAuxoHxBoj2LF4elNIp-18lP9w&oe=6458457B" alt="Bonnie image"/>
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white"> {name} </h5>
                <span className="text-sm text-gray-500 dark:text-gray-400"> {description} </span>
                <div className="flex mt-4 space-x-3 md:mt-6">
                    <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"> Editar </a>
                    <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"> Inativar </a>
                </div>
            </div>
        </div>
    );
}