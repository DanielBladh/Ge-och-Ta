import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import WelcomeStyles from "../styles/WelcomeStyles";

import Modal from "./Modal"
import ButtonAppBar from './ButtonAppBar';
import { Button, Typography, Container } from "@mui/material"


const Welcome = () => {

  const [parents, setParents] = useState()

  // Fetch parent object from db.json
  const getParents = async () => {
    const res = await fetch('http://localhost:3001/parents')
      .then((res) => res.json()
      );
    setParents(res);
  }

  useEffect(() => {
    getParents();
  }, []);

  // Function to navigate to next page
  let navigate = useNavigate();

  return (
    <>
      <ButtonAppBar />
      <Container style={WelcomeStyles.welcomHeader}>
        {
          parents !== undefined && parents.length > 0 &&
          <Typography variant="h3" fontFamily={'Be Vietnam Pro'}>Välkommen {parents[0].name}</Typography>
        }
      </Container>
      <Container style={WelcomeStyles.welcomeBox}>
        {
          parents !== undefined && parents.map((item, index) => {
            return (
              <div key={index}>
                <Typography variant="h6">Du har {item.children.length} barn registrerad.</Typography>
                {
                  item.children.map((child, index) => {
                    return (
                      <Typography variant="body2" className="welcome-p" key={index}>{child.name} - {child.age}</Typography>
                    )
                  })
                }
                <br />
                <Typography variant="h6">Dina aktiva klädpaket:</Typography>
                {
                  item.currentPackages.map((currentPackage, index) => {
                    return (
                      <Typography variant="body2" className="welcome-p" key={index}>{currentPackage.size}</Typography>
                    )
                  })
                }
                <br />
                <Typography variant="body2" className="welcome-p">Din registrerade adress är: <br /> {parents[0].adress} <br /> {parents[0].postnummer} {parents[0].ort}</Typography>
                <Modal />
              </div>
            )
          })
        }
      </Container>
      <Button style={WelcomeStyles.confirmButton} onClick={() => { navigate('/select') }}>
        Gå vidare
      </Button>
    </>
  );
}

export default Welcome;