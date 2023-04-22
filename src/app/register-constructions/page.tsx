'use client';
import Constructions from '@/class/Constructions';
import BasicAlerts from '@/component/Alert';
import { TextField, Button } from '@mui/material';
import { useState } from 'react';

export default function RegisterConstructions() {

    const [name, setName] = useState('');
    const [serviceValue, setServiceValue] = useState(0);
    const [alertMessage, setAlertMessage] = useState({error: false, message: ''});

    const createConstructions = (event:any) => {
        event.preventDefault();

        try {
            const constructions = new Constructions(name, serviceValue);
            setAlertMessage({error: false, message: 'Construção cadastrada!'});
        } catch (error) {
            setAlertMessage({error: true, message: String(error)});
        }
    }

    return (
        <>
            { alertMessage.message && (
                <BasicAlerts error={alertMessage.error} message={alertMessage.message} />
            )}
            <h1> Register Constructions </h1>
            <form onSubmit={createConstructions}>
                <TextField id="standard-basic" label="Nome" variant="standard" onChange={() => {setName(event.target.value)}} />
                <TextField id="standard-basic" type="number" label="Valor do Serviço" variant="standard" onChange={()=> {setServiceValue(event.target.value)}} />
                <Button className='bg-[#1976d2]' type="submit" variant="contained"> Cadastrar </Button>
            </form>
        </>
    );
}
