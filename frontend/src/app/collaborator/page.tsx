"use client"
import { useEffect, useState } from "react";
import { getCollaboratorAction } from "@/actions/collaboratorActions";
import CardCollaborator from "@/components/CardCollaborator";
import Container from "@/components/Container";
import Header from "@/components/Header";
import MyMenu from "@/components/MyMenu";

export default function Collaborator() {
    const [collaborators, setCollaborators] = useState<any[]>([]);
    
    useEffect(() => {
        getCollaborators();
    }, []);
    
    const getCollaborators = async () => {
        const collaborators = await getCollaboratorAction();
        setCollaborators(collaborators);
    }

    const listCollaborators = collaborators.map((el) => {
        return <li key={el.id} className="list-none"><CardCollaborator id={el.id} name={el.name} description={el.daily} img={el.img}/></li>;
    });

    return (
        <>  
            <MyMenu/>
            <Header description={"Funcionários"} route={'/register-collaborator'} useButton={true}/>
            <Container>
                {listCollaborators}
            </Container>
        </>
    )
}