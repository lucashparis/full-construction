'use client';
import Constructions from '@/class/Constructions';
import BasicAlerts from '@/components/Alert';
import Container from '@/components/Container';
import Header from '@/components/Header';
import MyMenu from '@/components/MyMenu';
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
            <MyMenu/>
            <Header description={"Cadastro de Construção"} route={'/register-collaborator'}/>
            <Container>
                { alertMessage.message && (
                    <BasicAlerts error={alertMessage.error} message={alertMessage.message} />
                )}
                <form onSubmit={createConstructions}>
                    <div className='mb-4'>
                        <TextField className='w-full' id="standard-basic" label="Nome" variant="standard" onChange={() => {setName(event.target.value)}} />
                        <TextField className='w-full' id="standard-basic" type="number" label="Valor do Serviço" variant="standard" onChange={()=> {setServiceValue(event.target.value)}} />
                    </div>
                    <Button className='button' type="submit" variant="contained"> Cadastrar </Button>
                </form>
            </Container>
        </>
    );
}
