import React, { useState, useEffect, ChangeEvent } from 'react';
import { Grid, Box, Typography, Button, TextField, AppBar, Toolbar } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import User from '../../models/User';
import { cadastroUsuario } from '../../services/Service';
import './CadastroUsuario.css';
import { toast } from 'react-toastify';
import CADASTRAR2 from "../../assets/img/CADASTRAR.png"
import Compass from "../../assets/img/Compass.png"

function CadastroUsuario() {

    let history = useHistory();
    const [confirmarSenha, setConfirmarSenha] = useState<String>("")
    const [user, setUser] = useState<User>(
        {
            id: 0,
            nome: "",
            usuario: "",
            senha: "",
            foto: ""
        })

    const [userResult, setUserResult] = useState<User>(
        {
            id: 0,
            nome: "",
            usuario: "",
            senha: "",
            foto: ""
        })

    useEffect(() => {
        if (userResult.id != 0) {
            history.push("/login")
        }
    }, [userResult])


    function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
        setConfirmarSenha(e.target.value)
    }


    function updatedModel(e: ChangeEvent<HTMLInputElement>) {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    async function cadastrar(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        if (confirmarSenha == user.senha) {
            await cadastroUsuario(`/usuarios/cadastrar`, user, setUserResult)
            toast.success('Usuario cadastrado com sucesso', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
        } else {
            toast.error('Dados inconsistentes. Favor verificar as informações de cadastro.', {
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
            
            <Box className='box' >
                <Grid container direction="row" justifyContent="center" alignItems="center" className='imagemCadastro'>
                    <Grid item xs={5} alignItems="center">
                        <Box paddingX={10} className="form" >

                            <form onSubmit={cadastrar}  >
                                <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center"
                                    className="textosCadastro">Cadastrar</Typography>

                                <TextField

                                    value={user.nome}
                                    onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                                    id="nome"
                                    label="nome"
                                    variant="outlined"
                                    name="nome"
                                    margin="normal"
                                    fullWidth required
                                    style={{
                                        backgroundColor: "#dee5e9"
                                    }}
                                />

                                <TextField
                                    value={user.usuario}
                                    onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                                    type='email'
                                    id="usuario"
                                    label="usuario"
                                    variant="outlined"
                                    name="usuario"
                                    margin="normal"
                                    fullWidth required
                                    style={{
                                        backgroundColor: "#dee5e9"
                                    }}
                                />

                                <TextField
                                    value={user.senha}
                                    onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                                    id="senha"
                                    label="senha"
                                    variant="outlined"
                                    name="senha"
                                    margin="normal"
                                    type="password"
                                    fullWidth required
                                    style={{
                                        backgroundColor: "#dee5e9"
                                    }}
                                />

                                <TextField
                                    value={confirmarSenha}
                                    onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)}
                                    id="confirmarSenha"
                                    label="confirmarSenha"
                                    variant="outlined"
                                    name="confirmarSenha"
                                    margin="normal"
                                    type="password"
                                    fullWidth required
                                    style={{
                                        backgroundColor: "#dee5e9"
                                    }}
                                />

                                <TextField
                                    value={user.foto}
                                    onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                                    id="foto"
                                    label="foto"
                                    variant="outlined"
                                    name="foto"
                                    margin="normal"
                                    fullWidth
                                    style={{
                                        backgroundColor: "#dee5e9"
                                    }}
                                />

                                <Box marginTop={2} textAlign="center" className='mge'>
                                    <Button type="submit" variant="contained" color="primary" className="botaoCadastrar">
                                        Cadastrar
                                    </Button>
                                </Box>
                                <Box display='flex' justifyContent='center' marginTop={2} className='mge'>
                                    <Box marginRight={1}>
                                        <Typography variant='subtitle1' gutterBottom align='center' >Já tem uma conta?</Typography>
                                    </Box>
                                    <Link to="/login">
                                        <Typography variant='subtitle1' gutterBottom align='center' className='textos1'>Faça login</Typography>
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

export default CadastroUsuario;