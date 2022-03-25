import React from 'react';
import "./Contato.css";
import { Grid, Box, Typography, TextField, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

function contato() {
    return (
        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid alignItems='center' xs={6}>
                <Box paddingX={20}>
                    <form>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='textos1'>Fale conosco</Typography>
                        <TextField id='nome' label='Nome' variant='outlined' name='nome' margin='normal' fullWidth />
                        <TextField id='email' label='E-mail' variant='outlined' name='email' margin='normal' fullWidth />
                        <TextField id='assunto' label='Assunto' variant='outlined' name='assunto' margin='normal' fullWidth />
                        <TextField id='mensagem' label='Mensagem' variant='outlined' name='mensagem' margin='normal' multiline rows={5} fullWidth />
                                           
                                               
                        <Box marginTop={2} textAlign='center'>
                            <Link to='/home' className='text-decorator-none'>
                                <Button type='submit' variant='contained' color='primary'>
                                    Enviar
                                </Button>
                            </Link>
                        </Box>
                    </form>
                </Box>
            </Grid>

        </Grid>
    );

}



export default contato;