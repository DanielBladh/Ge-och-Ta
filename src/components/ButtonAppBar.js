import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import { Box, List, ListItem } from '@mui/material';
import ListItemIcon from '@mui/material/ListItemIcon';
import LooksOneIcon from '@mui/icons-material/LooksOne';
import LooksTwoIcon from '@mui/icons-material/LooksTwo';
import Looks3Icon from '@mui/icons-material/Looks3';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import Popup from 'reactjs-popup'
import { useNavigate } from "react-router-dom";
import { Container } from "@mui/system";


import '../styles/ButtonAppBar.css'

export default function ButtonAppBar() {

    const navigate = useNavigate();

    return (
        <Box sx={{ flexGrow: 1, }}>
            <AppBar position="static">
                <Toolbar sx={{ backgroundColor: '#f9c594', justifyContent: 'space-between' }}>
                    <IconButton onClick={() => navigate(-1)}
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2, color: '#000000' }}
                    >
                        <ArrowBackIcon />
                    </IconButton>
                    <IconButton onClick={() => { navigate('/Welcome') }}
                        size="large"
                        color="inherit"
                        aria-label="menu"
                        sx={{ color: '#000000' }}
                    >
                        <HomeOutlinedIcon />
                    </IconButton>
                    <Popup trigger={
                        <IconButton
                            size="large"
                            color="inherit"
                            aria-label="menu"
                            sx={{ color: '#000000' }}
                        >
                            <InfoOutlinedIcon />
                        </IconButton>
                    }
                        modal
                        nested
                    >
                        {close => (
                            <Container className="modal">
                                <Button className="close" onClick={close}>
                                    &times;
                                </Button>
                                <Container className="infoContent">
                                    {' '}
                                    <List sx={{ color: 'Black' }}>
                                        <ListItem>
                                            <ListItemIcon sx={{ color: 'rgba(0, 0, 0, 1)' }}>
                                                <LooksOneIcon sx={{ color: 'orange' }} />
                                            </ListItemIcon>
                                            Kontrollera att dina uppgifter stämmer.
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon sx={{ color: 'rgba(0, 0, 0, 1)' }}>
                                                <LooksTwoIcon sx={{ color: 'orange' }} />
                                            </ListItemIcon>
                                            Kontrollera storlek i klädpaketen och klicka på VÄLJ för att komma vidare.
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon sx={{ color: 'rgba(0, 0, 0, 1)' }}>
                                                <Looks3Icon sx={{ color: 'orange' }} />
                                            </ListItemIcon>
                                            Läs igenom reglerna för tjänsten och kryssa i rutan att du har förstått. Sedan klicka på BEKRÄFTA.
                                        </ListItem>
                                    </List>
                                </Container>
                            </Container>
                        )}
                    </Popup>
                </Toolbar>
            </AppBar>
        </Box>
    );
}