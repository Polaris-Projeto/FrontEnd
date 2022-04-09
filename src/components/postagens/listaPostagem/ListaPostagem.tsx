import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Postagem from '../../../models/Postagem';
import { busca } from '../../../services/Service'
import { Box, Card, CardActions, CardContent, Button, Typography, Grid } from '@material-ui/core';
import './ListaPostagem.css';
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';
import Fab from '@mui/material/Fab';

function ListaPostagem() {
  let history = useHistory();
  const [posts, setPosts] = useState<Postagem[]>([])
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  useEffect(() => {
    if (token == "") {
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

  async function getPost() {
    await busca("/postagens/all", setPosts, {
      headers: {
        'Authorization': token
      }
    })
  }

  useEffect(() => {

    getPost()

  }, [posts.length])

  return (
    <>
      {
        posts.map(post => (
            <Box m={2}  >
              <Card variant="outlined" >
                <CardContent>
                  <Typography color="textSecondary" className='lista' gutterBottom >
                    POSTAGENS
                  </Typography>
                  <Typography variant="h5" component="h2">
                    {post.titulo}
                  </Typography>
                  <Typography variant="body2" component="p">
                    {post.texto}
                  </Typography>
                  <Typography variant="body2" component="p">
                    {post.tema?.descricao}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Box display="flex" justifyContent="center" mb={1.5} >

                    <Link to={`/formularioPostagem/${post.id}`} className="text-decorator-none" >

                      <Box mx={1}>
                        <Fab type="submit" size="large" variant="extended" className="marginLeft atualizar">
                          atualizar
                        </Fab>
                      </Box>
                    </Link>
                    <Link to={`/deletarPostagem/${post.id}`} className="text-decorator-none">

                      <Box mx={1}>
                        <Fab type="submit" size="large" variant="extended" className='deletar'>
                          deletar
                        </Fab>
                      </Box>
                    </Link>
                  </Box>
                </CardActions>
              </Card>
            </Box>

        ))
      }
    </>
  )
}

export default ListaPostagem;