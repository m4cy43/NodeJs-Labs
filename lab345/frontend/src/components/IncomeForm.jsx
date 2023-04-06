import React from 'react';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import CloseIcon from '@mui/icons-material/Close';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 220,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 2,
};

function IncomeForm() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

  return (
    <>
        <IconButton onClick={handleOpen}>
            <AddCircleOutlineIcon fontSize="small" />
        </IconButton>
        <Modal
            open={open}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: 0}}>
                    <h2 id="modal-modal-title">Enter income</h2>
                    <IconButton onClick={handleClose}><CloseIcon /></IconButton>
                </div>
                <p id="modal-modal-description" sx={{ mt: 2 }}>
                    <TextField
                        id="outlined-number"
                        label="Amount"
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                    />
                </p>
                <p id="modal-modal-description" sx={{ mt: 2 }}>
                    <TextField
                        id="outlined-number"
                        label="Date"
                        type="date"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                    />
                </p>
                <Button variant="contained" style={{backgroundColor: '#902598'}} onClick={handleClose}>Add</Button>
            </Box>
        </Modal>
    </>
  );
}

export default IncomeForm;