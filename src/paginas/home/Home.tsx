import React, { useEffect } from 'react';
import { Typography, Box, Grid, Fab } from '@material-ui/core';
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';
import './Home.css';
import { Link, useHistory } from 'react-router-dom';
import TabPostagem from '../../components/postagens/tabPostagem/TabPostagem';
import { useSelector } from 'react-redux';
import { UserState } from '../../store/user/userReducer';
import { toast } from 'react-toastify';
import image23 from "../../assets/img/image23.png";
import { TokenState } from '../../store/tokens/tokensReducer';
import Avatar from '@material-ui/core/Avatar';



function Home() {

    let history = useHistory();
    const token = useSelector<UserState, UserState["tokens"]>(
        (state) => state.tokens
    );

    useEffect(() => {
        if (token === "") {
          toast.error('Você precisa estar logado', {
              position: "top-right",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: false,
              theme: "colored",
              progress: undefined,
          });
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
                <Grid item xs={6} >
                  
                </Grid>
                <Grid xs={12} className='postagens'>

                    <TabPostagem />
                </Grid>
            </Grid>


        </>

    );
}
export default Home;