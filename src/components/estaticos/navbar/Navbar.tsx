import React from "react";
import { Link, useHistory } from "react-router-dom";
import { AppBar, Toolbar, Typography, Box, Fab, Grid } from '@material-ui/core';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from "react-redux";
import { UserState } from "../../../store/user/userReducer";
import { addToken } from "../../../store/user/actions";
import Compass from "../../../assets/img/Compass.png";
import CompassWest from "../../../assets/img/CompassWest.png";
import './Navbar.css';

function Navbar() {
    const token = useSelector<UserState, UserState["tokens"]>(
        (state) => state.tokens
    );
    let history = useHistory();
    const dispatch = useDispatch();

    function goLogout() {
        dispatch(addToken(''));
        toast.info('Usuário deslogado', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined,
        });
        history.push('/login')
    }

    var navbarComponent;

    if (token !== "") {
        navbarComponent = <Grid xs={12}>
            <AppBar position="static" >
                <Toolbar variant="dense" className="barran">

                    <Grid xs={2}>
                        <Box className='cursor marginbotton'>
                            <Typography variant="h5" color="inherit">
                                <img src={Compass} width="50px" alt="" />
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid xs={3}>
                        <Typography variant="h6" color="inherit">
                            <Link to="/home" className="botaon">
                                    Home
                            </Link>
                        </Typography>
                    </Grid>
                    <Grid xs={4}>
                        <Typography variant="h6" color="inherit">
                            <Link to="/posts" className="botaon">
                                    Postagens
                            </Link>
                        </Typography>
                    </Grid>
                    <Grid xs={3}>
                        <Box mx={1} >
                            <Typography variant="h6" color="inherit">
                                <Link to="/temas" className="botaon">
                                        Temas
                                </Link>
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid xs={5}>
                        <Typography variant="h6" color="inherit">
                            <Link to="/formularioTema" className="botaon">
                                    Formulário Temas
                            </Link>
                        </Typography>
                    </Grid>
                    
                    <Grid xs={3}>
                        <Box mx={1} >
                            <Typography variant="h6" color="inherit">
                                <Link to="/perfil" className="botaon">
                                     Perfil
                                </Link>
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid xs={3}>
                        <Box mx={1} onClick={goLogout}>
                            <Typography variant="h6" color="inherit" >
                                <Link to="/login" className="botaosair">
                                        Sair
                                </Link>
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid xs={2}>
                        <Box className='cursor marginbotton'>
                            <Typography variant="h5" color="inherit">
                                <img src={CompassWest} width="50px" alt="" />
                            </Typography>
                        </Box>
                    </Grid>

                </Toolbar>
            </AppBar>
        </Grid>
    }

    return (
        <>
            {navbarComponent}
        </>
    )
}

export default Navbar;