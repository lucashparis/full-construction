import Link from "next/link";

export default function Collaborator() {
  return (
    <>
        <h1> Maintenance Collaborator </h1>
        <Link href="/register-collaborator"> 
            <button className="border-solid border-2 border-sky-500"> Cadastrar </button>
        </Link>
    </>
  )
}