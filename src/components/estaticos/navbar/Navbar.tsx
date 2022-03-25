import React from "react";
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <>

            <AppBar position="static">
                <div id="barra">
                    <Toolbar variant="dense">
                        <Link to="/sobre" className='text-decorator-none'>
                            <Box className="cursor" >
                                <Typography variant="h5" color="inherit">
                                    Polaris
                                </Typography>
                            </Box>
                            </Link>

                            <Box display="flex" justifyContent="start">
                                <Box mx={1} className="cursor">
                                    <Typography variant="h6" color="inherit">
                                        Home
                                    </Typography>
                                </Box>
                                <Box mx={1} className="cursor">
                                    <Typography variant="h6" color="inherit">
                                        Postagens
                                    </Typography>
                                </Box>
                                <Box mx={1} className="cursor">
                                    <Typography variant="h6" color="inherit">
                                        Temas
                                    </Typography>
                                </Box>
                                <Box mx={1} className="cursor">
                                    <Typography variant="h6" color="inherit">
                                        Cadastrar Tema
                                    </Typography>
                                </Box>
                                <Link to="/login" className='text-decorator-none'>

                                    <Box mx={1} className="cursor">
                                        <Typography variant="h6" color="inherit">
                                            Logout
                                        </Typography>
                                    </Box>
                                </Link>

                                <Link to="/contato" className='text-decorator-none'>

                                    <Box mx={1} className="cursor">
                                        <Typography variant="h6" color="inherit">
                                            Contato
                                        </Typography>
                                    </Box>
                                </Link>
                            </Box>

                    </Toolbar>
                </div>
            </AppBar>

        </>
    )
}

export default Navbar;