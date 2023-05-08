import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import CloseIcon from '@mui/icons-material/Close';

const boxStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 470,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 2,
};
const buttonStyle = {
    backgroundColor: '#902598',
    color: '#fff',
    width: '12%',
    height: '35px',
    marginBottom: '15px',
    fontSize: '14px',
    fontWeight: 'bold',
    textTransform: 'none',
    borderRadius: '5px',
    boxShadow: '0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)',
    '&:hover': {
        backgroundColor: '#902598',
        boxShadow: '0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)',
    }
};
const dropdownStyle = { 
    width: '40%',
    padding: '5px 0',
    borderColor: 'lightgray',

};

function AddPurchase() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

  return (
    <>
        <Button onClick={handleOpen} style={buttonStyle}>
            Add purchase
        </Button>
        <Modal
            open={open}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={boxStyle}>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: 0}}>
                    <h3 id="modal-modal-title">Enter your new purchase</h3>
                    <IconButton onClick={handleClose}><CloseIcon /></IconButton>
                </div>
                <p id="modal-modal-description" sx={{ mt: 2, width: '100%' }}>
                    <TextField
                        id="outlined-basic"
                        label="Name"
                        type='text'
                        variant="outlined"
                        sx={{width: '100%'}}
                    />
                </p>
                <p id="modal-modal-description" sx={{ mt: 2 }}>
                    <div className="dropdown-category">
                        <label for="categories">Choose a category: </label>
                        <select name="category" id="categories" style={dropdownStyle}>
                            <option value="food">Food</option>
                            <option value="clothes">Clothes</option>
                            <option value="restaurants">Restaurants</option>
                            <option value="cinema">Cinema</option>
                        </select>
                    </div>
                </p>
                <p id="modal-modal-description" sx={{ mt: 2 }}>
                    <TextField
                        id="outlined-number"
                        label="Price"
                        type="number"
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

export default AddPurchase;