import React, { ChangeEvent, useState, useEffect } from 'react';
import { Grid, Box, Typography, TextField, Button } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import UserLogin from '../../models/UserLogin';
import { login } from '../../services/Service';
import "./Login.css";
import { useDispatch } from 'react-redux';
import { addId, addToken } from '../../store/user/actions';
import { toast } from 'react-toastify';
import Compass from "../../assets/img/Compass.png";
import CompassWest from "../../assets/img/CompassWest.png";


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

    const [respUserLogin, setRespUserLogin] = useState<UserLogin>({
        id: 0,
        nome: "",
        usuario: "",
        senha: "",
        token: "",
        foto: ""
    })

    useEffect(() => {
        if (token !== "") {
            dispatch(addToken(token))
            history.push('/home')
        }
    }, [token])


    function updatedModel(e: ChangeEvent<HTMLInputElement>) {
        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value
        })
    }



    useEffect(() => {
        if(respUserLogin.token !== ""){

            // Verifica os dados pelo console (Opcional)
            console.log("Token: " + respUserLogin.token)
            console.log("ID: " + respUserLogin.id)

            // Guarda as informações dentro do Redux (Store)
            dispatch(addToken(respUserLogin.token)) 
            dispatch(addId(respUserLogin.id.toString()))    // Faz uma conversão de Number para String
            history.push('/home')
        }
    }, [respUserLogin.token])

    async function cadastrar(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            await login(`/usuarios/logar`, userLogin, setRespUserLogin)
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
                   <Link to="/" className='p15'>                
                      <img src={CompassWest} width="50px" alt="" />
                   </Link>
                <Grid container direction="row" justifyContent="center" alignItems="center" className='body1'>
                    <Grid item xs={5} alignItems="center">
                        <Box paddingY={13} paddingX={10} className="form1" >

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
                                    style={{ backgroundColor: "#BACFDB" }}
                                    fullWidth />

                                <TextField value={userLogin.senha}
                                    onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                                    id='senha'
                                    label='senha'
                                    variant='outlined'
                                    name='senha'
                                    margin='normal'
                                    type='password'
                                    style={{ backgroundColor: "#BACFDB" }}
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
                                        <Typography variant='subtitle1' gutterBottom align='center' className='textos1'>Cadastre-se</Typography>
                                    </Link>

                                </Box>

                            
                            </form>
                        </Box>
                    </Grid>

                </Grid>
            </Box>
        </>
    );
}

export default Login; //exportando o componente