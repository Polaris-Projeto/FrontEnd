import { AppBar, Box, Button, Container, Fab, Grid, Toolbar, Typography } from '@material-ui/core';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import React from 'react';
import { Link } from 'react-router-dom';
import './Sobre.css';
import icone from "../../assets/img/icone.png";
import bussola1 from "../../assets/img/bussola1.jpg";
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
                        <Grid xs={5}>
                        </Grid>
                        <Grid xs={8}>
                        </Grid>
                        <Grid xs={2}>
                            <Link to="/login" className="botao ">
                                <Fab size="small" variant="extended" className='botao1'>
                                    Entrar
                                </Fab>
                            </Link>
                        </Grid>
                        <Grid xs={3}>
                            <Link to="/cadastrousuario" className="botao" >
                                <Fab size="small" variant="extended" className='botao2'>
                                    Cadastrar
                                </Fab>
                            </Link>

                        </Grid>
                    </Toolbar>
                </AppBar>
            </Grid>
            <Grid container xs={12} className='fundoUrso'>
                
                <Box className="img1">
                    
                    <img src={bussola1} className="foto" />
                </Box>

                <Box className='caixa-sobre'>
                    <img src={ursoBussola} alt="Urso" className="urso" />
                    <p className='font'>  Polaris é um projeto desenvolvido no bootcamp da generation Brasil, temos como iniciativa pensar na ODS 4 da ONU: Educação de qualidade.
                        Se baseia em uma rede social, onde é possível conectar voluntários que queiram ensinar à pessoas que precisem de uma mentoria.</p>
                </Box>
            </Grid>
            <Box className='p20'>
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
                                <p><h3 className='nome'>Carolina Lopes</h3>Sou Carolina Lopes, uma pesquisadora apaixonada e curiosa.
                                    Atualmente sou Desenvolvedora Web Java pela Generation Brasil e Biomédica pela Universidade Anhembi Morumbi. A vivência e experiência no ambiente hospitalar me fez ter um olhar mais direcionado aos problemas e pensar nas suas resoluções, o que foi o pontapé da transição de carreira pra me aventurar na tecnologia e me apaixonar pelo mundo dev.</p>
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
                                <p><h3 className='nome'>Rodrigo Pereira </h3>Olá meu nome e Rodrigo Pereira Alexandre, tenho 20 anos e moro na zona leste de São Paulo. Desde pequeno sempre fui muito apaixonado por computação, com o tempo minha paixão foi mudando do hardware para o software, me encantei com o mundo do desenvolvimento, atualmente estou no 4° Semestre da faculdade e acabo de me formar no bootcamp da Generation Brasil como Desenvolvedor Fullstack Java, me sinto 100% preparado pro mercado de trabalho, só basta uma oportunidade para eu mostrar minhas habilidades.
                                </p>
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
                                <p><h3 className='nome'>Leonardo Rodrigues</h3>Tive o primeiro contato com a tecnologia por meio de jogos quando pequeno,
                                    sempre curioso e com um gostar imenso por aprender,
                                    busquei formas de me envolver ainda mais com a tecnologia e assim,
                                    encontrei a Generation, com muito estudo e
                                    dedicação, estou tornando
                                    a tecnologia minha profissão.
                                    com a prática e o estudo constante,
                                    logo chegarei na excelência. Nunca me contentando com meu nível atual.</p>
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
                                <p><h3 className='nome'>Lucas Vieira</h3>Olá meu nome é Lucas Vieira, tenho 19 anos, atualmente cursando análise e desenvolvimento de sistemas de sistemas na Facens - Sorocaba, fanático por futebol e sempre conectado na  tecnologia, meu diferencial é gostar de desafios e sempre estar disposto à aprofundar meus conhecimentos, prezo e tenho facilidade de aprender novos conteúdos. Busco no futuro compartilhar minhas experiências fazendo oque eu gosto, enfrentando desafios e agregar em oportunidades.</p>
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
                                <p><h3 className='nome'>Paulo Ricardo</h3>Sou formado em engenharia. Tenho mais de 3 anos de experiência na área de desenvolvimento de produtos, principalmente lidando com testes de desempenho, desenvolvimento de software e hardware. Sou estudante de Programação e estou em transição de carreira.</p>
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
                                <p><h3 className='nome'>Ana Caroline</h3>Olá! Sou a Carol, tenho 18 anos e sou apaixonada por tecnologia e desenvolvimento.
                                    Desde cedo esses dois temas me acompanham, e como sabemos, andam lado a lado. Minha trajetória começou quando eu era muito nova, ganhei meu primeiro notebook e me interessei pelos jogos. Apesar disso, minha vontade em aprender mais sobre a tecnologia continuava crescendo. Foi então na minha graduação que conheci a Generation Brasil e iniciei uma nova fase da minha vida lá dentro.</p>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>

        </>
    );
}

export default Sobre;