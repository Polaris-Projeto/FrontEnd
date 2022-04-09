import React from "react";
import { Link, useHistory } from "react-router-dom";
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokensReducer";
import { addToken } from "../../../store/tokens/actions";
import logo from "../../../assets/img/logo.png";
import './Navbar.css';

function Navbar() {
    const token = useSelector<TokenState, TokenState["tokens"]>(
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
        navbarComponent = <AppBar position="static" >
            <Toolbar variant="dense">
                <Box className='cursor'>
                    <Typography variant="h5" color="inherit">
                         <img src={logo} width="100px" alt="" /> 
                    </Typography>
                </Box>

                <Box display="flex" justifyContent="start">
                    <Link to="/home"className='cursor5'>
                        <Box mx={1}>
                            <Typography variant="h6" color="inherit">
                                home
                            </Typography>
                        </Box>
                    </Link>
                    <Link to="/posts" className='cursor5'>
                        <Box mx={1} >
                            <Typography variant="h6" color="inherit">
                                postagens
                            </Typography>
                        </Box>
                    </Link>
                    <Link to="/temas" className='cursor5'>
                        <Box mx={1} >
                            <Typography variant="h6" color="inherit">
                                temas
                            </Typography>
                        </Box>
                    </Link>
                    <Link to="/formularioTema" className='cursor5'>
                        <Box mx={1} >
                            <Typography variant="h6" color="inherit">
                                cadastrar tema
                            </Typography>
                        </Box>
                    </Link>
                    <Link to="" className='cursor5 cursor2'>
                    <Box mx={1}  onClick={goLogout}>
                        <Typography variant="h6" color="inherit" >
                            logout
                        </Typography>
                    </Box>
                    </Link>
                </Box>

            </Toolbar>
        </AppBar>
    }

    return (
        <>
            {navbarComponent}
        </>
    )
}

export default Navbar;