import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import packagerecycle from '../assets/paketrecycle.png'

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import LooksOneIcon from '@mui/icons-material/LooksOne';
import LooksTwoIcon from '@mui/icons-material/LooksTwo';
import Looks3Icon from '@mui/icons-material/Looks3';
import Looks4Icon from '@mui/icons-material/Looks4';

import '../styles/Confirm.css'
import { Typography, Container, Box, Button, Avatar, IconButton } from '@mui/material';
import ButtonAppBar from './ButtonAppBar';

const Confirm = () => {

    const [check, setCheck] = useState([]);
    const handleChange = () => {
        setCheck(!check);
    };

    const [show, setShow] = useState(false);

    let navigate = useNavigate();

    return (
        <>
            <ButtonAppBar />
            <Container>
                <Box
                    sx={{
                        width: '90%',
                        textAlign: 'center',
                        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px;',
                        backgroundColor: 'rgba(255, 236, 219, 0.7)',
                        margin: 'auto',
                        marginTop: '20px'
                    }}>
                    <Typography variant="h5" sx={{ fontWeight: 'bold', fontFamily: 'Be Vietnam Pro' }}>Så här går du tillväga</Typography>
                    <List>
                        <ListItem>
                            <ListItemIcon>
                                <IconButton>
                                    <LooksOneIcon fontSize='large' sx={{ color: 'black' }} />
                                </IconButton>
                            </ListItemIcon>
                            <ListItemText>
                                Lägg kläderna i samma kartong som de kom i.
                            </ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <IconButton>
                                    <LooksTwoIcon fontSize='large' sx={{ color: 'black' }} />
                                </IconButton>
                            </ListItemIcon>
                            <ListItemText>
                                Ta med kartongen till Nacka Kommun.
                            </ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <IconButton>
                                    <Looks3Icon fontSize='large' sx={{ color: 'black' }} />
                                </IconButton>
                            </ListItemIcon>
                            <ListItemText>
                                Vid inlämning av ditt paket sker utlämning av nytt paket.
                            </ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <IconButton>
                                    <Looks4Icon fontSize='large' sx={{ color: 'black' }} />
                                </IconButton>
                            </ListItemIcon>
                            <ListItemText>
                                Du får en notis i appen när du har lämnat och hämtat upp ditt nya paket.
                            </ListItemText>
                        </ListItem>
                    </List>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox color='success' onChange={handleChange} onClick={() => setShow(!show)}
                            sx={{ m: 'auto' }} />}
                            label="Jag har läst och förstått instruktionerna." />
                    </FormGroup>
                </Box>
                <div>
                    <Avatar
                        variant='rounded'
                        alt='Package recycle'
                        src={packagerecycle}
                        sx={{ width: '350px', height: '250px', opacity: '0.8', margin: 'auto', padding: '20px' }}
                    />
                </div>
                <div>
                    {
                        show && <Button sx={{
                            backgroundColor: '#F3A358',
                            margin: 'auto',
                            width: '90%',
                            height: '2.5rem',
                            fontWeight: 'bold',
                            color: 'white',
                            fontSize: '1rem',
                            left: '50%',
                            marginLeft: '-45%',
                            position: 'absolute',
                            bottom: 0,
                            marginBottom: '20px'
                        }}
                            onClick={() => { navigate('/OrderApproved') }}
                        >OKEJ
                        </Button>
                    }
                </div>
            </Container>
        </>
    );
}

export default Confirm;