import { Button, Container, TextField, Typography } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Register = () => {
    return (
        <Container>
            <TextField
                sx={{ width: "50%", m: 1 }}
                id="demo-helper-text-misaligned-no-helper"
                label="Name"
                name="name"
            />
            <br />
            <TextField
                sx={{ width: "50%", m: 1 }}
                id="demo-helper-text-misaligned-no-helper"
                label="Name"
            />
            <br />
            <TextField
                sx={{ width: "50%", m: 1 }}
                id="demo-helper-text-misaligned-no-helper"
                label="Name"
            />
            <br />
            <TextField
                sx={{ width: "50%", m: 1 }}
                id="demo-helper-text-misaligned-no-helper"
                label="Name"
            />
            <br />
            <Button
                sx={{ width: "50%", m: 1 }}
                variant="contained">Login
            </Button>
            <NavLink to="/login">
                <Typography>Already registerd? Login</Typography>
            </NavLink>
        </Container>
    );
};

export default Register;