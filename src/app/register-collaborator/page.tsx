'use client';
import Collaborator from '@/class/Collaborator';
import BasicAlerts from '@/component/Alert';
import { TextField, Button } from '@mui/material';
import { useState } from 'react';

export default function RegisterCollaborator() {

    const [name, setName] = useState('');
    const [daily, setDaily] = useState(0);
    const [errorMessage, setErrorMessage] = useState('');

    const createCollaborator = (event:any) => {
        event.preventDefault();

        try {
            const collaborator = new Collaborator(name, daily);
            console.log(collaborator);
        } catch (error) {
            setErrorMessage(error);
            console.log(error);
        }
    }

    return (
        <>
            { errorMessage && (
                <BasicAlerts message={errorMessage} />
            )}
            <h1> Register Collaborator </h1>
            <form onSubmit={createCollaborator}>
                <TextField id="standard-basic" label="Nome" variant="standard" onChange={() => {setName(event.target.value)}} />
                <TextField id="standard-basic" type="number" label="Diária" variant="standard" onChange={()=> {setDaily(event.target.value)}} />
                <Button className='bg-[#1976d2]' type="submit" variant="contained"> Cadastrar </Button>
            </form>
        </>
    );
}
