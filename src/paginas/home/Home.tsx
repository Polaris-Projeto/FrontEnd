import React, { useEffect } from 'react';
import { Typography, Box, Grid, Fab } from '@material-ui/core';
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';
import './Home.css';
import { Link, useHistory } from 'react-router-dom';
import TabPostagem from '../../components/postagens/tabPostagem/TabPostagem';
import { useSelector } from 'react-redux';
import { TokenState } from '../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';
import image23 from "../../assets/img/image23.png";

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
            <Grid xs={12} container direction="row" justifyContent="center" alignItems="center" className='caixa body3'>
                <Grid xs={12}  alignItems="center"  >
                    <Box className='back'>
                        <Box paddingX={20} >
                            <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className='titulo'>Bem vinde ao Polaris!</Typography>
                            <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className='titulo'>Sua rede de busca em mentorias e voluntariados</Typography>
                        </Box>
                        <Box display="flex" justifyContent="center">
                            <Box marginRight={1}>
                                <ModalPostagem />
                            </Box>
                            <Link to="/posts" className='botao' >
                                <Fab variant="extended" className='botao'>Ver Postagens</Fab>
                            </Link>
                        </Box>

                    </Box>
                </Grid>

            </Grid>


            <Grid xs={12} className='postagens'>
                <TabPostagem />
            </Grid>
        </>

    );
}
export default Home;