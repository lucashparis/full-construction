import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

type dataAlert = {
    message: string
    error: boolean
}

export default function BasicAlerts({error, message}: dataAlert) {
    return (
        <Stack sx={{ width: '100%' }} spacing={2}>
            <Alert variant="outlined" severity={error ? 'error' : 'success'}>
                {String(message)}
            </Alert>
        </Stack>
    );
}