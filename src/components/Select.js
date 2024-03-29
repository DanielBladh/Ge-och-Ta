import * as React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ButtonAppBar from './ButtonAppBar';
import SelectStyles from "../styles/SelectStyles";

import '../styles/Select.css'

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ChildCareIcon from '@mui/icons-material/ChildCare';



const Select = () => {

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

    const [packages, setPackages] = useState(null);

    // Fetch package object from db.json
    const getPackages = async () => {
        const res = await fetch('http://localhost:3001/packages')
            .then((res) => res.json())
            .then((res) => res);
        setPackages(res);
    };

    useEffect(() => {
        getPackages();
    }, []);

    let navigate = useNavigate();

    // Fetch specific parent to add package choice by user.
    const packageChoice = (wholePackage) => {
        fetch('http://localhost:3001/parents/0').then((res) => {
            res.json().then((parent) => {
                parent.currentPackages.push(wholePackage)

                const config = {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(parent),
                };
                fetch('http://localhost:3001/parents/0', config).then(
                    (res) => res.json()
                );
            });
        })
    };


    return (
        <>
            <ButtonAppBar />
            <Container style={SelectStyles.selectHeader}>
                <Typography variant="h4">Våra paket</Typography>
                <Typography style={SelectStyles.selectP}> Välj mellan 3 olika storlekar nedan. <br />
                    Alla paket kommer i blandade färger.
                </Typography>
            </Container>
            <Container>

                {/* Map out all packages in accordion dropdown. Give each accordion unique ID for styling. */}
                {
                    packages !== undefined && packages !== null &&
                    packages.map((item, index) => {
                        return (
                            <Accordion key={index}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id={`panel${index + 1}a-header`}
                                >
                                    <Typography className={`option-${index + 1}`}>
                                        {item.size}
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails className={`option-${index + 1}`}>
                                    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                                        <List>
                                            {
                                                item.content.map((x, index) => {
                                                    return (
                                                        <ListItem key={index} disablePadding>
                                                            <ListItemButton>
                                                                <ChildCareIcon sx={{ pr: '5px' }} />
                                                                <ListItemText primary={x} />
                                                            </ListItemButton>
                                                        </ListItem>
                                                    )
                                                })
                                            }
                                        </List>
                                        <Button style={styles.confirmButton}
                                            onClick={() => { packageChoice(item); navigate('/Confirm') }}>
                                            VÄLJ
                                        </Button>
                                    </Box>
                                </AccordionDetails>
                            </Accordion>
                        )
                    })
                }
                <button onClick={() => { navigate('/Confirm') }}>nästa(för att inte spara paket till användare)</button>
            </Container>
        </>
    );
}

export default Select;