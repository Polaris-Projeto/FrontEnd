import React from "react";
import GitHubIcon from '@material-ui/icons/GitHub';
import { Typography, Box, Grid } from '@material-ui/core';
import { TokenState } from "../../../store/tokens/tokensReducer";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";


function Footer() {
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    let history = useHistory();
    const dispatch = useDispatch();
  
    var footerComponent;
    if (token != "") {
        footerComponent = <Grid container direction="row" justifyContent="center" alignItems="center">
        <Grid alignItems="center" item xs={12}>
            <Box style={{ backgroundColor: '#901651', height: "120px" }}>
                <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                    <Typography variant="h6" align="center" gutterBottom style={{ color: "white" }}>Conheça a POLARIS no GitHub </Typography>
                </Box>
                <Box display="flex" alignItems="center" justifyContent="center">
                    <a href="https://github.com/Polaris-Projeto" target="_blank">
                        <GitHubIcon style={{ fontSize: 60, color: "white" }} />
                    </a>
                    
                </Box>
            </Box>
            <Box style={{ backgroundColor: '#901651', height: "60px" }}>
                <Box paddingTop={1}>
                    <Typography variant="subtitle2" align="center" gutterBottom style={{ color: "white" }} >© 2022 Copyright POLARIS | GENERATION BRASIL</Typography>
                </Box>

                <Box>
                    
                    <Typography variant="subtitle2" gutterBottom style={{ color: "white" }} align="center">Nos escreva em: projeto.polaris6@gmail.com</Typography>
                   
                </Box>
            </Box>
        </Grid>
    </Grid>
   
    }

    return (
        
        <>
          {footerComponent}
        </>
    )
}

export default Footer;