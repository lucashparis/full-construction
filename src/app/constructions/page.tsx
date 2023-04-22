import Link from "next/link";

export default function Constructions() {
  return (
    <>
        <h1> Maintenance Constructions </h1>
        <Link href="/register-constructions"> 
            <button className="border-solid border-2 border-sky-500"> Cadastrar </button>
        </Link>
    </>
  )
}