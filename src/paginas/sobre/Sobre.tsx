import { AppBar, Box, Button, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import './Sobre.css';

function Sobre() {
    return (
        <>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <Box className='cursor'>
                        <Typography variant="h5" color="inherit">
                            
                        </Typography>
                    </Box>

                    <Box display="flex" justifyContent="start">
                        <Link to="/login" className="text-decorator-none">
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    Entrar
                                </Typography>
                            </Box>
                        </Link>
                        <Link to="/cadastrousuario" className="text-decorator-none">
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    Cadastrar
                                </Typography>
                            </Box>
                        </Link>

                    </Box>

                </Toolbar>
            </AppBar>

            <h1 className='p30'>POLARIS</h1>



        </>
    );
}

export default Sobre;