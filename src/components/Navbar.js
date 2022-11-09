import Popup from 'reactjs-popup'
import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import { GrHomeRounded } from 'react-icons/gr';
import { GrStatusInfo } from 'react-icons/gr';
import { AiOutlineArrowLeft } from 'react-icons/ai';


const Navbar = () => {


  const navigate = useNavigate();

  const Modal = () => (
    <Popup trigger={<button className="button"> Open Modal </button>} modal>
      <span> Modal content </span>
    </Popup>
  );

  return (
    <div>
      <div className="navbar">
        <button id="arrowBTN"  onClick={() => navigate(-1)}><AiOutlineArrowLeft /></button>
        <button id='homeBTN'><Link to="/Welcome"><GrHomeRounded /> </Link></button>
        <Popup
          trigger={<button className="infoButton"><GrStatusInfo /> </button>}
          modal
          nested
        >
          {close => (
            <div className="modal">
              <button className="close" onClick={close}>
                &times;
              </button>
              <div className="content">
                {' '}
                HÄR SKA DET STÅ TEXT DIN JÄVLA LUFFARE
              </div>
            </div>
          )}
        </Popup>
      </div>
    </div>
  );
}

export default Navbar;