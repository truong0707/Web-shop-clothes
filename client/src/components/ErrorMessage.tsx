import React from 'react';
import { Alert, AlertTitle } from '@mui/material';

interface PropsErrType {
    messageError: string,
}

export default function ErrorMessage(props: PropsErrType) {
    return (
        <div>
            <Alert style={{ maxWidth: '370px', margin: 'auto' }} severity="error">
                <AlertTitle>Error</AlertTitle>
                {props.messageError} — <strong>Lỗi!</strong>
            </Alert>
        </div>
    )
}
