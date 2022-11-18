import { Typography, Button, Container, Input } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ButtonAppBar from './ButtonAppBar';

import "../styles/Landingpage.css";

const Landingpage = () => {

    const styles = {
        confirmButton: {
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
        }
    }

    let navigate = useNavigate();

    return (
        <>
            <ButtonAppBar />
            <Container sx={{ height: '100%' }}>
                <Typography variant="h2" sx={{ textAlign: 'center', color: '#E87272', marginTop: '50%', fontFamily: 'Be Vietnam Pro' }}>
                    Ge & Ta
                </Typography>
                <Container sx={{ textAlign: 'center', padding: '50px' }}>
                    <Typography sx={{ fontFamily: 'Be Vietnam Pro', fontWeight: 'bold' }}>
                        Ange ditt personnummer
                    </Typography>
                    <Input placeholder="19****** - ****"></Input>
                </Container>
                <Button style={styles.confirmButton}
                    onClick={() => { navigate('/Login') }}>
                    Logga in
                </Button>
            </Container>
        </>
    );
}

export default Landingpage;