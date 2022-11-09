import ButtonAppBar from "./ButtonAppBar";
import Box from '@mui/material/Box';
import { Typography, Avatar } from "@mui/material";
import * as React from "react";

import sweaterrecycle from '../assets/sweaterrecycle.png'
import nackalogo from '../assets/nackalogo.webp'

const Notification = () => {

    setTimeout(function () {
        window.location.href = "http://localhost:3000/Welcome"
    }, 10000)

    const [counter, setCounter] = React.useState(10);


    React.useEffect(() => {
        const timer =
            counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
        return () => clearInterval(timer);
    }, [counter]);


    return (
        <>
            <ButtonAppBar />
            <Box
                sx={{
                    width: 315,
                    height: 170,
                    backgroundColor: 'rgba(255, 252, 249, 0.8)',
                    boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px;',
                    borderRadius: '20px',
                    margin: 'auto',
                    marginTop: '50px'
                }}>
                <Typography variant="h5" sx={{ textAlign: 'center', fontWeight: 'bold' }}>
                    Ditt paket har registrerats
                </Typography>
                <Typography sx={{ textAlign: 'center', marginTop: '10px' }}>
                    Tack för att du är med och bidrar till en bättre miljö i våran kommun. <br /> <br />
                </Typography>
                <Typography sx={{ textAlign: 'center', fontWeight: 'bold' }}>
                    Du skickas nu tillbaka till startsidan. <br />  {counter}
                </Typography>
            </Box>
            <Avatar
                variant='rounded'
                alt='Sweater recycle'
                src={sweaterrecycle}
                sx={{
                    width: '150px', height: '156px', margin: 'auto', marginTop: '15px', opacity: '0.8'
                }}
            />
            {/* <Avatar
                variant="square"
                alt='Nacka logo'
                src={nackalogo}
                sx={{
                    width: '300px', height: '300px', margin: 'auto', marginTop: '15px',
                }}
            /> */}
        </>
    );
}

export default Notification;