import { AppBar, Box, Button, Container, Fab, Grid, Toolbar, Typography } from '@material-ui/core';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import React from 'react';
import { Link } from 'react-router-dom';
import './Sobre.css';
import icone from "../../assets/img/icone.png";
import bussola2 from "../../assets/img/bussola2.jpg";
import ursoBussola from "../../assets/img/ursoBussola.png";



function Sobre() {
    return (
        <>
            <Grid xs={12}>
                <AppBar position="static">
                    <Toolbar variant="dense" className="barra navbar">
                        <Grid xs={4}>
                            <img src={icone} alt="ícone de uma bússola" className='iconeBussola' />
                        </Grid>
                        <Grid xs={4}>
                        </Grid>
                        <Grid xs={4}>
                        </Grid>
                        <Grid xs={3}>
                            <Box>
                                <Link to="/login" className="botao ">
                                    <Fab size="small" variant="extended" className='botao1'>
                                        Entrar
                                    </Fab>
                                </Link>
                                <Link to="/cadastrousuario" className="botao" >
                                    <Fab size="small" variant="extended" className='botao2'>
                                        Cadastrar
                                    </Fab>
                                </Link>
                            </Box>
                        </Grid>
                    </Toolbar>
                </AppBar>
            </Grid>

            <Grid container xs={12} className='fundoUrso'>
                <Box className="img1">
                    <img src={bussola2} className="foto" />
                </Box>

                <Box className='caixa-sobre'>
                    <img src={ursoBussola} alt="Urso" className="urso" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed voluptatum, similique aperiam doloribus ipsum quia ad laborum dolorum debitis dolor odit suscipit, tempore reiciendis nulla sit dolorem unde ex facilis.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos dignissimos quaerat doloribus sequi rem asperiores cumque, possimus molestias veritatis tempora, saepe eius velit. Quasi natus molestiae cum quae, hic porro.Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed voluptatum, similique aperiam doloribus ipsum quia ad laborum dolorum debitis dolor odit suscipit, tempore reiciendis nulla sit dolorem unde ex facilis.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos dignissimos quaerat doloribus sequi rem asperiores cumque, possimus molestias veritatis tempora, saepe eius velit. Quasi natus molestiae cum quae, hic porro.</p>
                </Box>
            </Grid>
            <h1 className='tituloDevs'>Devs Polaris</h1>
            <Grid container xs={12} direction='row' spacing={2} justifyContent='center'>
                <Grid container item xs={4} >
                    <Box className='dev'>
                        <Box >
                            <img src='https://avatars.githubusercontent.com/u/97997973?v=4' alt="foto" className="fotoDev" />
                            <a href="https://github.com/carolin4x" target="_blank">
                                <GitHubIcon className='icones' />
                            </a>
                            <a href="https://www.linkedin.com/in/carolinx/" target="_blank">
                                <LinkedInIcon className='icones' />
                            </a>
                            <p><h3 className='nome'>Carolina Lopes</h3>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt doloremque fuga dolorum molestiae nam beatae, enim unde quasi earum cum quo iste quae quisquam voluptates. Quis ipsum molestiae voluptate neque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, consequatur? Ex sapiente consequuntur eum alias nesciunt quis, aliquam qui ratione quas nemo velit vel? Voluptate dolore earum rerum explicabo beatae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore consequatur repellendus dignissimos itaque omnis? Culpa, ut cum delectus doloremque deleniti quos consectetur consequatur aspernatur, aliquid dicta rerum quia mollitia eius!</p>
                        </Box>
                    </Box>
                </Grid>
                <Grid container item xs={4} direction='row'>
                    <Box className='dev'>
                        <Box >
                            <img src="https://avatars.githubusercontent.com/u/79872571?v=4" alt="foto" className="fotoDev" />
                            <a href="https://github.com/Rodrigo1215" target="_blank">
                                <GitHubIcon className='icones' />
                            </a>
                            <a href="https://www.linkedin.com/in/rodrigo-alexandre-2203241b9/" target="_blank">
                                <LinkedInIcon className='icones' />
                            </a>
                            <p><h3 className='nome'>Rodrigo Pereira </h3>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt doloremque fuga dolorum molestiae nam beatae, enim unde quasi earum cum quo iste quae quisquam voluptates. Quis ipsum molestiae voluptate neque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, consequatur? Ex sapiente consequuntur eum alias nesciunt quis, aliquam qui ratione quas nemo velit vel? Voluptate dolore earum rerum explicabo beatae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore consequatur repellendus dignissimos itaque omnis? Culpa, ut cum delectus doloremque deleniti quos consectetur consequatur aspernatur, aliquid dicta rerum quia mollitia eius!</p>
                        </Box>
                    </Box>
                </Grid>
                <Grid container item xs={4} direction='row'>
                    <Box className='dev'>
                        <Box>
                            <img src='https://avatars.githubusercontent.com/u/58313000?v=4' alt="foto" className="fotoDev" />
                            <a href="https://github.com/Leonardo0908" target="_blank">
                                <GitHubIcon className='icones' />
                            </a>
                            <a href="https://www.linkedin.com/in/leosouzarodrigues/" target="_blank">
                                <LinkedInIcon className='icones' />
                            </a>
                            <p><h3 className='nome'>Leonardo</h3>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt doloremque fuga dolorum molestiae nam beatae, enim unde quasi earum cum quo iste quae quisquam voluptates. Quis ipsum molestiae voluptate neque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, consequatur? Ex sapiente consequuntur eum alias nesciunt quis, aliquam qui ratione quas nemo velit vel? Voluptate dolore earum rerum explicabo beatae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore consequatur repellendus dignissimos itaque omnis? Culpa, ut cum delectus doloremque deleniti quos consectetur consequatur aspernatur, aliquid dicta rerum quia mollitia eius!</p>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
            <Grid container xs={12} direction='row' spacing={2} justifyContent='center'>
                <Grid container item xs={4} >
                    <Box className='dev'>
                        <Box >
                            <img src="https://avatars.githubusercontent.com/u/92065269?v=4" alt="foto" className="fotoDev" />
                            <a href="https://github.com/LucasVieira1" target="_blank">
                                <GitHubIcon className='icones' />
                            </a>
                            <a href="https://www.linkedin.com/in/luucas-vieira/" target="_blank">
                                <LinkedInIcon className='icones' />
                            </a>
                            <p><h3 className='nome'>Lucas Vieira</h3>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt doloremque fuga dolorum molestiae nam beatae, enim unde quasi earum cum quo iste quae quisquam voluptates. Quis ipsum molestiae voluptate neque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, consequatur? Ex sapiente consequuntur eum alias nesciunt quis, aliquam qui ratione quas nemo velit vel? Voluptate dolore earum rerum explicabo beatae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore consequatur repellendus dignissimos itaque omnis? Culpa, ut cum delectus doloremque deleniti quos consectetur consequatur aspernatur, aliquid dicta rerum quia mollitia eius!</p>
                        </Box>
                    </Box>
                </Grid>
                <Grid container item xs={4} direction='row'>
                    <Box className='dev'>
                        <Box >
                            <img src='https://media-exp1.licdn.com/dms/image/C4D03AQH0OelTx_jkCw/profile-displayphoto-shrink_800_800/0/1642737132643?e=1654732800&v=beta&t=lGKj-ckkmaAOBNWphAZi5y89tSmGYT2VVPfjShU8ZBQ' alt="foto" className="fotoDev" />
                            <a href="https://github.com/Leonardo0908" target="_blank">
                                <GitHubIcon className='icones' />
                            </a>
                            <a href="https://www.linkedin.com/in/leosouzarodrigues/" target="_blank">
                                <LinkedInIcon className='icones' />
                            </a>
                            <p><h3 className='nome'>Paulo Ricardo</h3>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt doloremque fuga dolorum molestiae nam beatae, enim unde quasi earum cum quo iste quae quisquam voluptates. Quis ipsum molestiae voluptate neque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, consequatur? Ex sapiente consequuntur eum alias nesciunt quis, aliquam qui ratione quas nemo velit vel? Voluptate dolore earum rerum explicabo beatae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore consequatur repellendus dignissimos itaque omnis? Culpa, ut cum delectus doloremque deleniti quos consectetur consequatur aspernatur, aliquid dicta rerum quia mollitia eius!</p>
                        </Box>
                    </Box>
                </Grid>
                <Grid container item xs={4} direction='row'>
                    <Box className='dev'>
                        <Box>
                            <img src="https://media-exp1.licdn.com/dms/image/D4D03AQEg6DZIetk-LQ/profile-displayphoto-shrink_800_800/0/1648220776079?e=1654732800&v=beta&t=oLr17l1srn28sMoZCIqErTwlWj-9gyAoVdghabxULIA" alt="foto" className="fotoDev" />
                            <a href="" >
                                <GitHubIcon className='icones' />
                            </a>
                            <a href="">
                                <LinkedInIcon className='icones' />
                            </a>
                            <p><h3 className='nome'>Ana Caroline</h3>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt doloremque fuga dolorum molestiae nam beatae, enim unde quasi earum cum quo iste quae quisquam voluptates. Quis ipsum molestiae voluptate neque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, consequatur? Ex sapiente consequuntur eum alias nesciunt quis, aliquam qui ratione quas nemo velit vel? Voluptate dolore earum rerum explicabo beatae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore consequatur repellendus dignissimos itaque omnis? Culpa, ut cum delectus doloremque deleniti quos consectetur consequatur aspernatur, aliquid dicta rerum quia mollitia eius!</p>
                        </Box>
                    </Box>
                </Grid>
            </Grid>

        </>
    );
}

export default Sobre;