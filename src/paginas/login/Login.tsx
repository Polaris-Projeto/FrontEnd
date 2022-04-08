import React, { ChangeEvent, useState, useEffect } from 'react';
import { Grid, Box, Typography, TextField, Button, CardMedia } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import UserLogin from '../../models/UserLogin';
import { login } from '../../services/Service';
import "./Login.css";
import { useDispatch } from 'react-redux';
import { addToken } from '../../store/tokens/actions';
import { toast } from 'react-toastify';
import ENTRAR from "../../assets/img/ENTRAR.png"

function Login() {

    let history = useHistory();
    const dispatch = useDispatch();
    const [token, setToken] =useState('');
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

    async function cadastrar(e: ChangeEvent<HTMLFormElement>){
        e.preventDefault();
        try{
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
        }catch(error){
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
        <Grid container direction='row' justifyContent='center' alignItems='center' className="body1">
           
            <Grid item alignItems='center' xs={6}   >

               <Grid  className="form1">
                <Box padding={20}   >
                    <form onSubmit={cadastrar}>
                        <Typography 
                            variant='h3' gutterBottom 
                            color='textPrimary' component='h3'
                            align='center' className='textos1 ma'>Entrar</Typography>
                        
                        <TextField
                            value={userLogin.usuario} 
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label='usuário' variant='outlined' name='usuario' margin='normal' fullWidth />
                       
                        <TextField value={userLogin.senha}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />
                            
                        <Box marginTop={2} textAlign='center'>
                            <Button type='submit' variant='contained' color='primary'>
                                Logar
                            </Button>
                        </Box>
                   
                     <Box display='flex' justifyContent='center' marginTop={2} className="ma">
                
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
            
        </Grid>
    );
}

export default Login; //exportando o componente