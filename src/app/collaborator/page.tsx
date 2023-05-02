"use client"
import CardCollaborator from "@/components/CardCollaborator";
import Container from "@/components/Container";
import Header from "@/components/Header";
import MyMenu from "@/components/MyMenu";

export default function Collaborator() {
  return (
    <>  
        <MyMenu/>
        <Header description={"Funcionários"} route={'/register-collaborator'} useButton={true}/>
        <Container>
            <CardCollaborator name='Breno' description='Pedreirão Marrento'/>
        </Container>
    </>
  )
}