import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Modal from "./Modal"
import ButtonAppBar from './ButtonAppBar';
import { Button, Typography } from "@mui/material"


const Welcome = () => {

  const [parents, setParents] = useState()

  const getParents = async () => {
    const res = await fetch('http://localhost:3001/parents')
      .then((res) => res.json()
      );
    setParents(res);
  }

  useEffect(() => {
    getParents();
  }, []);

  let navigate = useNavigate();

  return (
    <>
      <ButtonAppBar />
      <div className="welcome-header">
        {
          parents !== undefined && parents.length > 0 &&
          <Typography variant="h3" fontFamily={'Be Vietnam Pro'}>Välkommen {parents[0].name}</Typography>
        }
      </div>
      <div className="welcome-content">
        <div className="welcome-box">
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
        </div>
      </div>
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
      }} onClick={() => { navigate('/select') }}>
        Gå vidare
      </Button>
    </>
  );
}

export default Welcome;