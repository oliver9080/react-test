import React, {useState, useEffect} from 'react';
import MyAlert from './MyAlert';
import {Stack, Typography} from '@mui/material';

const App = () => {
    const [warning, setWarning] = useState(false);
    const [info, setInfo] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        setWarning(true);
        setInfo(true);
        setError(true);
    }, []);
    
    return (
        <>
            <Stack sx={{width: '600px', padding: '20px'}} spacing={2}>
                <Typography variant={'h4'}>Alerts</Typography>
                {
                    warning ? <MyAlert
                        type={'warning'}
                        title={'Warning'}
                        content={'This is a warning message'}
                    /> :null
                }
                {
                    info ? <MyAlert
                        type={'info'}
                        title={'Information'}
                        content={'This is a information message'}
                    /> :null
                }
                {
                    error ? <MyAlert
                        type={'error'}
                        title={'Error'}
                        content={'This is an error message'}
                    /> :null
                }
            </Stack>
        </>
    );
}

export default App;
