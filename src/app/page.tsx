import Link from "next/link";

export default function Home() {
    return (
        <>
            <h1> FullConstructor </h1>
            <ul>
                <li>
                    <Link href="/"> Home</Link>
                </li>
                <li>
                    <Link href="/collaborator"> Collaborator </Link>
                </li>
                <li>
                    <Link href="/constructions"> Constructions </Link>
                </li>
            </ul>
        </>
    )
}