'use client';
import { getCollaboratorByIDAction, updateCollaboratorAction } from '@/actions/collaboratorActions';
import Collaborator from '@/class/Collaborator';
import BasicAlerts from '@/components/Alert';
import Container from '@/components/Container';
import Header from '@/components/Header';
import MyMenu from '@/components/MyMenu';
import { TextField, Button, FormControlLabel, Switch } from '@mui/material';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

type CollaboratorProps = {
    params: {
        id: number
    }
}

export default function UpdateCollaborator({params}:CollaboratorProps) {
    const router = useRouter();

    const [name, setName] = useState('');
    const [daily, setDaily] = useState(0);
    const [img, setImg] = useState('https://cdn-icons-png.flaticon.com/512/3334/3334385.png');
    const [alertMessage, setAlertMessage] = useState({error: false, message: ''});
    const [status, setStatus] = useState(true);

    useEffect(() => {
        getCollaboratorByID(Number(params.id));
    }, []);
    
    const getCollaboratorByID = async (id:number) => {
        try {
            const collaborator = await getCollaboratorByIDAction(id);
            setName(collaborator.name);
            setDaily(collaborator.daily);
            setStatus(collaborator.status);
        } catch (error:any) {
            router.push('/404');
        }

    }

    const updateCollaborator = (event:any) => {
        event.preventDefault();

        try {
            const collaborator = new Collaborator(name, daily, img, status, params.id);
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
                                <TextField className='w-full' id="standard-basic" label="Nome" variant="standard" onChange={(e) => {setName(e.target.value)}} defaultValue={name} />
                                <TextField className='w-full' id="standard-basic" type="number" label="Diária" variant="standard" onChange={(e)=> {setDaily(Number(e.target.value))}} defaultValue={daily} />
                            </div>
                            <FormControlLabel
                                sx={{
                                    display: 'block',
                                }}
                                control={
                                    <Switch
                                        checked={status}
                                        onChange={() => setStatus(!status)}
                                        name="Status"
                                        color="primary"
                                    />
                                }
                                label="Status"
                            />
                            <Button className='button' type="submit" variant="contained"> Editar </Button>
                        </form>
                    </Container>
                </div>
            }
        </>
    );
}
