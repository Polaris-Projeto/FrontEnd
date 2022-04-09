import React, { ChangeEvent, useState, useEffect } from 'react';
import { Grid, Box, Typography, TextField, Button } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import UserLogin from '../../models/UserLogin';
import { login } from '../../services/Service';
import "./Login.css";
import { useDispatch } from 'react-redux';
import { addToken } from '../../store/tokens/actions';
import { toast } from 'react-toastify';


function Login() {

    let history = useHistory();
    const dispatch = useDispatch();
    const [token, setToken] = useState('');
    const [userLogin, setUserLogin] = useState<UserLogin>({

        id: 0,
        nome: "",
        usuario: "",
        senha: "",
        foto: "",
        token: ""
    })


    function updatedModel(e: ChangeEvent<HTMLInputElement>) {
        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        if (token !== "") {
            dispatch(addToken(token));
            history.push("/home")
        }
    }, [token])

    async function cadastrar(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            await login(`/usuarios/logar`, userLogin, setToken)
            toast.success('Usuário logado com sucesso!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
        } catch (error) {
            toast.error('Dados do usuário inconsistentes. Erro ao logar!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
        }
    }

    return (
        <>
            <Box className='box'>
                <Grid container direction="row" justifyContent="center" alignItems="center" className='body1'>
                    <Grid item xs={5} alignItems="center">
                        <Box paddingY={15} paddingX={10} className="form1" >

                            <form onSubmit={cadastrar} >
                                <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center"
                                    className="texto">Entrar</Typography>

                                <TextField
                                    value={userLogin.usuario}
                                    onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} 
                                    id='usuario' 
                                    label='usuário' 
                                    variant='outlined' 
                                    name='usuario' 
                                    margin='normal' 
                                    style={{backgroundColor: "#dee5e9"}}
                                    fullWidth />

                                <TextField value={userLogin.senha}
                                    onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} 
                                    id='senha' 
                                    label='senha' 
                                    variant='outlined' 
                                    name='senha'
                                    margin='normal'
                                    type='password'
                                    style={{backgroundColor: "#dee5e9"}}
                                    fullWidth />

                                <Box marginTop={2} textAlign='center' className='mge'>
                                    <Button type='submit' variant='contained' className="botaoLogar">
                                        Logar
                                    </Button>
                                </Box>

                                <Box display='flex' justifyContent='center' marginTop={2} className='mge'>
                                    <Box marginRight={1}>
                                        <Typography variant='subtitle1' gutterBottom align='center'>Não tem uma conta?</Typography>
                                    </Box>
                                    <Link to="/cadastrousuario">
                                        <Typography variant='subtitle1' gutterBottom align='center' className='textos1'>Cadastre-se aqui!</Typography>
                                    </Link>
                                    
                                </Box>
                                <Link to="/">
                                        <Typography variant='subtitle1' gutterBottom align='center' className='textos1'>Conheça a Polaris</Typography>
                                    </Link>
                            </form>
                        </Box>
                    </Grid>

                </Grid>
            </Box>
        </>
    );
}

export default Login; //exportando o componente