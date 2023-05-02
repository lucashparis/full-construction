type dataContainer = {
    children: any
}

export default function Container({ children }:dataContainer) {
    return (
        <div className='container-mobile'>{children}</div>
    );
}