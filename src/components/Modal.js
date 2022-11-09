import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import '../styles/Modal.css'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button sx={{color: "orange", textTransform: "none"}} className='modalBTN' onClick={handleOpen}>Stämmer inte dina uppgifter?</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          Stämmer inte dina uppgifter? <br/>
          Hör av dig till ansvarig på Nacka kommun.
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Kontaktperson: Margareta af Silversked <br/>
            Telefonnummer: 08 71 67 676 <br/>
            Kontor: Nacka Kommun
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}