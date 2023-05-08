'use client';
import Collaborator from '@/class/Collaborator';
import BasicAlerts from '@/components/Alert';
import Container from '@/components/Container';
import Header from '@/components/Header';
import MyMenu from '@/components/MyMenu';
import { TextField, Button } from '@mui/material';
import { useState } from 'react';

export default function RegisterCollaborator() {

    const [name, setName] = useState('');
    const [daily, setDaily] = useState(0);
    const [alertMessage, setAlertMessage] = useState({error: false, message: ''});

    const createCollaborator = (event:any) => {
        event.preventDefault();

        try {
            const collaborator = new Collaborator(name, daily);
            setAlertMessage({error: false, message: 'Funcionario cadastrado!'});
        } catch (error) {
            setAlertMessage({error: true, message: String(error)});
        }
    }

    return (
        <>
            <MyMenu/>
            <Header description={"Cadastro de Funcionário"}/>
            <Container>
                { alertMessage.message && (
                    <BasicAlerts error={alertMessage.error} message={alertMessage.message} />
                )}
                <form onSubmit={createCollaborator}>
                    <div className='mb-4'>
                        <TextField className='w-full' id="standard-basic" label="Nome" variant="standard" onChange={() => {setName(event.target.value)}} />
                        <TextField className='w-full' id="standard-basic" type="number" label="Diária" variant="standard" onChange={()=> {setDaily(event.target.value)}} />
                    </div>
                    <Button className='button' type="submit" variant="contained"> Cadastrar </Button>
                </form>
            </Container>
        </>
    );
}
