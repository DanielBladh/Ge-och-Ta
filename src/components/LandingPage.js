import { Typography, Button, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ButtonAppBar from './ButtonAppBar';

import "../styles/Landingpage.css";

const Landingpage = () => {

    let navigate = useNavigate();

    return (
        <>
            <ButtonAppBar />
            <Container sx={{ height: '100%' }}>
                <Typography variant="h2" sx={{ textAlign: 'center', color: '#E87272' }}>
                    Ge & Ta
                </Typography>
                <Button sx={{
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
                }}
                    onClick={() => { navigate('/Login') }}>
                    Logga in
                </Button>
            </Container>
        </>
    );
}

export default Landingpage;