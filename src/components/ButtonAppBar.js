import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import { Box, List, ListItem } from '@mui/material';
import ListItemIcon from '@mui/material/ListItemIcon';
import LooksOneIcon from '@mui/icons-material/LooksOne';
import LooksTwoIcon from '@mui/icons-material/LooksTwo';
import Looks3Icon from '@mui/icons-material/Looks3';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import Popup from 'reactjs-popup'
import { useNavigate } from "react-router-dom";

import '../styles/ButtonAppBar.css'

export default function ButtonAppBar() {

    const navigate = useNavigate();

    const Modal = () => (
        <Popup trigger={<button className="button"> Open Modal </button>} modal>
            <span> Modal content </span>
        </Popup>
    );

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
                    <IconButton
                        size="large"
                        edge="center"
                        color="inherit"
                        aria-label="menu"
                        sx={{ color: '#000000' }}
                    >
                        <HomeOutlinedIcon />
                    </IconButton>
                    <Button><Popup
                        trigger=
                        {<button className="infoButton" style={{ border: 'none' }}>
                            <IconButton
                                size="large"
                                edge="center"
                                color="inherit"
                                aria-label="menu"
                                sx={{ color: '#000000' }}
                            >
                                <InfoOutlinedIcon />
                            </IconButton>
                        </button>}
                        modal
                        nested
                    >
                        {close => (
                            <div className="modal">
                                <button className="close" onClick={close}>
                                    &times;
                                </button>
                                <div className="infoContent">
                                    {' '}
                                    <Typography>
                                        <List sx={{ color: 'Black', wordWrap: 'break-word' }}>
                                            <ListItem>
                                                <ListItemIcon sx={{ color: 'rgba(0, 0, 0, 1)' }}>
                                                    <LooksOneIcon sx={{ color: 'orange' }} /> Kontrollera att dina uppgifter stämmer.
                                                </ListItemIcon>
                                            </ListItem>
                                            <ListItem>
                                                <ListItemIcon sx={{ color: 'rgba(0, 0, 0, 1)' }}>
                                                    <LooksTwoIcon sx={{ color: 'orange' }} />  Kontrollera storlek i klädpaketen och klicka på VÄLJ för att komma vidare.
                                                </ListItemIcon>
                                            </ListItem>
                                            <ListItem>
                                                <ListItemIcon sx={{ color: 'rgba(0, 0, 0, 1)' }}>
                                                    <Looks3Icon sx={{ color: 'orange' }} /> Läs igenom reglerna för tjänsten och kryssa i rutan att du har förstått. Sedan klicka på BEKRÄFTA.
                                                </ListItemIcon>
                                            </ListItem>
                                        </List>
                                    </Typography>
                                </div>
                            </div>
                        )}
                    </Popup>
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}