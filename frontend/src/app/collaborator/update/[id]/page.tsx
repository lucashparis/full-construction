'use client';
import { getCollaboratorByIDAction, updateCollaboratorAction } from '@/actions/collaboratorActions';
import Collaborator from '@/class/Collaborator';
import BasicAlerts from '@/components/Alert';
import Container from '@/components/Container';
import Header from '@/components/Header';
import MyMenu from '@/components/MyMenu';
import { TextField, Button } from '@mui/material';
import Router from 'next/router';
import { useEffect, useState } from 'react';

type CollaboratorProps = {
    params: {
        id: number
    }
}

export default function UpdateCollaborator({params}:CollaboratorProps) {

    const [name, setName] = useState('');
    const [daily, setDaily] = useState(0);
    const [img, setImg] = useState('https://cdn-icons-png.flaticon.com/512/3334/3334385.png');
    const [alertMessage, setAlertMessage] = useState({error: false, message: ''});

    useEffect(() => {
        getCollaboratorByID(Number(params.id));
    }, []);
    
    const getCollaboratorByID = async (id:number) => {
        const collaborator = await getCollaboratorByIDAction(id);
        setName(collaborator.name);
        setDaily(collaborator.daily);
    }

    const updateCollaborator = (event:any) => {
        event.preventDefault();

        try {
            const collaborator = new Collaborator(name, daily, img, params.id);
            updateCollaboratorAction(collaborator);
        } catch (error) {
            setAlertMessage({error: true, message: String(error)});
        }
    }

    return (
        <>  
            {name && daily && 
                <div>
                    <MyMenu/>
                    <Header description={"Edição de Funcionário"}/>
                    <Container>
                        { alertMessage.message && (
                            <BasicAlerts error={alertMessage.error} message={alertMessage.message} />
                            )}
                        <form onSubmit={updateCollaborator}>
                            <div className='mb-4'>
                                <TextField className='w-full' id="standard-basic" label="Nome" variant="standard" onChange={() => {setName(event.target.value)}} defaultValue={name} />
                                <TextField className='w-full' id="standard-basic" type="number" label="Diária" variant="standard" onChange={()=> {setDaily(Number(event.target.value))}} defaultValue={daily} />
                            </div>
                            <Button className='button' type="submit" variant="contained"> Editar </Button>
                        </form>
                    </Container>
                </div>
            }
        </>
    );
}
