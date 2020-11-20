import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import ClearIcon from '@material-ui/icons/Clear';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: 'white',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    border: 'none',
    display: 'flex',
    padding: '10px',
    borderRadius: '4px'
  },
  iframe: {
    margin: '25px',
  },
  closeBtn: {
    cursor: 'pointer'
  }
}));

export default function TransitionsModal(props) {
  const classes = useStyles();
  const {
    handleClose,
    open
  } = props;

  return (
    <>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        onEscapeKeyDown={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <iframe className={classes.iframe} width="560" height="315" src="https://www.youtube.com/embed/o0p18XpvL-U" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <ClearIcon onClick={handleClose} />
          </div>
        </Fade>
      </Modal>
    </>
  );
}
