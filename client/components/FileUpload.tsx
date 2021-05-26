import React, { FC, ChangeEvent } from 'react';
import { Grid, Button } from '@material-ui/core';

interface FileUploadProps {
    label: string;
    setFile: Function;
    accept: string;
}

const FileUpload: FC<FileUploadProps> = ({ label, setFile, accept }) => {

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFile(e.target.files[0]);
    };

    return (
        <Grid
            container
            sx={{ p: 2.5 }}
        >
            <Button
                variant="contained"
                component="label"
            >
                {label}
                <input 
                    type="file" 
                    accept={accept}
                    onChange={onChange}
                    hidden 
                />
            </Button>
        </Grid>
    );
};

export default FileUpload;