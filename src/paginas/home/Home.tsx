import React, { useEffect } from 'react';
import { Typography, Box, Grid, Fab } from '@material-ui/core';
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';
import './Home.css';
import { Link, useHistory } from 'react-router-dom';
import TabPostagem from '../../components/postagens/tabPostagem/TabPostagem';
import { useSelector } from 'react-redux';
import { TokenState } from '../../store/tokens/tokensReducer';
import Avatar from '@material-ui/core/Avatar';


function Home() {

    let history = useHistory();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    useEffect(() => {
        if (token == "") {
            history.push("/login")
        }
    }, [token])
    return (
        <>
            <Grid xs={12} container direction="row" className='caixaPrincipal'>
                <Grid item xs={3} className='usuario' alignItems="center">
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                            <ModalPostagem />
                        </Box>
                        <Link to="/posts" className='botao' >
                            <Fab variant="extended" className='botao'>Ver Postagens</Fab>
                        </Link>
                    </Box>
                </Grid>
                <Grid item xs={8}>
                    <TabPostagem />
                </Grid>
            </Grid>


        </>

    );
}
export default Home;