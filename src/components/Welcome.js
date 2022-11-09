import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Modal from "./Modal"
import ButtonAppBar from './ButtonAppBar';
import { Button } from "@mui/material"


const Welcome = () => {

  const [data, setData] = useState([]);
  let navigate = useNavigate();

  const getData = async () => {
    await fetch('db.json', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setData(res);
      });
  };

  useEffect(() => {
    const getDataAsync = async () => {
      await getData();
    }
    getDataAsync();
  }, []);

  return (
    <>
      <ButtonAppBar />
      <div className="welcome-header">
        {
          data.parents !== undefined && data.parents.length > 0 &&
          <h1>Välkommen {data.parents[0].name}</h1>
        }
      </div>
      <div className="welcome-content">
        <div className="welcome-box">
          {
            data.parents !== undefined && data.parents.map((item, index) => {
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
                  <p className="welcome-p">Din registrerade adress är: <br /> {data.parents[0].adress} <br /> {data.parents[0].postnummer} {data.parents[0].ort}</p>
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