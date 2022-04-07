import { Box, Button } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import './Sobre.css';

function Sobre() {
    return (
        <>
        <div>
        <h1 className='p30'>POLARIS</h1>
        </div>
            <Box marginTop={2} textAlign='right' >
                <div>
                    <Link to="/cadastrousuario">
                        <Button type='submit' variant='contained' color='primary'>
                            Cadastro
                        </Button>
                    </Link>
                </div>
                <div className='p5'>
                    <Link to="/login">
                        <Button type='submit' variant='contained' color='primary'>
                            Login
                        </Button>
                    </Link>
                </div>




            </Box>

        </>
    );
}

export default Sobre;