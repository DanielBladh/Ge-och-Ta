import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Modal from "./Modal"
import ButtonAppBar from './ButtonAppBar';
import { Button } from "@mui/material"


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
          <h1>Välkommen {parents[0].name}</h1>
        }
      </div>
      <div className="welcome-content">
        <div className="welcome-box">
          {
            parents !== undefined && parents.map((item, index) => {
              return (
                <div key={index}>
                  <p className="welcome-p">Du har {item.children.length} barn registrerad.</p>
                  {
                    item.children.map((child, index) => {
                      return (
                        <p className="welcome-p" key={index}>{child.name} - {child.age}</p>
                      )
                    })
                  }
                  {
                    item.currentPackages.map((currentPackage, index) => {
                      return (
                        <p className="welcome-p" key={index}>{currentPackage.size}</p>
                      )
                    })
                  }
                  <br />
                  <p className="welcome-p">Din registrerade adress är: <br /> {parents[0].adress} <br /> {parents[0].postnummer} {parents[0].ort}</p>
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