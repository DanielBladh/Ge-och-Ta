import ButtonAppBar from "./ButtonAppBar";

import Box from '@mui/material/Box';
import { Typography, Button, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";

const OrderApproved = () => {


    let navigate = useNavigate();

    return (
        <>
            <ButtonAppBar />
            <Container >
                <Box
                    sx={{
                        width: 300,
                        height: 300,
                        backgroundColor: 'rgba(255, 255, 255, 0.8)',
                        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px;',
                        borderRadius: '20px',
                        margin: 'auto',
                        marginTop: '20px'
                    }}>
                    <Typography variant="h5" sx={{
                        backgroundColor: '#E5FFF3',
                        textAlign: 'center',
                        fontWeight: 'bold'
                    }}>
                        Beställning godkänd!
                    </Typography>
                    <Typography variant='h6' sx={{
                        textAlign: 'center',
                        mt: '5px',
                        padding: '5px'
                    }}>
                        Du kan nu hämta ut ditt paket
                    </Typography>
                    <Typography sx={{
                        textAlign: 'center'
                    }}>
                        Hämta och lämna på: <br />
                        Granitvägen 15, 131 40 Nacka
                    </Typography>
                </Box>
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
                    marginBottom: '20px'
                }}
                    onClick={() => { navigate('/Notification') }}>
                    OK
                </Button>
            </Container>
        </>
    );
}

export default OrderApproved;